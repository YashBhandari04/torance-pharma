import { Router } from 'express';
import { loginAdmin, getMe } from '../controllers/authController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', loginAdmin);
router.get('/me', protectAdmin, getMe);

export default router;
