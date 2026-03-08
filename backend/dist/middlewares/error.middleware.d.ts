import type { Request, Response, NextFunction } from "express";
export interface CustomError extends Error {
    statusCode?: number;
}
export declare const errorMiddleware: (err: CustomError, req: Request, res: Response, next: NextFunction) => void;
export declare const notFoundMiddleware: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error.middleware.d.ts.map