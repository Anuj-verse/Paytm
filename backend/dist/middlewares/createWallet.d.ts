import type { Response, Request, NextFunction } from 'express';
declare const createWallet: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default createWallet;
//# sourceMappingURL=createWallet.d.ts.map