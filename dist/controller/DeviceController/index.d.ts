import { Request, Response } from 'express';
export declare const DeviceController: {
    /**
     * GET /api/v1/devices
     */
    listDevices: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/activate
     */
    activateDevice: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/unpair/:deviceId
     */
    unpairDevice: (req: Request, res: Response) => Promise<void>;
    /**
     * GET /api/v1/devices/:deviceId
     */
    getDevice: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices
     */
    createDevice: (req: Request, res: Response) => Promise<void>;
    getDeviceIdentity: (req: Request, res: Response) => Promise<void>;
    getNextSerial: (_req: Request, res: Response) => Promise<void>;
    /**
     * DELETE /api/v1/devices/:deviceId
     */
    deleteDevice: (req: Request, res: Response) => Promise<void>;
    /**
     * ESP32 Telemetry Push
     */
    ingestTelemetry: (req: Request, res: Response) => Promise<void>;
    /**
     * ESP32 Heartbeat
     */
    heartbeat: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map