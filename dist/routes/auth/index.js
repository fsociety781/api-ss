"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../../controller/AuthController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const async_handler_1 = require("../../utils/async-handler");
const router = express_1.default.Router();
// Public auth routes
router.post('/login', (0, async_handler_1.asyncHandler)(AuthController_1.AuthController.login));
// Protected auth routes
router.post('/complete-onboarding', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(AuthController_1.AuthController.completeOnboarding));
router.post('/change-password', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(AuthController_1.AuthController.changePassword));
router.get('/me', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(AuthController_1.AuthController.getMe));
router.put('/profile', authMiddleware_1.authMiddleware, (0, async_handler_1.asyncHandler)(AuthController_1.AuthController.updateProfile));
exports.default = router;
//# sourceMappingURL=index.js.map