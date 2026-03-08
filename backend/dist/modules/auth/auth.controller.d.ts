import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "./auth.types.js";
export declare const signup: (req: Request, res: Response) => Promise<void>;
export declare const signin: (req: Request, res: Response) => Promise<void>;
export declare const getProfile: (req: AuthenticatedRequest, res: Response) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map