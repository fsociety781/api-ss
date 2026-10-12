import { UserRole, UserStatus } from '../src/generated/prisma/client';

export interface TokenPayload {
  userId: string;
  phoneNumber: string;
  email: string | null;
  role: UserRole;
  status: UserStatus;
}

export interface AuthUser {
  id: string;
  fullName: string | null;
  phoneNumber: string;
  email: string | null;
  role: UserRole;
  status: UserStatus;
  profileCompleted: boolean;
  mustChangePassword: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

