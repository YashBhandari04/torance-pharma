import { Router } from 'express';
import { getCareers, createCareer, toggleCareerStatus } from '../controllers/careerController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getCareers);
router.post('/', protectAdmin, createCareer);
router.patch('/:id/toggle', protectAdmin, toggleCareerStatus);

export default router;
