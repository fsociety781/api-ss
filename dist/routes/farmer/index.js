"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FarmerController_1 = require("../../controller/FarmerController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const farmerMiddleware_1 = require("../../middleware/farmerMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
// Semua rute farmer dilindungi oleh auth + role farmer
router.use(authMiddleware_1.authMiddleware);
router.use(farmerMiddleware_1.farmerMiddleware);
// Farmer Dashboard & Presets
router.get('/dashboard', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getDashboard));
router.get('/presets', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getPresets));
// Bulk / Emergency actuator control
router.post('/devices/bulk-toggle', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.bulkToggleActuator));
// Device management & claiming
router.post('/devices/claim', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.claimDevice));
router.get('/devices', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.listMyDevices));
router.get('/devices/:id', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getMyDeviceById));
router.post('/devices/:id/unclaim', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.unclaimDevice));
// Apply Mushroom Cultivation Preset
router.post('/devices/:id/presets/apply', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.applyPreset));
// Statistical Analytics
router.get('/devices/:id/analytics', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getDeviceAnalytics));
// Device control & settings
router.post('/devices/:id/control/mode', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.setControlMode));
router.post('/devices/:id/actuators/:actuatorId/toggle', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.toggleActuator));
router.put('/devices/:id/settings', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.updateSettings));
// Telemetry & logs
router.get('/devices/:id/telemetry', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getTelemetryHistory));
router.get('/devices/:id/logs', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.getControlLogs));
// Schedules
router.get('/devices/:id/schedules', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.listSchedules));
router.post('/devices/:id/schedules', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.createSchedule));
router.delete('/devices/:id/schedules/:scheduleId', (0, async_handler_1.asyncHandler)(FarmerController_1.FarmerController.deleteSchedule));
exports.default = router;
//# sourceMappingURL=index.js.map