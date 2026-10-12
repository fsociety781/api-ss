import express, { Router } from 'express';
import { TechController } from '../../controller/TechController';
import { authMiddleware } from '../../middleware/authMiddleware';
import { technicMiddleware } from '../../middleware/technicMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

// Semua rute teknisi dilindungi oleh auth + role technician
router.use(authMiddleware);
router.use(technicMiddleware);

// Technician Dashboard & Diagnostics
router.get('/dashboard', asyncHandler(TechController.getDashboard));

// Device management
router.post('/devices', asyncHandler(TechController.createDevice));
router.get('/devices', asyncHandler(TechController.listDevices));
router.get('/devices/:id', asyncHandler(TechController.getDeviceById));
router.put('/devices/:id', asyncHandler(TechController.updateDevice));
router.delete('/devices/:id', asyncHandler(TechController.deleteDevice));

// Admin management
router.post('/admins', asyncHandler(TechController.createAdmin));
router.get('/admins', asyncHandler(TechController.listAdmins));
router.put('/admins/:id/status', asyncHandler(TechController.updateAdminStatus));

export default router;
