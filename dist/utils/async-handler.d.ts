import { NextFunction, Request, Response } from 'express';
export type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
export declare function asyncHandler(fn: AsyncRequestHandler): (req: Request, res: Response, next: NextFunction) => void;
export default asyncHandler;
//# sourceMappingURL=async-handler.d.ts.map