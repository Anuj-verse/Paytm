import type { Request, Response, NextFunction } from "express";

export interface CustomError extends Error {
  statusCode?: number;
}

export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${statusCode}: ${message}`);

  res.status(statusCode).json({
    error: {
      statusCode,
      message,
      timestamp: new Date().toISOString(),
    },
  });
};

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).json({
    error: {
      statusCode: 404,
      message: "Route not found",
    },
  });
};
