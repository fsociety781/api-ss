import express, { Router } from 'express';
import { OtaController } from '../controller/OtaController';
import { authMiddleware } from '../middleware/authMiddleware';
import { asyncHandler } from '../utils/async-handler';

const router: Router = express.Router();

router.use(authMiddleware);

// OTA Operations
router.post('/trigger', asyncHandler(OtaController.triggerOta));
router.post('/trigger/:deviceId', asyncHandler(OtaController.triggerOta));
router.post('/legacy-trigger/:deviceId', asyncHandler(OtaController.triggerOta));
router.post('/broadcast', asyncHandler(OtaController.broadcastOta));
router.get('/logs', asyncHandler(OtaController.getOtaLogs));
router.get('/logs/:deviceId', asyncHandler(OtaController.getOtaLogs));

export default router;
