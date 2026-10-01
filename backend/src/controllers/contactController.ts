import { Request, Response } from 'express';
import { sendContactEmail } from '../services/emailService.js';

export const handleContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      name, 
      email, 
      subject, 
      message, 
      phone, 
      // Honeypot anti-bot fields
      website, 
      fax 
    } = req.body;

    // Honeypot Trap: If hidden bot field is populated, return silent success to trick spam bots
    if (website || fax) {
      console.warn(`[Anti-Spam] Bot submission intercepted and blocked from IP: ${req.ip}`);
      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.',
      });
      return;
    }

    // Call encapsulated email service
    const emailSent = await sendContactEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      phone: phone ? phone.trim() : undefined
    });

    if (!emailSent) {
      // SMTP failure handling: return generic 500 error without exposing internal credentials
      res.status(500).json({
        success: false,
        message: 'Unable to send your message. Please try again later.'
      });
      return;
    }

    // Success response
    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.'
    });
  } catch (error: any) {
    console.error('[Contact Controller Error]:', error.message || error);
    res.status(500).json({
      success: false,
      message: 'Unable to send your message. Please try again later.'
    });
  }
};
