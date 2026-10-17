import express, { Router } from 'express';
import { AdminController } from '../../controller/AdminController';
import { authMiddleware } from '../../middleware/authMiddleware';
import { adminMiddleware } from '../../middleware/adminMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

// Semua rute admin dilindungi oleh auth + role admin
router.use(authMiddleware);
router.use(adminMiddleware);

// Admin Dashboard
router.get('/dashboard', asyncHandler(AdminController.getDashboard));

// Farmer management
router.post('/farmers', asyncHandler(AdminController.createFarmer));
router.get('/farmers', asyncHandler(AdminController.listFarmers));
router.get('/farmers/:id', asyncHandler(AdminController.getFarmerById));
router.put('/farmers/:id', asyncHandler(AdminController.updateFarmer));
router.delete('/farmers/:id', asyncHandler(AdminController.deleteFarmer));

// Device assignment
router.get('/devices', asyncHandler(AdminController.listDevices));
router.post('/devices/assign', asyncHandler(AdminController.assignDevice));
router.post(
  '/devices/:deviceId/unassign',
  asyncHandler(AdminController.unassignDevice),
);

export default router;
