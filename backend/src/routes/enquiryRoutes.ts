import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { createEnquiry, getEnquiries, updateEnquiryStatus } from '../controllers/enquiryController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';
import { validateBody, enquiryZodSchema } from '../middleware/validateMiddleware.js';

const router = Router();

// Rate limiter for enquiry submissions (25 per 15 minutes per IP)
const enquiryPostLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiry submissions from this IP. Please try again after 15 minutes.'
  }
});

router.post('/', enquiryPostLimiter, validateBody(enquiryZodSchema), createEnquiry);
router.get('/', protectAdmin, getEnquiries);
router.patch('/:id/status', protectAdmin, updateEnquiryStatus);

export default router;
