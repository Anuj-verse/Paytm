import type { Response, NextFunction, Request } from 'express';
declare global {
    namespace Express {
        interface Request {
            userId?: string;
            _id?: string;
        }
    }
}
declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default authMiddleware;
//# sourceMappingURL=auth.middleware.d.ts.map