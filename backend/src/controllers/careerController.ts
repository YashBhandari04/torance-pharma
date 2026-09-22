import { Request, Response } from 'express';
import { CareerModel } from '../models/Career.js';

export const getCareers = async (req: Request, res: Response): Promise<void> => {
  try {
    const careers = await CareerModel.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: careers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const createCareer = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCareer = await CareerModel.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Job opening posted successfully',
      data: newCareer,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export const toggleCareerStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const career = await CareerModel.findById(req.params.id);
    if (!career) {
      res.status(404).json({ success: false, message: 'Career opening not found.' });
      return;
    }

    career.isActive = !career.isActive;
    await career.save();

    res.json({
      success: true,
      message: `Job posting ${career.isActive ? 'activated' : 'deactivated'}`,
      data: career,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
