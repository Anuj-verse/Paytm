import { Router } from 'express';
import * as authController from './auth.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = Router();

// Auth endpoints
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/profile', authMiddleware, authController.getProfile);

export default router;