import type { Request, Response, NextFunction } from "express";
export declare const rateLimitMiddleware: (windowMs?: number, // 1 minute
maxRequests?: number) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=rateLimit.middleware.d.ts.map