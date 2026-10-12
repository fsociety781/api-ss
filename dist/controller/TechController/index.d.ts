import { Request, Response } from 'express';
export declare const TechController: {
    getDashboard: (_req: Request, res: Response) => Promise<void>;
    createDevice: (req: Request, res: Response) => Promise<void>;
    listDevices: (_req: Request, res: Response) => Promise<void>;
    getDeviceById: (req: Request, res: Response) => Promise<void>;
    updateDevice: (req: Request, res: Response) => Promise<void>;
    deleteDevice: (req: Request, res: Response) => Promise<void>;
    createAdmin: (req: Request, res: Response) => Promise<void>;
    listAdmins: (_req: Request, res: Response) => Promise<void>;
    updateAdminStatus: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map