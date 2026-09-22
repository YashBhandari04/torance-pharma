import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { connectDB } from '../config/db.js';
import { CategoryModel } from '../models/Category.js';
import { ProductModel } from '../models/Product.js';
import { UserModel } from '../models/User.js';
import { CareerModel } from '../models/Career.js';

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
      name: 'Torance Commercial Admin',
      email: adminEmail,
      passwordHash,
      role: 'SUPER_ADMIN',
    });
    console.log(`[Seed] Created Admin User: ${adminEmail}`);

    // 2. Create Categories
    await CategoryModel.deleteMany({});
    const categoriesData = [
      { name: 'Cardiovascular', slug: 'cardiovascular', description: 'Hypertension, angina, and heart care formulations.', icon: 'Heart' },
      { name: 'Gastroenterology', slug: 'gastroenterology', description: 'Acid-peptic disorders, prokinetics, and liver care.', icon: 'Activity' },
      { name: 'Anti-Infectives', slug: 'anti-infectives', description: 'Broad spectrum oral & parenteral antibiotics.', icon: 'ShieldCheck' },
      { name: 'Neurology & Neuro-Care', slug: 'neurology', description: 'Neuropathic pain, anti-epileptic & neuro-protective care.', icon: 'Brain' },
      { name: 'Orthopedics & Joint Care', slug: 'orthopedics', description: 'Bone density enhancers & anti-inflammatory analgesics.', icon: 'Bone' },
      { name: 'Nutraceuticals & Wellness', slug: 'nutraceuticals', description: 'Daily essential micronutrients and antioxidants.', icon: 'Sparkles' },
    ];
    const createdCategories = await CategoryModel.insertMany(categoriesData);
    console.log(`[Seed] Inserted ${createdCategories.length} Categories.`);

    // Map Category IDs
    const catMap = new Map(createdCategories.map(c => [c.slug, c._id]));

    // 3. Create Products
    await ProductModel.deleteMany({});
    const productsData = [
      {
        brandName: 'TOR-TELMI 40',
        genericName: 'Telmisartan Tablets IP',
        composition: 'Each uncoated tablet contains: Telmisartan IP 40mg',
        strength: '40mg',
        dosageForm: 'Tablet',
        category: catMap.get('cardiovascular'),
        packaging: '10 x 14 Tablets Blister',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
        description: 'Indicated for the management of essential hypertension and cardiovascular risk reduction in patients unable to take ACE inhibitors.',
        isFeatured: true,
        indications: ['Essential Hypertension', 'Cardiovascular Risk Reduction'],
        storage: 'Store below 25°C in a dry place. Protect from moisture.',
        shelfLife: '24 Months'
      },
      {
        brandName: 'TOR-TELMI AM',
        genericName: 'Telmisartan 40mg + Amlodipine 5mg Tablets',
        composition: 'Each uncoated tablet contains: Telmisartan IP 40mg, Amlodipine Besylate IP eq. to Amlodipine 5mg',
        strength: '40mg + 5mg',
        dosageForm: 'Tablet',
        category: catMap.get('cardiovascular'),
        packaging: '10 x 10 Tablets Alu-Alu',
        imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
        description: 'Dual-mechanism combination therapy for effective blood pressure control in stage II hypertension.',
        isFeatured: true,
        indications: ['Stage II Hypertension', 'Refractory Blood Pressure Control'],
        storage: 'Store below 25°C in a light-resistant container.',
        shelfLife: '24 Months'
      },
      {
        brandName: 'TOR-RABE D',
        genericName: 'Rabeprazole Sodium & Domperidone SR Capsules',
        composition: 'Each hard gelatin capsule contains: Rabeprazole Sodium IP 20mg (Enteric Coated), Domperidone IP 30mg (Sustained Release)',
        strength: '20mg + 30mg SR',
        dosageForm: 'Capsule',
        category: catMap.get('gastroenterology'),
        packaging: '10 x 10 Capsules Strip',
        imageUrl: 'https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&q=80&w=800',
        description: 'Provides rapid relief from Gastroesophageal Reflux Disease (GERD), erosive esophagitis, hyperacidity, and associated nausea.',
        isFeatured: true,
        indications: ['GERD', 'Dyspepsia', 'Erosive Esophagitis'],
        storage: 'Store in a cool dry place protected from direct sunlight.',
        shelfLife: '24 Months'
      },
      {
        brandName: 'TOR-CLAV 625',
        genericName: 'Amoxicillin & Potassium Clavulanate Tablets IP',
        composition: 'Each film coated tablet contains: Amoxicillin Trihydrate IP eq. to Amoxicillin 500mg, Potassium Clavulanate Diluted IP eq. to Clavulanic Acid 125mg',
        strength: '500mg + 125mg',
        dosageForm: 'Tablet',
        category: catMap.get('anti-infectives'),
        packaging: '1 x 10 Tablets Alu-Alu Strip',
        imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
        description: 'Gold-standard broad spectrum antibacterial combination resistant to beta-lactamase producing pathogens.',
        isFeatured: true,
        indications: ['Lower Respiratory Tract Infections', 'ENT Infections', 'Skin & Soft Tissue Infections'],
        storage: 'Store below 25°C in a dry place.',
        shelfLife: '24 Months'
      },
      {
        brandName: 'TOR-NEURO FORTE',
        genericName: 'Methylcobalamin, Alpha Lipoic Acid & Vitamin B Complex Capsules',
        composition: 'Each capsule contains: Methylcobalamin 1500mcg, Alpha Lipoic Acid 100mg, Pyridoxine HCl 3mg, Folic Acid 1.5mg, Benfotiamine 50mg',
        strength: '1500mcg + 100mg',
        dosageForm: 'Capsule',
        category: catMap.get('neurology'),
        packaging: '10 x 10 Softgel / Hardgel Capsules',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
        description: 'Comprehensive neuro-nutritional formula engineered for peripheral neuropathy, diabetic neuralgia, and nerve regeneration.',
        isFeatured: true,
        indications: ['Diabetic Neuropathy', 'Peripheral Neuropathy', 'Sciatica & Cervical Spondylosis'],
        storage: 'Store in a cool, dry place away from light.',
        shelfLife: '18 Months'
      }
    ];

    const createdProducts = await ProductModel.insertMany(productsData);
    console.log(`[Seed] Inserted ${createdProducts.length} Products.`);

    // 4. Create Baseline Careers
    await CareerModel.deleteMany({});
    await CareerModel.create([
      {
        title: 'Senior Medical Representative (Cardio Division)',
        department: 'Sales & Marketing',
        location: 'Ahmedabad / Vadodara, Gujarat',
        type: 'Full-Time',
        description: 'Drive ethical promotion of Torance cardiovascular product line to cardiologists, consulting physicians, and major hospitals.',
        requirements: ['B.Pharm / B.Sc in Life Sciences', '2-4 years experience in Cardio segment', 'Strong relationship with key opinion leaders (KOLs)'],
        isActive: true,
      },
      {
        title: 'Quality Assurance Executive (QA-IPQA)',
        department: 'Quality Assurance',
        location: 'Sanand Facility, Ahmedabad',
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
