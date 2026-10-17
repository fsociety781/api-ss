"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DeviceController_1 = require("../../controller/DeviceController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
// Device listing & activation (matches api-shroomsync routes)
router.get('/', authMiddleware_1.optionalAuth, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.listDevices));
router.post('/activate', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.activateDevice));
router.post('/unpair/:deviceId', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.unpairDevice));
router.post('/:deviceId/unpair', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.unpairDevice));
// Meaningful serial number recommendation
router.get('/next-serial', authMiddleware_1.optionalAuth, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.getNextSerial));
// Device detail (requires auth)
router.get('/:deviceId', authMiddleware_1.optionalAuth, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.getDevice));
router.get('/:deviceId/identity', authMiddleware_1.optionalAuth, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.getDeviceIdentity));
// Device creation & deletion (requires auth — SECURITY FIX)
router.post('/', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.createDevice));
router.delete('/:deviceId', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.deleteDevice));
// IoT ESP32 Telemetry & Heartbeat (device-to-server, authenticated via activation code in body)
router.post('/telemetry', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.ingestTelemetry));
router.post('/heartbeat', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.heartbeat));
exports.default = router;
//# sourceMappingURL=index.js.map