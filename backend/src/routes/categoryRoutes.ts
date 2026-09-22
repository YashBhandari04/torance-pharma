import { Router } from 'express';
import { getCategories, createCategory } from '../controllers/categoryController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getCategories);
router.post('/', protectAdmin, createCategory);

export default router;
