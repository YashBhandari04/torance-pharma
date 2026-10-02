import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { handleContactForm } from '../controllers/contactController.js';
import { validateBody, contactZodSchema } from '../middleware/validateMiddleware.js';

const router = Router();

// Rate Limiter specifically for public contact form (25 submissions per 15 mins per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact requests from this IP. Please try again after 15 minutes.'
  }
});

router.post('/', contactLimiter, validateBody(contactZodSchema), handleContactForm);

export default router;
