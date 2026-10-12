import { NextFunction, Request, Response } from 'express';
import '../types/auth';
export declare function authMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void>;
export declare function optionalAuth(req: Request, _res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=authMiddleware.d.ts.map