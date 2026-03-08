import type { Response, NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/Users.models.js';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      _id?: string;
    }
  }
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["token"] as string;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { _id: string };
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        (req as any)._id = decoded._id;
        (req as any).userId = decoded._id;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid token" });
    }
}

export default authMiddleware;