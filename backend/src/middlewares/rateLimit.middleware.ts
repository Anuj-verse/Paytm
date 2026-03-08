import type { Request, Response, NextFunction } from "express";

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

export const rateLimitMiddleware = (
  windowMs: number = 60 * 1000, // 1 minute
  maxRequests: number = 100
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.ip || "unknown";
    const now = Date.now();

    if (!store[key]) {
      store[key] = { count: 1, resetTime: now + windowMs };
      next();
      return;
    }

    const { count, resetTime } = store[key];

    if (now > resetTime) {
      store[key] = { count: 1, resetTime: now + windowMs };
      next();
      return;
    }

    if (count >= maxRequests) {
      res.status(429).json({
        message: "Too many requests, please try again later",
      });
      return;
    }

    store[key].count++;
    next();
  };
};
