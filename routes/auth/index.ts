import express, { Router } from 'express';
import { AuthController } from '../../controller/AuthController';
import { authMiddleware } from '../../middleware/authMiddleware';
import { asyncHandler } from '../../utils/async-handler';

const router: Router = express.Router();

// Public auth routes
router.post('/login', asyncHandler(AuthController.login));

// Protected auth routes
router.post(
  '/complete-onboarding',
  authMiddleware,
  asyncHandler(AuthController.completeOnboarding),
);
router.post(
  '/change-password',
  authMiddleware,
  asyncHandler(AuthController.changePassword),
);
router.get('/me', authMiddleware, asyncHandler(AuthController.getMe));
router.put('/profile', authMiddleware, asyncHandler(AuthController.updateProfile));
router.post('/fcm-token', authMiddleware, asyncHandler(AuthController.updateFcmToken));

export default router;
