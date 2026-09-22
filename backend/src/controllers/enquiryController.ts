import { Request, Response } from 'express';
import { EnquiryModel } from '../models/Enquiry.js';
import { sendEnquiryNotificationEmail } from '../utils/emailSender.js';

export const createEnquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const newEnquiry = await EnquiryModel.create(req.body);
    
    console.log(`[Enquiry Saved] ID: ${newEnquiry._id} | Type: ${newEnquiry.enquiryType} | From: ${newEnquiry.fullName} (${newEnquiry.email})`);

    // Dispatch business notification email asynchronously
    sendEnquiryNotificationEmail(newEnquiry).catch(err => {
      console.warn('[Email Warning]:', err.message);
    });

    res.status(201).json({
      success: true,
      message: 'Your business enquiry has been registered successfully. Our commercial sales team will reach out within 24 hours.',
      data: newEnquiry,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
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
