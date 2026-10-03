import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import seoRoutes from './routes/seoRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

export const app = express();

// Connect to MongoDB asynchronously
connectDB();

// Security Middlewares
app.use(helmet());

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://torance-pharma.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean) as string[];

app.use(cors({
  origin: (origin, callback) => {
    // Allow all origins in dev or requests from Vercel / LAN / no origin
    if (!origin || process.env.NODE_ENV === 'development' || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app') || origin.startsWith('http://192.168.') || origin.startsWith('http://10.') || origin.startsWith('http://172.')) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
}));

// Rate limiting for API protection
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes.' }
});

app.use('/api', apiLimiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

import { getDb, schema } from './db/index.js';

// Visitor Analytics Tracking Endpoint (Drizzle MySQL)
app.post('/api/analytics/visit', async (req, res) => {
  try {
    const { path, referrer, device, country } = req.body || {};
    const mysqlDb = getDb();
    if (mysqlDb) {
      await mysqlDb.insert(schema.pageVisit).values({
        path: path || '/',
        referrer: referrer || '',
        userAgent: req.headers['user-agent'] || '',
        ipAddress: (req.ip || '').substring(0, 45),
        country: country || '',
        device: device || 'desktop'
      } as any);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: true });
  }
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'UP',
    company: 'TORANCE LIFE SCIENCE PVT. LTD.',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes Mounting
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/', seoRoutes);

// Central Error Handler
app.use(errorHandler);

export default app;
