import express, { Router } from 'express';
import { TelemetryController } from '../controller/TelemetryController';
import { asyncHandler } from '../utils/async-handler';

const router: Router = express.Router();

router.get(
  '/:deviceId/telemetry/sensor',
  asyncHandler(TelemetryController.querySensor),
);
router.get(
  '/:deviceId/telemetry/sensor/latest',
  asyncHandler(TelemetryController.getLatestSensor),
);
router.get(
  '/:deviceId/telemetry/history',
  asyncHandler(TelemetryController.queryHistory),
);
router.get(
  '/:deviceId/telemetry/history/latest',
  asyncHandler(TelemetryController.getLatestHistory),
);

export default router;
