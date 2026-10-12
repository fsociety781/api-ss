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
// Device detail, creation, deletion
router.get('/:deviceId', authMiddleware_1.optionalAuth, (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.getDevice));
router.post('/', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.createDevice));
router.delete('/:deviceId', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.deleteDevice));
// IoT ESP32 Telemetry & Heartbeat
router.post('/telemetry', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.ingestTelemetry));
router.post('/heartbeat', (0, async_handler_1.asyncHandler)(DeviceController_1.DeviceController.heartbeat));
exports.default = router;
//# sourceMappingURL=index.js.map