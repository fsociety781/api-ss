import express, { Router } from 'express';
import { CycleController } from '../controller/CycleController';
import { authMiddleware } from '../middleware/authMiddleware';
import { asyncHandler } from '../utils/async-handler';

const router: Router = express.Router();

// All cycle routes require authentication (SECURITY FIX)
router.use(authMiddleware);

router.get('/:deviceId/cycles', asyncHandler(CycleController.listCycles));
router.post('/:deviceId/cycles', asyncHandler(CycleController.createCycle));

router.get(
  '/:deviceId/cycles/:cycleId',
  asyncHandler(CycleController.getCycle),
);
router.patch(
  '/:deviceId/cycles/:cycleId',
  asyncHandler(CycleController.updateCycle),
);
router.put(
  '/:deviceId/cycles/:cycleId',
  asyncHandler(CycleController.updateCycle),
);
router.post(
  '/:deviceId/cycles/:cycleId/complete',
  asyncHandler(CycleController.completeCycle),
);
router.delete(
  '/:deviceId/cycles/:cycleId',
  asyncHandler(CycleController.deleteCycle),
);

router.get(
  '/:deviceId/cycles/:cycleId/summary',
  asyncHandler(CycleController.getCycleSummary),
);

router.get(
  '/:deviceId/cycles/:cycleId/harvests',
  asyncHandler(CycleController.listHarvests),
);
router.post(
  '/:deviceId/cycles/:cycleId/harvests',
  asyncHandler(CycleController.addHarvest),
);
router.patch(
  '/:deviceId/cycles/:cycleId/harvests/:harvestId',
  asyncHandler(CycleController.updateHarvest),
);
router.put(
  '/:deviceId/cycles/:cycleId/harvests/:harvestId',
  asyncHandler(CycleController.updateHarvest),
);
router.delete(
  '/:deviceId/cycles/:cycleId/harvests/:harvestId',
  asyncHandler(CycleController.deleteHarvest),
);

export default router;
