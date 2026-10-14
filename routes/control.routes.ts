import express, { Router } from 'express';
import { ControlController } from '../controller/ControlController';
import { authMiddleware } from '../middleware/authMiddleware';
import { asyncHandler } from '../utils/async-handler';

const router: Router = express.Router();

// All control routes require authentication (SECURITY FIX)
router.use(authMiddleware);

router.post(
  '/:deviceId/control/mode',
  asyncHandler(ControlController.changeControlMode),
);
router.post(
  '/:deviceId/setpoint',
  asyncHandler(ControlController.updateSetpoint),
);
router.post('/:deviceId/timer', asyncHandler(ControlController.updateTimer));
router.post(
  '/:deviceId/timer/floor',
  asyncHandler(ControlController.updateFloorTimer),
);
router.post(
  '/:deviceId/floor-timer',
  asyncHandler(ControlController.updateFloorTimer),
);
router.post(
  '/:deviceId/schedule',
  asyncHandler(ControlController.updateSchedule),
);
router.post(
  '/:deviceId/schedule/update',
  asyncHandler(ControlController.updateSchedule),
);
router.post(
  '/:deviceId/schedule/floor',
  asyncHandler(ControlController.updateFloorSchedule),
);
router.post(
  '/:deviceId/floor-schedule',
  asyncHandler(ControlController.updateFloorSchedule),
);
router.post(
  '/:deviceId/schedule/mode',
  asyncHandler(ControlController.changeScheduleMode),
);
router.post(
  '/:deviceId/schedule-mode',
  asyncHandler(ControlController.changeScheduleMode),
);
router.post(
  '/:deviceId/actuator/pump',
  asyncHandler(ControlController.controlPump),
);
router.post(
  '/:deviceId/control/pump',
  asyncHandler(ControlController.controlPump),
);
router.post(
  '/:deviceId/actuator/fan',
  asyncHandler(ControlController.controlFan),
);
router.post(
  '/:deviceId/control/fan',
  asyncHandler(ControlController.controlFan),
);

export default router;
