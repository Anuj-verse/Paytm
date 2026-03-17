import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import type { SignupRequest, SigninRequest, AuthenticatedRequest } from "./auth.types.js";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, phone, password } = req.body as SignupRequest;
    console.log("Signup request received:", { username, email, phone, password });
    const result = await authService.signup({ username, email, phone, password });
    res.status(201).json({ message: "User created successfully", user: result ,token: result.token});
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as SigninRequest;
    console.log("Signin request received:", { email, password });
    const result = await authService.signin({ email, password });
    res.status(200).json({ message: "Login successful", user: result.user, token: result.token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const getProfile = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId || (req as any)._id;
    const user = await authService.getUserById(userId);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
