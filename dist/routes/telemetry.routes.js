"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TelemetryController_1 = require("../controller/TelemetryController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const async_handler_1 = require("../utils/async-handler");
const router = express_1.default.Router();
// All telemetry routes require authentication (SECURITY FIX)
router.use(authMiddleware_1.authMiddleware);
router.get('/:deviceId/telemetry/sensor', (0, async_handler_1.asyncHandler)(TelemetryController_1.TelemetryController.querySensor));
router.get('/:deviceId/telemetry/sensor/latest', (0, async_handler_1.asyncHandler)(TelemetryController_1.TelemetryController.getLatestSensor));
router.get('/:deviceId/telemetry/history', (0, async_handler_1.asyncHandler)(TelemetryController_1.TelemetryController.queryHistory));
router.get('/:deviceId/telemetry/history/latest', (0, async_handler_1.asyncHandler)(TelemetryController_1.TelemetryController.getLatestHistory));
exports.default = router;
//# sourceMappingURL=telemetry.routes.js.map