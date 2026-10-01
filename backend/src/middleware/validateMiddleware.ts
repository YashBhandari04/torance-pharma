import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const issues = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
        res.status(400).json({
          success: false,
          message: `Validation Error: ${issues}`,
        });
        return;
      }
      next(error);
    }
  };
};

export const enquiryZodSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits.'),
  companyName: z.string().optional(),
  enquiryType: z.enum(['Distributor', 'Hospital', 'Business Partner', 'General']),
  city: z.string().min(2, 'City name is required.'),
  state: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(10, 'Inquiry message must be at least 10 characters.'),
});

export const contactZodSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(100, 'Name is too long.'),
  email: z.string().email('Please enter a valid email address.').max(150, 'Email address is too long.'),
  subject: z.string().min(2, 'Subject must be at least 2 characters.').max(200, 'Subject is too long.'),
  message: z.string().min(5, 'Message must be at least 5 characters.').max(5000, 'Message is too long.'),
  phone: z.string().max(50, 'Phone number is too long.').optional(),
  website: z.string().optional(),
  fax: z.string().optional()
});
