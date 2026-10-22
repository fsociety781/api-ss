"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TechController_1 = require("../../controller/TechController");
const AdminController_1 = require("../../controller/AdminController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const technicMiddleware_1 = require("../../middleware/technicMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
const FirmwareController_1 = require("../../controller/FirmwareController");
const OtaController_1 = require("../../controller/OtaController");
const firmwareUpload_1 = require("../../middleware/firmwareUpload");
// Semua rute teknisi dilindungi oleh auth + role technician
router.use(authMiddleware_1.authMiddleware);
router.use(technicMiddleware_1.technicMiddleware);
// Technician Dashboard & Diagnostics
router.get('/dashboard', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getDashboard));
// Device management
router.get('/next-serial', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getNextSerial));
router.post('/devices', (0, async_handler_1.asyncHandler)(TechController_1.TechController.createDevice));
router.get('/devices', (0, async_handler_1.asyncHandler)(TechController_1.TechController.listDevices));
router.get('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getDeviceById));
router.get('/devices/:id/identity', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getDeviceIdentity));
router.put('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.updateDevice));
router.delete('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.deleteDevice));
// Admin management
router.post('/admins', (0, async_handler_1.asyncHandler)(TechController_1.TechController.createAdmin));
router.get('/admins', (0, async_handler_1.asyncHandler)(TechController_1.TechController.listAdmins));
router.put('/admins/:id/status', (0, async_handler_1.asyncHandler)(TechController_1.TechController.updateAdminStatus));
// Farmer management (Teknisi dapat mengelola akun Petani)
router.post('/farmers', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.createFarmer));
router.get('/farmers', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.listFarmers));
router.get('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.getFarmerById));
router.put('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.updateFarmer));
router.delete('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.deleteFarmer));
// Firmware Binary Management (.bin)
router.post('/firmwares', firmwareUpload_1.firmwareUpload.single('firmware'), (0, async_handler_1.asyncHandler)(FirmwareController_1.FirmwareController.uploadFirmware));
router.get('/firmwares', (0, async_handler_1.asyncHandler)(FirmwareController_1.FirmwareController.listFirmwares));
router.get('/firmwares/:id', (0, async_handler_1.asyncHandler)(FirmwareController_1.FirmwareController.getFirmwareById));
router.delete('/firmwares/:id', (0, async_handler_1.asyncHandler)(FirmwareController_1.FirmwareController.deleteFirmware));
// OTA Deployment Operations
router.post('/ota/trigger', (0, async_handler_1.asyncHandler)(OtaController_1.OtaController.triggerOta));
router.post('/ota/trigger/:deviceId', (0, async_handler_1.asyncHandler)(OtaController_1.OtaController.triggerOta));
router.post('/ota/broadcast', (0, async_handler_1.asyncHandler)(OtaController_1.OtaController.broadcastOta));
router.get('/ota/logs', (0, async_handler_1.asyncHandler)(OtaController_1.OtaController.getOtaLogs));
router.get('/ota/logs/:deviceId', (0, async_handler_1.asyncHandler)(OtaController_1.OtaController.getOtaLogs));
exports.default = router;
//# sourceMappingURL=index.js.map