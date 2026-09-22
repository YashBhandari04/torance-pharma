import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { connectDB } from '../config/db.js';
import { CategoryModel } from '../models/Category.js';
import { ProductModel } from '../models/Product.js';
import { UserModel } from '../models/User.js';
import { CareerModel } from '../models/Career.js';
import { SEED_CATEGORIES, SEED_PRODUCTS } from './seedProductsData.js';

dotenv.config();

const seed = async () => {
  try {
    await connectDB();
    console.log('[Seed] Seeding database records...');

    // 1. Create Default Admin User
    const adminEmail = (process.env.ADMIN_DEFAULT_EMAIL || 'admin@torancelifescience.com').toLowerCase();
    const adminPass = process.env.ADMIN_DEFAULT_PASSWORD || 'Admin@Torance2026!';
    const passwordHash = await bcrypt.hash(adminPass, 10);

    await UserModel.deleteMany({});
    await UserModel.create({
      name: 'Torrance Commercial Admin',
      email: adminEmail,
      passwordHash,
      role: 'SUPER_ADMIN',
    });
    console.log(`[Seed] Created Admin User: ${adminEmail}`);

    // 2. Create Categories
    await CategoryModel.deleteMany({});
    const createdCategories = await CategoryModel.insertMany(SEED_CATEGORIES);
    console.log(`[Seed] Inserted ${createdCategories.length} Categories.`);

    // Map Category IDs by slug
    const catMap = new Map(createdCategories.map(c => [c.slug, c._id]));

    // 3. Create Products
    await ProductModel.deleteMany({});
    const productsToInsert = SEED_PRODUCTS.map(p => {
      const catId = catMap.get(p.categorySlug);
      if (!catId) {
        throw new Error(`Category not found for slug: ${p.categorySlug}`);
      }
      return {
        brandName: p.brandName,
        genericName: p.genericName,
        composition: p.composition,
        strength: p.strength,
        dosageForm: p.dosageForm,
        category: catId,
        packaging: p.packaging,
        imageUrl: p.imageUrl,
        description: p.description,
        isFeatured: p.isFeatured,
        isArchived: p.isArchived,
        indications: p.indications,
        storage: p.storage,
        shelfLife: p.shelfLife
      };
    });

    const createdProducts = await ProductModel.insertMany(productsToInsert);
    console.log(`[Seed] Inserted ${createdProducts.length} Products.`);

    // 4. Create Baseline Careers
    await CareerModel.deleteMany({});
    await CareerModel.create([
      {
        title: 'Senior Medical Representative (Cardio Division)',
        department: 'Sales & Marketing',
        location: 'Haryana / NCR',
        type: 'Full-Time',
        description: 'Drive ethical promotion of Torrance cardiovascular product line to cardiologists, consulting physicians, and major hospitals.',
        requirements: ['B.Pharm / B.Sc in Life Sciences', '2-4 years experience in Cardio segment', 'Strong relationship with key opinion leaders (KOLs)'],
        isActive: true,
      },
      {
        title: 'Quality Assurance Executive (QA-IPQA)',
        department: 'Quality Assurance',
        location: 'Faridabad, Haryana',
        type: 'Full-Time',
        description: 'Responsible for In-Process Quality Assurance (IPQA), batch record execution, validation protocols, and WHO-GMP compliance auditing.',
        requirements: ['M.Pharm / B.Pharm', '3-5 years formulation QA experience', 'In-depth knowledge of cGMP standards'],
        isActive: true,
      }
    ]);
    console.log('[Seed] Inserted Baseline Career Openings.');

    console.log('[Seed] Database seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error]:', error);
    process.exit(1);
  }
};

seed();

