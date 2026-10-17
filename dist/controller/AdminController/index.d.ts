import { Request, Response } from 'express';
export declare const AdminController: {
    getDashboard: (_req: Request, res: Response) => Promise<void>;
    createFarmer: (req: Request, res: Response) => Promise<void>;
    listFarmers: (_req: Request, res: Response) => Promise<void>;
    getFarmerById: (req: Request, res: Response) => Promise<void>;
    updateFarmer: (req: Request, res: Response) => Promise<void>;
    deleteFarmer: (req: Request, res: Response) => Promise<void>;
    listDevices: (_req: Request, res: Response) => Promise<void>;
    assignDevice: (req: Request, res: Response) => Promise<void>;
    unassignDevice: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map