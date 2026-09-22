import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/torance_pharma';
    const conn = await mongoose.connect(connStr);
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[Database] Warning: MongoDB Atlas/Local connection failed:`, (error as Error).message);
    console.warn(`[Database] Server running with in-memory state fallback mode.`);
  }
};
