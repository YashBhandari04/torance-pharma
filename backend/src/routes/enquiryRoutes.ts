import { Router } from 'express';
import { createEnquiry, getEnquiries, updateEnquiryStatus } from '../controllers/enquiryController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, enquiryZodSchema } from '../middleware/validateMiddleware.js';

const router = Router();

router.post('/', validateBody(enquiryZodSchema), createEnquiry);
router.get('/', protectAdmin, getEnquiries);
router.patch('/:id/status', protectAdmin, updateEnquiryStatus);

export default router;
