import { Request, Response } from 'express';
export declare const FarmerController: {
    getDashboard: (req: Request, res: Response) => Promise<void>;
    getPresets: (_req: Request, res: Response) => Promise<void>;
    applyPreset: (req: Request, res: Response) => Promise<void>;
    bulkToggleActuator: (req: Request, res: Response) => Promise<void>;
    getDeviceAnalytics: (req: Request, res: Response) => Promise<void>;
    claimDevice: (req: Request, res: Response) => Promise<void>;
    listMyDevices: (req: Request, res: Response) => Promise<void>;
    getMyDeviceById: (req: Request, res: Response) => Promise<void>;
    unclaimDevice: (req: Request, res: Response) => Promise<void>;
    setControlMode: (req: Request, res: Response) => Promise<void>;
    toggleActuator: (req: Request, res: Response) => Promise<void>;
    updateSettings: (req: Request, res: Response) => Promise<void>;
    getTelemetryHistory: (req: Request, res: Response) => Promise<void>;
    getControlLogs: (req: Request, res: Response) => Promise<void>;
    listSchedules: (req: Request, res: Response) => Promise<void>;
    createSchedule: (req: Request, res: Response) => Promise<void>;
    deleteSchedule: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map