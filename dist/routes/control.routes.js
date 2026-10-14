"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ControlController_1 = require("../controller/ControlController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const async_handler_1 = require("../utils/async-handler");
const router = express_1.default.Router();
// All control routes require authentication (SECURITY FIX)
router.use(authMiddleware_1.authMiddleware);
router.post('/:deviceId/control/mode', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.changeControlMode));
router.post('/:deviceId/setpoint', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateSetpoint));
router.post('/:deviceId/timer', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateTimer));
router.post('/:deviceId/timer/floor', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateFloorTimer));
router.post('/:deviceId/floor-timer', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateFloorTimer));
router.post('/:deviceId/schedule', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateSchedule));
router.post('/:deviceId/schedule/update', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateSchedule));
router.post('/:deviceId/schedule/floor', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateFloorSchedule));
router.post('/:deviceId/floor-schedule', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.updateFloorSchedule));
router.post('/:deviceId/schedule/mode', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.changeScheduleMode));
router.post('/:deviceId/schedule-mode', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.changeScheduleMode));
router.post('/:deviceId/actuator/pump', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.controlPump));
router.post('/:deviceId/control/pump', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.controlPump));
router.post('/:deviceId/actuator/fan', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.controlFan));
router.post('/:deviceId/control/fan', (0, async_handler_1.asyncHandler)(ControlController_1.ControlController.controlFan));
exports.default = router;
//# sourceMappingURL=control.routes.js.map