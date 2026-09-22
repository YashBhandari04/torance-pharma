import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, message: 'Please provide email and password.' });
      return;
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if database users collection is completely empty (First-time initialization)
    const userCount = await UserModel.countDocuments();
    if (userCount === 0) {
      console.log('[Auth] Database empty. Creating initial seed admin user...');
      const defaultEmail = (process.env.ADMIN_DEFAULT_EMAIL || 'admin@torancelifescience.com').toLowerCase();
      const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'Admin@Torance2026!';
      const hash = await bcrypt.hash(defaultPassword, 10);
      
      await UserModel.create({
        name: 'Torance Commercial Admin',
        email: defaultEmail,
        passwordHash: hash,
        role: 'SUPER_ADMIN',
      });
    }

    // Query database for admin user
    const user = await UserModel.findOne({ email: normalizedEmail });

    if (!user) {
      res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
      return;
    }

    // Verify Bcrypt hashed password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'torance_life_science_super_secret_jwt_key_2026',
      { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any }
    );

    res.json({
      success: true,
      message: 'Admin authenticated successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getMe = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Not authenticated.' });
      return;
    }

    const user = await UserModel.findById(req.user.id).select('-passwordHash');

    res.json({
      success: true,
      user: user || {
        _id: req.user.id,
        email: req.user.email,
        role: req.user.role,
        name: 'Torance Commercial Admin',
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
