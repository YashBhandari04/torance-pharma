import { Request, Response } from 'express';
import { EnquiryModel } from '../models/Enquiry.js';
import { sendEnquiryNotificationEmail } from '../utils/emailSender.js';

// Helper to sanitize HTML tags from string inputs to prevent XSS / HTML injection
const sanitize = (text?: string): string => {
  if (!text) return '';
  return text.replace(/<[^>]*>?/gm, '').trim();
};

export const createEnquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      companyName, 
      enquiryType, 
      city, 
      state, 
      country, 
      message,
      // Honeypot field for anti-spam bot trap
      website,
      fax
    } = req.body;

    // Honeypot Trap: If hidden bot field is populated, silently return fake success to trick spam bots
    if (website || fax) {
      console.warn(`[Anti-Spam Trap Triggered] Ignored spam submission from IP: ${req.ip}`);
      res.status(200).json({
        success: true,
        message: 'Your enquiry has been submitted successfully. Our team will contact you shortly.',
      });
      return;
    }

    // Sanitize user input strings
    const cleanFullName = sanitize(fullName);
    const cleanEmail = sanitize(email).toLowerCase();
    const cleanPhone = sanitize(phone);
    const cleanCompanyName = sanitize(companyName);
    const cleanCity = sanitize(city);
    const cleanState = sanitize(state);
    const cleanCountry = sanitize(country) || 'India';
    const cleanMessage = sanitize(message);

    // Backend Validation Checks
    if (!cleanFullName || cleanFullName.length < 2) {
      res.status(400).json({ success: false, message: 'Please enter a valid full name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
      return;
    }

    if (!cleanPhone || cleanPhone.replace(/[^0-9]/g, '').length < 7) {
      res.status(400).json({ success: false, message: 'Please enter a valid phone or WhatsApp number.' });
      return;
    }

    if (!cleanCity || cleanCity.length < 2) {
      res.status(400).json({ success: false, message: 'City name is required.' });
      return;
    }

    if (!cleanMessage || cleanMessage.length < 5) {
      res.status(400).json({ success: false, message: 'Inquiry message must be at least 5 characters.' });
      return;
    }

    // 1. Create and Save Enquiry in MongoDB Atlas
    const newEnquiry = await EnquiryModel.create({
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      companyName: cleanCompanyName,
      enquiryType,
      city: cleanCity,
      state: cleanState,
      country: cleanCountry,
      message: cleanMessage,
      status: 'NEW',
      emailStatus: 'pending'
    });

    console.log(`[Enquiry Saved] ID: ${newEnquiry._id} | Type: ${newEnquiry.enquiryType} | Customer: ${newEnquiry.fullName} (${newEnquiry.email})`);

    // 2. Dispatch Email Notification to Manager (TO -> Manager, REPLY-TO -> Customer)
    let emailSent = false;
    try {
      emailSent = await sendEnquiryNotificationEmail(newEnquiry);
    } catch (err: any) {
      console.warn('[Email Dispatch Warning]:', err.message);
    }

    // 3. Update Email Status in MongoDB
    newEnquiry.emailStatus = emailSent ? 'sent' : 'failed';
    await newEnquiry.save();

    // 4. Send Success Response to Frontend
    res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. Our team will contact you shortly.',
      data: newEnquiry,
    });
  } catch (error) {
    console.error('[Enquiry Creation Error]:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Unable to submit your enquiry right now. Please try again later.' 
    });
  }
};

export const getEnquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, type } = req.query;
    const filter: any = {};

    if (status && status !== 'all') filter.status = status;
    if (type && type !== 'all') filter.enquiryType = type;

    const enquiries = await EnquiryModel.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const updateEnquiryStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    const updated = await EnquiryModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      res.status(404).json({ success: false, message: 'Enquiry record not found.' });
      return;
    }

    res.json({
      success: true,
      message: 'Enquiry status updated successfully',
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};
