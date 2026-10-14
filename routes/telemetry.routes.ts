import express, { Router } from 'express';
import { TelemetryController } from '../controller/TelemetryController';
import { authMiddleware } from '../middleware/authMiddleware';
import { asyncHandler } from '../utils/async-handler';

const router: Router = express.Router();

// All telemetry routes require authentication (SECURITY FIX)
router.use(authMiddleware);

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
