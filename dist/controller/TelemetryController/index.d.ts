import { Request, Response } from 'express';
export declare const TelemetryController: {
    /**
     * GET /api/v1/devices/:deviceId/telemetry/sensor
     * Pagination support: limit, offset, from, to
     */
    querySensor: (req: Request, res: Response) => Promise<void>;
    /**
     * GET /api/v1/devices/:deviceId/telemetry/sensor/latest
     */
    getLatestSensor: (req: Request, res: Response) => Promise<void>;
    /**
     * GET /api/v1/devices/:deviceId/telemetry/history
     */
    queryHistory: (req: Request, res: Response) => Promise<void>;
    /**
     * GET /api/v1/devices/:deviceId/telemetry/history/latest
     */
    getLatestHistory: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map