import { Request, Response } from 'express';
export declare const CycleController: {
    listCycles: (req: Request, res: Response) => Promise<void>;
    createCycle: (req: Request, res: Response) => Promise<void>;
    getCycle: (req: Request, res: Response) => Promise<void>;
    updateCycle: (req: Request, res: Response) => Promise<void>;
    completeCycle: (req: Request, res: Response) => Promise<void>;
    deleteCycle: (req: Request, res: Response) => Promise<void>;
    getCycleSummary: (req: Request, res: Response) => Promise<void>;
    listHarvests: (req: Request, res: Response) => Promise<void>;
    addHarvest: (req: Request, res: Response) => Promise<void>;
    updateHarvest: (req: Request, res: Response) => Promise<void>;
    deleteHarvest: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map