import { Request, Response } from 'express';
export declare const AuthController: {
    login: (req: Request, res: Response) => Promise<void>;
    completeOnboarding: (req: Request, res: Response) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
    getMe: (req: Request, res: Response) => Promise<void>;
    updateProfile: (req: Request, res: Response) => Promise<void>;
    updateFcmToken: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map