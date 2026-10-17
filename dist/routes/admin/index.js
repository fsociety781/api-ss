"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminController_1 = require("../../controller/AdminController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const adminMiddleware_1 = require("../../middleware/adminMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
// Semua rute admin dilindungi oleh auth + role admin
router.use(authMiddleware_1.authMiddleware);
router.use(adminMiddleware_1.adminMiddleware);
// Admin Dashboard
router.get('/dashboard', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.getDashboard));
// Farmer management
router.post('/farmers', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.createFarmer));
router.get('/farmers', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.listFarmers));
router.get('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.getFarmerById));
router.put('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.updateFarmer));
router.delete('/farmers/:id', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.deleteFarmer));
// Device assignment
router.get('/devices', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.listDevices));
router.post('/devices/assign', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.assignDevice));
router.post('/devices/:deviceId/unassign', (0, async_handler_1.asyncHandler)(AdminController_1.AdminController.unassignDevice));
exports.default = router;
//# sourceMappingURL=index.js.map