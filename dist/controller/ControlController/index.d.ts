import { Request, Response } from 'express';
export declare const ControlController: {
    /**
     * POST /api/v1/devices/:deviceId/control/mode
     * 1 = Manual, 2 = Auto, 3 = Hybrid
     */
    changeControlMode: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/setpoint
     * { MinS, MidS, MinK, MidK }
     */
    updateSetpoint: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/timer
     * { Menit, Detik }
     */
    updateTimer: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/timer/floor
     * { FlrMenit, FlrDetik }
     */
    updateFloorTimer: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/schedule
     * { jam1, menit1, jam2, menit2, jam3, menit3 }
     */
    updateSchedule: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/schedule/floor
     * { FlrJam, FlrMenit }
     */
    updateFloorSchedule: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/schedule/mode
     * { mode: 1 | 2 | 3 }
     */
    changeScheduleMode: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/actuator/pump
     * { on: boolean }
     */
    controlPump: (req: Request, res: Response) => Promise<void>;
    /**
     * POST /api/v1/devices/:deviceId/actuator/fan
     * { on: boolean } or { state: "ON"|"OFF" }
     */
    controlFan: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map