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
