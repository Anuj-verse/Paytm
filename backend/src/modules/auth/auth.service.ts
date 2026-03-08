import User from "../../models/Users.models.js";
import Wallet from "../../models/wallet.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { SignupRequest, SigninRequest, AuthResponse, JWTPayload } from "./auth.types.js";

export class AuthService {
  async signup(data: SignupRequest): Promise<AuthResponse> {
    const { username, email, phone, password } = data;

    // Validate input
    if (!username || !email || !phone || !password) {
      throw new Error("All fields are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { phone }],
    });

    if (existingUser) {
      throw new Error("User credentials already exist");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    await newUser.save();

    // Create wallet for user
    const wallet = new Wallet({
      userId: newUser._id,
      balance: 0,
      currency: "INR",
    });
    await wallet.save();

    // Update user with wallet reference
    newUser.walletID = wallet._id;
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { _id: newUser._id },
      process.env.JWT_SECRET as string
    );

    return {
      message: "User created successfully",
      token,
      user: {
        id: newUser._id.toString(),
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
      },
    };
  }

  async signin(data: SigninRequest): Promise<AuthResponse> {
    const { email, password } = data;

    // Validate input
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string
    );

    return {
      message: "Signin successful",
      token,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
    };
  }

  async verifyToken(token: string): Promise<JWTPayload> {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JWTPayload;
      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  async getUserById(userId: string) {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}

export const authService = new AuthService();
