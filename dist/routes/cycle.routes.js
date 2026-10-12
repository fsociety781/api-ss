"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CycleController_1 = require("../controller/CycleController");
const async_handler_1 = require("../utils/async-handler");
const router = express_1.default.Router();
router.get('/:deviceId/cycles', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.listCycles));
router.post('/:deviceId/cycles', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.createCycle));
router.get('/:deviceId/cycles/:cycleId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.getCycle));
router.patch('/:deviceId/cycles/:cycleId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.updateCycle));
router.put('/:deviceId/cycles/:cycleId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.updateCycle));
router.post('/:deviceId/cycles/:cycleId/complete', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.completeCycle));
router.delete('/:deviceId/cycles/:cycleId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.deleteCycle));
router.get('/:deviceId/cycles/:cycleId/summary', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.getCycleSummary));
router.get('/:deviceId/cycles/:cycleId/harvests', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.listHarvests));
router.post('/:deviceId/cycles/:cycleId/harvests', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.addHarvest));
router.patch('/:deviceId/cycles/:cycleId/harvests/:harvestId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.updateHarvest));
router.put('/:deviceId/cycles/:cycleId/harvests/:harvestId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.updateHarvest));
router.delete('/:deviceId/cycles/:cycleId/harvests/:harvestId', (0, async_handler_1.asyncHandler)(CycleController_1.CycleController.deleteHarvest));
exports.default = router;
//# sourceMappingURL=cycle.routes.js.map