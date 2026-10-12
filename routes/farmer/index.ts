import express, { Router } from 'express';
import { FarmerController } from '../../controller/FarmerController';
import { authMiddleware } from '../../middleware/authMiddleware';
import { farmerMiddleware } from '../../middleware/farmerMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

// Semua rute farmer dilindungi oleh auth + role farmer
router.use(authMiddleware);
router.use(farmerMiddleware);

// Farmer Dashboard & Presets
router.get('/dashboard', asyncHandler(FarmerController.getDashboard));
router.get('/presets', asyncHandler(FarmerController.getPresets));

// Bulk / Emergency actuator control
router.post(
  '/devices/bulk-toggle',
  asyncHandler(FarmerController.bulkToggleActuator),
);

// Device management & claiming
router.post('/devices/claim', asyncHandler(FarmerController.claimDevice));
router.get('/devices', asyncHandler(FarmerController.listMyDevices));
router.get('/devices/:id', asyncHandler(FarmerController.getMyDeviceById));
router.post('/devices/:id/unclaim', asyncHandler(FarmerController.unclaimDevice));

// Apply Mushroom Cultivation Preset
router.post(
  '/devices/:id/presets/apply',
  asyncHandler(FarmerController.applyPreset),
);

// Statistical Analytics
router.get(
  '/devices/:id/analytics',
  asyncHandler(FarmerController.getDeviceAnalytics),
);

// Device control & settings
router.post(
  '/devices/:id/control/mode',
  asyncHandler(FarmerController.setControlMode),
);
router.post(
  '/devices/:id/actuators/:actuatorId/toggle',
  asyncHandler(FarmerController.toggleActuator),
);
router.put('/devices/:id/settings', asyncHandler(FarmerController.updateSettings));

// Telemetry & logs
router.get(
  '/devices/:id/telemetry',
  asyncHandler(FarmerController.getTelemetryHistory),
);
router.get('/devices/:id/logs', asyncHandler(FarmerController.getControlLogs));

// Schedules
router.get(
  '/devices/:id/schedules',
  asyncHandler(FarmerController.listSchedules),
);
router.post(
  '/devices/:id/schedules',
  asyncHandler(FarmerController.createSchedule),
);
router.delete(
  '/devices/:id/schedules/:scheduleId',
  asyncHandler(FarmerController.deleteSchedule),
);

export default router;
