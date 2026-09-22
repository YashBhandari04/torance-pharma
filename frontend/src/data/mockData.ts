import { Product, Category, Career } from '../types';

export const COMPANY_INFO = {
  name: 'TORANCE LIFE SCIENCE PVT. LTD.',
  shortName: 'Torance Life Science',
  tagline: 'Innovating Health, Elevating Life',
  establishedYear: '2016',
  headquarters: 'Ahmedabad, Gujarat, India',
  address: 'Corporate Tower A, 6th Floor, Synergy Business Park, SG Highway, Ahmedabad, Gujarat - 380054, India',
  manufacturingFacility: 'Plot No. 104-106, GIDC Industrial Estate, Sanand-II, Ahmedabad - 382110, Gujarat',
  email: {
    enquiry: 'enquiry@torancelifescience.com',
    corporate: 'info@torancelifescience.com',
    careers: 'careers@torancelifescience.com'
  },
  phone: {
    board: '+91 (079) 4900-5800',
    sales: '+91 98765-43210',
    support: '+91 98765-43211'
  },
  certifications: [
    'WHO-GMP Certified Facility',
    'ISO 9001:2015 Quality System',
    'DCGI Approved Formulations',
    'GLP Compliant Testing Laboratories'
  ],
  stats: {
    productsCount: '150+',
    countriesServed: '12+',
    distributors: '500+',
    therapeuticSegments: '8+'
  }
};

export const CATEGORIES: Category[] = [
  {
    _id: 'cat-1',
    name: 'Cardiovascular',
    slug: 'cardiovascular',
    description: 'Advanced formulations for hypertension, ischemic heart disease, and lipid management.',
    icon: 'Heart',
    productCount: 24
  },
  {
    _id: 'cat-2',
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    description: 'Comprehensive solutions for acid-peptic disorders, motility, and liver health.',
    icon: 'Activity',
    productCount: 32
  },
  {
    _id: 'cat-3',
    name: 'Anti-Infectives',
    slug: 'anti-infectives',
    description: 'Broad-spectrum oral and injectable antibiotics & antimicrobial therapies.',
    icon: 'ShieldCheck',
    productCount: 28
  },
  {
    _id: 'cat-4',
    name: 'Neurology & Neuro-Care',
    slug: 'neurology',
    description: 'Neuro-protective, anti-epileptic, and neuropathic pain formulations.',
    icon: 'Brain',
    productCount: 18
  },
  {
    _id: 'cat-5',
    name: 'Orthopedics & Joint Care',
    slug: 'orthopedics',
    description: 'Bone density enhancers, anti-inflammatory analgesics, and cartilage supplements.',
    icon: 'Bone',
    productCount: 22
  },
  {
    _id: 'cat-6',
    name: 'Nutraceuticals & Wellness',
    slug: 'nutraceuticals',
    description: 'Essential micronutrients, antioxidants, and daily health boosters.',
    icon: 'Sparkles',
    productCount: 26
  }
];

export const PRODUCTS: Product[] = [
  {
    _id: 'prod-1',
    brandName: 'TOR-TELMI 40',
    genericName: 'Telmisartan Tablets IP',
    composition: 'Each uncoated tablet contains: Telmisartan IP 40mg',
    strength: '40mg',
    dosageForm: 'Tablet',
    category: CATEGORIES[0],
    packaging: '10 x 14 Tablets Blister',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Indicated for the management of essential hypertension and cardiovascular risk reduction in patients unable to take ACE inhibitors.',
    isFeatured: true,
    isArchived: false,
    indications: ['Essential Hypertension', 'Cardiovascular Risk Reduction'],
    storage: 'Store below 25°C in a dry place. Protect from moisture.',
    shelfLife: '24 Months'
  },
  {
    _id: 'prod-2',
    brandName: 'TOR-TELMI AM',
    genericName: 'Telmisartan 40mg + Amlodipine 5mg Tablets',
    composition: 'Each uncoated tablet contains: Telmisartan IP 40mg, Amlodipine Besylate IP eq. to Amlodipine 5mg',
    strength: '40mg + 5mg',
    dosageForm: 'Tablet',
    category: CATEGORIES[0],
    packaging: '10 x 10 Tablets Alu-Alu',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
    description: 'Dual-mechanism combination therapy for effective blood pressure control in stage II hypertension.',
    isFeatured: true,
    isArchived: false,
    indications: ['Stage II Hypertension', 'Refractory Blood Pressure Control'],
    storage: 'Store below 25°C in a light-resistant container.',
    shelfLife: '24 Months'
  },
  {
    _id: 'prod-3',
    brandName: 'TOR-RABE D',
    genericName: 'Rabeprazole Sodium & Domperidone SR Capsules',
    composition: 'Each hard gelatin capsule contains: Rabeprazole Sodium IP 20mg (Enteric Coated), Domperidone IP 30mg (Sustained Release)',
    strength: '20mg + 30mg SR',
    dosageForm: 'Capsule',
    category: CATEGORIES[1],
    packaging: '10 x 10 Capsules Strip',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&q=80&w=800',
    description: 'Provides rapid relief from Gastroesophageal Reflux Disease (GERD), erosive esophagitis, hyperacidity, and associated nausea.',
    isFeatured: true,
    isArchived: false,
    indications: ['GERD', 'Dyspepsia', 'Erosive Esophagitis'],
    storage: 'Store in a cool dry place protected from direct sunlight.',
    shelfLife: '24 Months'
  },
  {
    _id: 'prod-4',
    brandName: 'TOR-PAN 40',
    genericName: 'Pantoprazole Gastro-resistant Tablets IP',
    composition: 'Each enteric coated tablet contains: Pantoprazole Sodium IP eq. to Pantoprazole 40mg',
    strength: '40mg',
    dosageForm: 'Tablet',
    category: CATEGORIES[1],
    packaging: '10 x 10 Tablets Alu-Alu',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
    description: 'Potent proton pump inhibitor for peptic ulcer disease, NSAID-induced ulcers, and Zollinger-Ellison Syndrome.',
    isFeatured: false,
    isArchived: false,
    indications: ['Peptic Ulcers', 'Duodenal Ulcers', 'Acid Reflux'],
    storage: 'Store below 30°C.',
    shelfLife: '36 Months'
  },
  {
    _id: 'prod-5',
    brandName: 'TOR-CLAV 625',
    genericName: 'Amoxicillin & Potassium Clavulanate Tablets IP',
    composition: 'Each film coated tablet contains: Amoxicillin Trihydrate IP eq. to Amoxicillin 500mg, Potassium Clavulanate Diluted IP eq. to Clavulanic Acid 125mg',
    strength: '500mg + 125mg',
    dosageForm: 'Tablet',
    category: CATEGORIES[2],
    packaging: '1 x 10 Tablets Alu-Alu Strip',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Gold-standard broad spectrum antibacterial combination resistant to beta-lactamase producing pathogens.',
    isFeatured: true,
    isArchived: false,
    indications: ['Lower Respiratory Tract Infections', 'ENT Infections', 'Skin & Soft Tissue Infections'],
    storage: 'Store below 25°C in a dry place.',
    shelfLife: '24 Months'
  },
  {
    _id: 'prod-6',
    brandName: 'TOR-CEF 200',
    genericName: 'Cefixime Oral Tablets IP',
    composition: 'Each film coated tablet contains: Cefixime Trihydrate IP eq. to Anhydrous Cefixime 200mg',
    strength: '200mg',
    dosageForm: 'Tablet',
    category: CATEGORIES[2],
    packaging: '10 x 10 Tablets Alu-Alu',
    imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800',
    description: '3rd generation cephalosporin antibiotic effective against uncomplicated urinary tract and respiratory infections.',
    isFeatured: false,
    isArchived: false,
    indications: ['Typhoid Fever', 'Urinary Tract Infections', 'Bronchitis'],
    storage: 'Store below 25°C. Protect from moisture.',
    shelfLife: '24 Months'
  },
  {
    _id: 'prod-7',
    brandName: 'TOR-NEURO FORTE',
    genericName: 'Methylcobalamin, Alpha Lipoic Acid & Vitamin B Complex Capsules',
    composition: 'Each capsule contains: Methylcobalamin 1500mcg, Alpha Lipoic Acid 100mg, Pyridoxine HCl 3mg, Folic Acid 1.5mg, Benfotiamine 50mg',
    strength: '1500mcg + 100mg',
    dosageForm: 'Capsule',
    category: CATEGORIES[3],
    packaging: '10 x 10 Softgel / Hardgel Capsules',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive neuro-nutritional formula engineered for peripheral neuropathy, diabetic neuralgia, and nerve regeneration.',
    isFeatured: true,
    isArchived: false,
    indications: ['Diabetic Neuropathy', 'Peripheral Neuropathy', 'Sciatica & Cervical Spondylosis'],
    storage: 'Store in a cool, dry place away from light.',
    shelfLife: '18 Months'
  },
  {
    _id: 'prod-8',
    brandName: 'TOR-CAL D3',
    genericName: 'Calcium Carbonate & Vitamin D3 Tablets',
    composition: 'Each film coated tablet contains: Calcium Carbonate IP 1250mg (eq. to elemental Calcium 500mg), Vitamin D3 IP 250 IU',
    strength: '500mg + 250 IU',
    dosageForm: 'Tablet',
    category: CATEGORIES[4],
    packaging: '10 x 15 Tablets Strip',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
    description: 'Therapeutic calcium fortification for osteoporosis, osteomalacia, post-menopausal bone loss, and fracture healing.',
    isFeatured: false,
    isArchived: false,
    indications: ['Osteoporosis Management', 'Post-menopausal Bone Care', 'Calcium Deficiency'],
    storage: 'Store below 30°C.',
    shelfLife: '24 Months'
  }
];

export const CAREERS_LIST: Career[] = [
  {
    _id: 'car-1',
    title: 'Senior Medical Representative (Cardio Division)',
    department: 'Sales & Marketing',
    location: 'Ahmedabad / Vadodara, Gujarat',
    type: 'Full-Time',
    description: 'Drive ethical promotion of Torance cardiovascular product line to cardiologists, consulting physicians, and major hospitals.',
    requirements: ['B.Pharm / B.Sc in Life Sciences', '2-4 years experience in Cardio segment', 'Strong relationship with key opinion leaders (KOLs)', 'Excellent communication skills'],
    isActive: true,
    createdAt: '2026-08-15'
  },
  {
    _id: 'car-2',
    title: 'Quality Assurance Executive (QA-IPQA)',
    department: 'Quality Assurance',
    location: 'Sanand Facility, Ahmedabad',
    type: 'Full-Time',
    description: 'Responsible for In-Process Quality Assurance (IPQA), batch record execution, validation protocols, and WHO-GMP compliance auditing.',
    requirements: ['M.Pharm / B.Pharm', '3-5 years formulation QA experience', 'In-depth knowledge of cGMP standards and ICH guidelines'],
    isActive: true,
    createdAt: '2026-08-20'
  },
  {
    _id: 'car-3',
    title: 'Formulation Research Scientist (R&D)',
    department: 'Research & Development',
    location: 'Corporate R&D Center, Ahmedabad',
    type: 'Full-Time',
    description: 'Formulation development of novel oral solid dosage forms, stability studies, and technology transfer to manufacturing.',
    requirements: ['M.Pharm (Pharmaceutics)', '4+ years experience in formulation R&D', 'Expertise in pelletization and modified release technologies'],
    isActive: true,
    createdAt: '2026-09-01'
  }
];

export const DIVISIONS = [
  {
    id: 'div-1',
    name: 'Torance Cardio-Diab',
    tagline: 'Precision Care for Heart & Vascular Health',
    description: 'Dedicated to fighting non-communicable cardiovascular diseases and metabolic disorders through evidence-based therapies.',
    badge: 'Cardio & Diabetes',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'div-2',
    name: 'Torance Gastro Healthcare',
    tagline: 'Restoring Digestive Balance & Gastro Wellbeing',
    description: 'Focused on digestive health solutions, anti-ulcerants, hepatoprotectives, and prokinetics.',
    badge: 'Gastroenterology',
    color: 'from-teal-600 to-emerald-700'
  },
  {
    id: 'div-3',
    name: 'Torance Critical Care & Anti-Infectives',
    tagline: 'Defending Life Against Severe Pathogens',
    description: 'High-potency injectable & oral antimicrobials engineered for ICU, hospital care, and complex infections.',
    badge: 'Critical Care',
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 'div-4',
    name: 'Torance Neuro-Life',
    tagline: 'Nurturing Brain & Peripheral Nervous System',
    description: 'Advanced neuro-protective formulations targeting neuropathic pain, cognitive disorders, and stroke care.',
    badge: 'Neurosciences',
    color: 'from-purple-600 to-indigo-800'
  }
];
