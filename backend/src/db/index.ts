import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema.js';

let dbInstance: ReturnType<typeof drizzle> | null = null;

export const getDb = () => {
  if (dbInstance) return dbInstance;

  const connectionString = process.env.DATABASE_URL || process.env.MYSQL_URL;
  if (!connectionString) {
    return null;
  }

  try {
    const connection = mysql.createPool(connectionString);
    dbInstance = drizzle(connection, { schema, mode: 'default' });
    console.log('[Drizzle ORM] Connected to MySQL database');
    return dbInstance;
  } catch (error: any) {
    console.warn('[Drizzle ORM Warning] MySQL connection failed:', error.message || error);
    return null;
  }
};

export { schema };
