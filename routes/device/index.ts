import express, { Router } from 'express';
import { DeviceController } from '../../controller/DeviceController';
import {
  authMiddleware,
  optionalAuth,
} from '../../middleware/authMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

// Device listing & activation (matches api-shroomsync routes)
router.get('/', optionalAuth, asyncHandler(DeviceController.listDevices));
router.post(
  '/activate',
  authMiddleware,
  asyncHandler(DeviceController.activateDevice),
);
router.post(
  '/unpair/:deviceId',
  authMiddleware,
  asyncHandler(DeviceController.unpairDevice),
);
router.post(
  '/:deviceId/unpair',
  authMiddleware,
  asyncHandler(DeviceController.unpairDevice),
);

// Device detail (requires auth)
router.get('/:deviceId', optionalAuth, asyncHandler(DeviceController.getDevice));

// Device creation & deletion (requires auth — SECURITY FIX)
router.post('/', authMiddleware, asyncHandler(DeviceController.createDevice));
router.delete('/:deviceId', authMiddleware, asyncHandler(DeviceController.deleteDevice));

// IoT ESP32 Telemetry & Heartbeat (device-to-server, authenticated via activation code in body)
router.post('/telemetry', asyncHandler(DeviceController.ingestTelemetry));
router.post('/heartbeat', asyncHandler(DeviceController.heartbeat));

export default router;
