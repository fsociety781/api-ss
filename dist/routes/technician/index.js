"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TechController_1 = require("../../controller/TechController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const technicMiddleware_1 = require("../../middleware/technicMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
// Semua rute teknisi dilindungi oleh auth + role technician
router.use(authMiddleware_1.authMiddleware);
router.use(technicMiddleware_1.technicMiddleware);
// Technician Dashboard & Diagnostics
router.get('/dashboard', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getDashboard));
// Device management
router.post('/devices', (0, async_handler_1.asyncHandler)(TechController_1.TechController.createDevice));
router.get('/devices', (0, async_handler_1.asyncHandler)(TechController_1.TechController.listDevices));
router.get('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.getDeviceById));
router.put('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.updateDevice));
router.delete('/devices/:id', (0, async_handler_1.asyncHandler)(TechController_1.TechController.deleteDevice));
// Admin management
router.post('/admins', (0, async_handler_1.asyncHandler)(TechController_1.TechController.createAdmin));
router.get('/admins', (0, async_handler_1.asyncHandler)(TechController_1.TechController.listAdmins));
router.put('/admins/:id/status', (0, async_handler_1.asyncHandler)(TechController_1.TechController.updateAdminStatus));
exports.default = router;
//# sourceMappingURL=index.js.map