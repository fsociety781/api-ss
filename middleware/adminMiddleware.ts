import { NextFunction, Request, Response } from 'express';
import { ForbiddenError, UnauthorizedError } from '../utils/errors';

export function adminMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  if (!req.user) {
    return next(new UnauthorizedError('Otentikasi diperlukan'));
  }

  if (req.user.role !== 'ADMIN' && req.user.role !== 'TECHNICIAN') {
    return next(
      new ForbiddenError('Hanya administrator yang berhak mengakses endpoint ini'),
    );
  }

  next();
}
