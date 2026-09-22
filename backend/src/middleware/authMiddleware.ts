import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const protectAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      res.status(401).json({ success: false, message: 'Not authorized, token missing.' });
      return;
    }

    const jwtSecret = process.env.JWT_SECRET || 'torance_life_science_super_secret_jwt_key_2026';
    const decoded = jwt.verify(token, jwtSecret) as { id: string; email: string; role: string };

    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Not authorized, invalid or expired token.' });
  }
};
