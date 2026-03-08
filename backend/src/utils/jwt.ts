import jwt from "jsonwebtoken";

export const generateToken = (payload: any): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", {
    expiresIn: "7d",
  });
  return token;
};

export const verifyToken = (token: string): any => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export const decodeToken = (token: string): any => {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
