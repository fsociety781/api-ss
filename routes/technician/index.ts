import express, { Router } from 'express';
import { TechController } from '../../controller/TechController';
import { AdminController } from '../../controller/AdminController';
import { authMiddleware } from '../../middleware/authMiddleware';
import { technicMiddleware } from '../../middleware/technicMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

import { FirmwareController } from '../../controller/FirmwareController';
import { OtaController } from '../../controller/OtaController';
import { firmwareUpload } from '../../middleware/firmwareUpload';

// Semua rute teknisi dilindungi oleh auth + role technician
router.use(authMiddleware);
router.use(technicMiddleware);

// Technician Dashboard & Diagnostics
router.get('/dashboard', asyncHandler(TechController.getDashboard));

// Device management
router.get('/next-serial', asyncHandler(TechController.getNextSerial));
router.post('/devices', asyncHandler(TechController.createDevice));
router.get('/devices', asyncHandler(TechController.listDevices));
router.get('/devices/:id', asyncHandler(TechController.getDeviceById));
router.get('/devices/:id/identity', asyncHandler(TechController.getDeviceIdentity));
router.put('/devices/:id', asyncHandler(TechController.updateDevice));
router.delete('/devices/:id', asyncHandler(TechController.deleteDevice));

// Admin management
router.post('/admins', asyncHandler(TechController.createAdmin));
router.get('/admins', asyncHandler(TechController.listAdmins));
router.put('/admins/:id/status', asyncHandler(TechController.updateAdminStatus));

// Farmer management (Teknisi dapat mengelola akun Petani)
router.post('/farmers', asyncHandler(AdminController.createFarmer));
router.get('/farmers', asyncHandler(AdminController.listFarmers));
router.get('/farmers/:id', asyncHandler(AdminController.getFarmerById));
router.put('/farmers/:id', asyncHandler(AdminController.updateFarmer));
router.delete('/farmers/:id', asyncHandler(AdminController.deleteFarmer));

// Firmware Binary Management (.bin)
router.post('/firmwares', firmwareUpload.single('firmware'), asyncHandler(FirmwareController.uploadFirmware));
router.get('/firmwares', asyncHandler(FirmwareController.listFirmwares));
router.get('/firmwares/:id', asyncHandler(FirmwareController.getFirmwareById));
router.delete('/firmwares/:id', asyncHandler(FirmwareController.deleteFirmware));

// OTA Deployment Operations
router.post('/ota/trigger', asyncHandler(OtaController.triggerOta));
router.post('/ota/trigger/:deviceId', asyncHandler(OtaController.triggerOta));
router.post('/ota/broadcast', asyncHandler(OtaController.broadcastOta));
router.get('/ota/logs', asyncHandler(OtaController.getOtaLogs));
router.get('/ota/logs/:deviceId', asyncHandler(OtaController.getOtaLogs));

export default router;
