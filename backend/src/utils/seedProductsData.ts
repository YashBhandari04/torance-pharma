export interface SeedCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface SeedProduct {
  brandName: string;
  genericName: string;
  composition: string;
  strength: string;
  dosageForm: string;
  categorySlug: string;
  packaging: string;
  imageUrl: string;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  indications: string[];
  storage: string;
  shelfLife: string;
}

export const SEED_CATEGORIES: SeedCategory[] = [
  {
    "name": "Antibacterial / Antibiotics",
    "slug": "antibacterial-antibiotics",
    "description": "Broad-spectrum oral, parenteral, and infusion antibiotics.",
    "icon": "ShieldCheck"
  },
  {
    "name": "Antifungal",
    "slug": "antifungal",
    "description": "Advanced antifungal injectable and systemic formulations.",
    "icon": "ShieldCheck"
  },
  {
    "name": "Gastrointestinal – Antacids / Anti-ulcer",
    "slug": "gastrointestinal-antacids-anti-ulcer",
    "description": "PPIs, mucosal protectants, and anti-reflux suspensions.",
    "icon": "Activity"
  },
  {
    "name": "Gastrointestinal – Laxatives & Bowel Motility",
    "slug": "gastrointestinal-laxatives-bowel-motility",
    "description": "Solutions and granules for bowel regulation and constipation.",
    "icon": "Activity"
  },
  {
    "name": "Gastrointestinal – Antispasmodic / Prokinetic",
    "slug": "gastrointestinal-antispasmodic-prokinetic",
    "description": "Motility regulators, antiemetics, and antispasmodics.",
    "icon": "Activity"
  },
  {
    "name": "Hepatoprotective (Liver Support)",
    "slug": "hepatoprotective-liver-support",
    "description": "Infusions, sachets, and tablets for liver health & hepatic support.",
    "icon": "Heart"
  },
  {
    "name": "Probiotic",
    "slug": "probiotic",
    "description": "High-potency microflora & prebiotic capsules.",
    "icon": "Sparkles"
  },
  {
    "name": "Analgesic / Antipyretic",
    "slug": "analgesic-antipyretic",
    "description": "Pain management tablets and IV infusions.",
    "icon": "Activity"
  },
  {
    "name": "Antiemetic",
    "slug": "antiemetic",
    "description": "Injectable and oral anti-nausea antiemetic therapies.",
    "icon": "ShieldCheck"
  },
  {
    "name": "Corticosteroids",
    "slug": "corticosteroids",
    "description": "High-potency anti-inflammatory steroid injections.",
    "icon": "ShieldCheck"
  },
  {
    "name": "Anticoagulant",
    "slug": "anticoagulant",
    "description": "Heparin parenteral anticoagulant injections.",
    "icon": "Heart"
  },
  {
    "name": "Vasopressor",
    "slug": "vasopressor",
    "description": "Critical care vasopressor injections.",
    "icon": "Heart"
  },
  {
    "name": "Mucolytic / Respiratory",
    "slug": "mucolytic-respiratory",
    "description": "Respiratory mucolytics and bronchodilator combinations.",
    "icon": "Activity"
  },
  {
    "name": "Antioxidant / Detox Support",
    "slug": "antioxidant-detox-support",
    "description": "Glutathione injections, tablets, and detoxifying sachets.",
    "icon": "Sparkles"
  },
  {
    "name": "Immunosuppressant",
    "slug": "immunosuppressant",
    "description": "Immunosuppressive therapy tablets.",
    "icon": "Brain"
  },
  {
    "name": "Vitamins, Minerals & Nutritional Supplements",
    "slug": "vitamins-minerals-nutritional-supplements",
    "description": "Essential micronutrient softgels, syrups, and neuro-boosters.",
    "icon": "Sparkles"
  },
  {
    "name": "Renal / Nutritional Support",
    "slug": "renal-nutritional-support",
    "description": "Alpha Ketoanalogues and essential amino acids for renal care.",
    "icon": "Bone"
  }
];

export const SEED_PRODUCTS: SeedProduct[] = [
  {
    "brandName": "FOSFOANCE",
    "genericName": "Fosfomycin Trometamol 3gm Sachet",
    "composition": "Fosfomycin Trometamol 3gm Sachet",
    "strength": "3gm",
    "dosageForm": "Suspension",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "1 Sachet",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Indicated for single-dose treatment of uncomplicated lower urinary tract infections.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Uncomplicated Urinary Tract Infections"
    ],
    "storage": "Store below 25°C in a dry place.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "FAROANCE / ER",
    "genericName": "Faropenem Sodium 200mg / 300mg (ER) Tablet",
    "composition": "Faropenem Sodium 200mg / 300mg (ER) Tablet",
    "strength": "200mg / 300mg ER",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Oral penem antibiotic effective against resistant respiratory and urinary tract pathogens.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Respiratory Infections",
      "UTI"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "FAROANCE-CV",
    "genericName": "Faropenem Sodium 200mg & Potassium Clavulanate 125mg",
    "composition": "Faropenem Sodium 200mg & Potassium Clavulanate 125mg",
    "strength": "200mg + 125mg",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 6 Tablets Alu-Alu",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Synergistic beta-lactamase resistant penem combination.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Complicated ENT & LRT Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CEFIANCE",
    "genericName": "Cefuroxime Axetil IP 250mg / 500mg Tablet",
    "composition": "Cefuroxime Axetil IP 250mg / 500mg Tablet",
    "strength": "250mg / 500mg",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 10 Tablets Alu-Alu",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "2nd generation cephalosporin for skin, soft tissue, and ENT infections.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Pharyngitis",
      "Tonsillitis",
      "Skin Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "LINEZOACT 600",
    "genericName": "Linezolid Tablets IP 600mg",
    "composition": "Linezolid Tablets IP 600mg",
    "strength": "600mg",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Oxazolidinone antibacterial for MRSA and resistant Gram-positive infections.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Nosocomial Pneumonia",
      "VRE Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "Cepotor-O",
    "genericName": "Cefpodoxime 200mg and Ofloxacin 200mg",
    "composition": "Cefpodoxime 200mg and Ofloxacin 200mg",
    "strength": "200mg + 200mg",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Dual-action cephalosporin and fluoroquinolone oral combination.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Typhoid Fever",
      "Complicated Respiratory Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "RIFANCE",
    "genericName": "Rifaximin 400mg / 550mg Tablet",
    "composition": "Rifaximin 400mg / 550mg Tablet",
    "strength": "400mg / 550mg",
    "dosageForm": "Tablet",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Non-systemic GI-targeted antibiotic for traveler diarrhea and hepatic encephalopathy.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Hepatic Encephalopathy",
      "IBS with Diarrhea"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "SODANCE IV",
    "genericName": "Sodium Bicarbonate Injection IP",
    "composition": "Sodium Bicarbonate Injection IP",
    "strength": "Infusion Standard",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Vial / Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Alkalinizing parenteral solution for severe metabolic acidosis.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Metabolic Acidosis Management"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CLINDANCE",
    "genericName": "Clindamycin Injection IP 600mg/4ml",
    "composition": "Clindamycin Injection IP 600mg/4ml",
    "strength": "600mg / 4ml",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "4ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Lincosamide parenteral antibiotic for serious anaerobic intra-abdominal infections.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Anaerobic Infections",
      "Pelvic Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TEICOANCE",
    "genericName": "Teicoplanin Injection IP 400mg",
    "composition": "Teicoplanin Injection IP 400mg",
    "strength": "400mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Vial with Diluent",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Glycopeptide antibiotic for severe Gram-positive infections including endocarditis.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Gram-Positive Septicemia",
      "Bone & Joint Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CEFPIME-TZ",
    "genericName": "Cefepime 1gm & Tazobactam 125mg Injection",
    "composition": "Cefepime 1gm & Tazobactam 125mg Injection",
    "strength": "1gm + 125mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "4th generation cephalosporin with beta-lactamase inhibitor for ICU pathogens.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Febrile Neutropenia",
      "Complicated Intra-Abdominal Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRNAM",
    "genericName": "Aztreonam 1gm Injection",
    "composition": "Aztreonam 1gm Injection",
    "strength": "1gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Monobactam parenteral antibiotic targeting Gram-negative aerobic bacilli.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Gram-Negative Aerobic Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ZAVIANCE",
    "genericName": "Ceftazidime 2gm & Avibactam Powder 500mg for Infusion",
    "composition": "Ceftazidime 2gm & Avibactam Powder 500mg for Infusion",
    "strength": "2gm + 500mg",
    "dosageForm": "Infusion",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Infusion Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Novel beta-lactamase inhibitor combination for carbapenem-resistant Enterobacteriaceae.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Hospital-Acquired Pneumonia",
      "Multidrug Resistant Gram-Negative Pathogens"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TOBANCE-CZ",
    "genericName": "Ceftazidime & Tobramycin for Injection (1.120gm)",
    "composition": "Ceftazidime & Tobramycin for Injection (1.120gm)",
    "strength": "1.120gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Synergistic cephalosporin & aminoglycoside combination injection.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Pseudomonas Aeruginosa Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "FOSFOANCE (Inj.)",
    "genericName": "Fosfomycin for Injection 4gm",
    "composition": "Fosfomycin for Injection 4gm",
    "strength": "4gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "4gm Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Broad-spectrum bactericidal parenteral fosfomycin formulation.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Complicated UTI",
      "Osteomyelitis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "COLIANCE",
    "genericName": "Colistimethate Sodium 1MIU/2MIU/4.5MIU Injection",
    "composition": "Colistimethate Sodium 1MIU/2MIU/4.5MIU Injection",
    "strength": "1MIU / 2MIU / 4.5MIU",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Polymyxin antibiotic for critically ill patients with carbapenem-resistant infections.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Extremely Drug Resistant Gram-Negative Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "POLYANCE",
    "genericName": "Polymyxin B for Injection USP",
    "composition": "Polymyxin B for Injection USP 500,000 Units",
    "strength": "500,000 Units",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Polypeptide parenteral antibiotic reserved for severe MDR Pseudomonas and Acinetobacter septicemia.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "MDR Acinetobacter & Pseudomonas Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MINOANCE",
    "genericName": "Minocycline for Injection USP 100mg",
    "composition": "Minocycline for Injection USP 100mg",
    "strength": "100mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Tetracycline parenteral injection for Acinetobacter baumannii infections.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Acinetobacter Infections",
      "Severe Skin Structure Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TIGEANCE",
    "genericName": "Tigecycline Injection IP 50mg (Lyophilized)",
    "composition": "Tigecycline Injection IP 50mg (Lyophilized)",
    "strength": "50mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Lyophilized Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Glycylcycline antibiotic for complicated intra-abdominal and skin infections.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "cIAI",
      "cSSTI"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TIGEANCE-PLUS",
    "genericName": "Tigecycline Injection IP 50mg (Lyophilized)",
    "composition": "Tigecycline Injection IP 50mg (Lyophilized)",
    "strength": "50mg High Purity",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Lyophilized Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Enhanced stability tigecycline formulation for ICU critical care.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Critical Care Gram-Negative Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "T-DOXY",
    "genericName": "Doxycycline for Injection USP 100mg",
    "composition": "Doxycycline for Injection USP 100mg",
    "strength": "100mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Broad-spectrum tetracycline IV injection for severe respiratory and rickettsial diseases.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Atypical Pneumonia",
      "Rickettsial Diseases"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CEFRANCE-ES",
    "genericName": "Cefoperazone Disodium and Sulbactam Powder 3gm/1.5gm for Infusion",
    "composition": "Cefoperazone Disodium and Sulbactam Powder 3gm/1.5gm for Infusion",
    "strength": "3gm / 1.5gm",
    "dosageForm": "Infusion",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Infusion Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High-dose anti-pseudomonal cephalosporin sulbactam combination infusion.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Severe Respiratory & Intra-Abdominal Sepsis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "AUXIBACT 1.5 GM",
    "genericName": "Cefoperazone 1gm & Sulbactam 0.5gm for Injection",
    "composition": "Cefoperazone 1gm & Sulbactam 0.5gm for Injection",
    "strength": "1gm + 0.5gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Standardized cephalosporin beta-lactamase inhibitor combination.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Surgical Prophylaxis",
      "Biliary Tract Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TAZOCIN 4.5 GM",
    "genericName": "Piperacillin 4gm & Tazobactam 0.5gm Injection",
    "composition": "Piperacillin 4gm & Tazobactam 0.5gm Injection",
    "strength": "4gm + 0.5gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Empiric broad-spectrum anti-pseudomonal penicillin injection.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Hospital Pneumonia",
      "Polymicrobial Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TAZOANCE",
    "genericName": "Piperacillin 4gm + Tazobactam 500mg Injection",
    "composition": "Piperacillin 4gm + Tazobactam 500mg Injection",
    "strength": "4gm + 500mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High-purity piperacillin tazobactam formulation.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Intra-Abdominal Infections",
      "Septicemia"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "XEDCLAV 1.2 GM",
    "genericName": "Amoxycillin Sodium 1000mg, Potassium Clavulanate 200mg",
    "composition": "Amoxycillin Sodium 1000mg, Potassium Clavulanate 200mg",
    "strength": "1000mg + 200mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Vial with WFI",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Parenteral co-amoxiclav combination injection.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "ENT & Gynecological Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRBETA 1.5 GM",
    "genericName": "Amoxycillin 1000mg and Sulbactam 500mg for Injection",
    "composition": "Amoxycillin 1000mg and Sulbactam 500mg for Injection",
    "strength": "1000mg + 500mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Aminopenicillin & sulbactam combination injection.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Respiratory Tract Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MEROANCE",
    "genericName": "Meropenem Injection IP 500mg/1gm",
    "composition": "Meropenem Injection IP 500mg/1gm",
    "strength": "500mg / 1gm",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial with WFI",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Ultra broad-spectrum carbapenem IV injection for severe ICU infections and meningitis.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Bacterial Meningitis",
      "Complicated Intra-Abdominal Sepsis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MEROANCE-S",
    "genericName": "Meropenem and Sulbactam for Injection 1.5gm",
    "composition": "Meropenem and Sulbactam for Injection 1.5gm",
    "strength": "1gm + 500mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Carbapenem with sulbactam for extended beta-lactamase producing superbugs.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Carbapenem Resistant Pathogens"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ERTANCE",
    "genericName": "Ertapenem for Injection 1000mg",
    "composition": "Ertapenem for Injection 1000mg",
    "strength": "1000mg",
    "dosageForm": "Injectable",
    "categorySlug": "antibacterial-antibiotics",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Once-daily 1-group carbapenem injection for outpatient parenteral antibiotic therapy.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Diabetic Foot Infections",
      "Acute Pelvic Infections"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "DULANCE",
    "genericName": "Anidulafungin for Injection 100mg/vial (Lyophilized)",
    "composition": "Anidulafungin for Injection 100mg/vial (Lyophilized)",
    "strength": "100mg/vial",
    "dosageForm": "Injectable",
    "categorySlug": "antifungal",
    "packaging": "Lyophilized Vial with Solvent",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Echinocandin antifungal injection for candidemia and invasive candidiasis.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Candidemia",
      "Invasive Candidiasis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TG-RAFT",
    "genericName": "Sodium Alginate 250mg, Sodium Bicarbonate 133.5mg, Calcium Carbonate 80mg Oral Susp.",
    "composition": "Sodium Alginate 250mg, Sodium Bicarbonate 133.5mg, Calcium Carbonate 80mg Oral Susp.",
    "strength": "250mg + 133.5mg + 80mg",
    "dosageForm": "Suspension",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Raft-forming oral suspension providing instant physical barrier against acid reflux.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "GERD",
      "Reflux Esophagitis"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRGEL-O",
    "genericName": "Sucralfate 1gm & Oxetacaine 20mg Suspension",
    "composition": "Sucralfate 1gm & Oxetacaine 20mg Suspension",
    "strength": "1gm + 20mg",
    "dosageForm": "Suspension",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Cytoprotective gastric mucosal bio-adhesive gel with local anesthetic relief.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Gastric Ulcers",
      "NSAID Gastropathy"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRGEL",
    "genericName": "Magaldrate 400mg & Simethicone 60mg / Oral Suspension IP",
    "composition": "Magaldrate 400mg & Simethicone 60mg / Oral Suspension IP",
    "strength": "400mg + 60mg",
    "dosageForm": "Suspension",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "170ml / 200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Fast-acting antacid antiflatulent suspension for heartburn and hyperacidity.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Hyperacidity",
      "Flatulence"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ESOANCE 40/DSR",
    "genericName": "Esomeprazole Magnesium 40mg + Domperidone 30mg (SR) Capsules",
    "composition": "Esomeprazole Magnesium 40mg + Domperidone 30mg (SR) Capsules",
    "strength": "40mg + 30mg SR",
    "dosageForm": "Capsule",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "10 x 10 Capsules Strip",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Dual action PPI & prokinetic capsule for refractory acid reflux.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Refractory GERD",
      "Erosive Esophagitis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PANTANCE-40/DSR",
    "genericName": "Pantoprazole 40mg, Domperidone 30mg SR Prolonged-Release Cap. IP",
    "composition": "Pantoprazole 40mg, Domperidone 30mg SR Prolonged-Release Cap. IP",
    "strength": "40mg + 30mg SR",
    "dosageForm": "Capsule",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "10 x 10 Capsules Alu-Alu",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Sustained-release acid pump inhibitor and gastric motility regulator.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Peptic Ulcers",
      "Non-Ulcer Dyspepsia"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PANTANCE IV 40MG",
    "genericName": "Pantoprazole for Injection 40mg",
    "composition": "Pantoprazole for Injection 40mg",
    "strength": "40mg",
    "dosageForm": "Injectable",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Parenteral PPI for acute upper GI bleeding and ulcer prophylaxis.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Upper GI Hemorrhage",
      "Zollinger-Ellison Syndrome"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ESOANCE (Inj.)",
    "genericName": "Esomeprazole 40mg Injection",
    "composition": "Esomeprazole 40mg Injection",
    "strength": "40mg",
    "dosageForm": "Injectable",
    "categorySlug": "gastrointestinal-antacids-anti-ulcer",
    "packaging": "Single Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "IV esomeprazole for rapid suppression of gastric acid production.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Peptic Ulcer Bleeding",
      "Acid Aspiration Prevention"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PEGETOR",
    "genericName": "Polyethylene Glycol 3350 + Sodium Chloride, Sodium Bicarbonate + Potassium Chloride Oral Solution",
    "composition": "Polyethylene Glycol 3350 + Sodium Chloride, Sodium Bicarbonate + Potassium Chloride Oral Solution",
    "strength": "PEG 3350 Electrolyte Formula",
    "dosageForm": "Syrup",
    "categorySlug": "gastrointestinal-laxatives-bowel-motility",
    "packaging": "200ml / 500ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Osmotic laxative for chronic constipation and pre-colonoscopy bowel cleansing.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Chronic Constipation",
      "Bowel Cleansing"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "EASYGUT",
    "genericName": "Lactulose Solution 200ml, USP",
    "composition": "Lactulose Solution 200ml, USP",
    "strength": "10g / 15ml",
    "dosageForm": "Syrup",
    "categorySlug": "gastrointestinal-laxatives-bowel-motility",
    "packaging": "200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Synthetic disaccharide osmotic laxative reducing systemic blood ammonia levels.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Constipation",
      "Hepatic Encephalopathy"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "FIBREANCE",
    "genericName": "Lactitol Monohydrate 10g & Ispaghula Husk 3.5g Granules",
    "composition": "Lactitol Monohydrate 10g & Ispaghula Husk 3.5g Granules",
    "strength": "10g + 3.5g",
    "dosageForm": "Suspension",
    "categorySlug": "gastrointestinal-laxatives-bowel-motility",
    "packaging": "90g / 180g Jar",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Dual fiber & disaccharide laxative granules for smooth bowel evacuation.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "IBS-C",
      "Hemorrhoidal Constipation"
    ],
    "storage": "Store in a dry place below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PRUANCE",
    "genericName": "Prucalopride 1mg/2mg Tablet",
    "composition": "Prucalopride 1mg/2mg Tablet",
    "strength": "1mg / 2mg",
    "dosageForm": "Tablet",
    "categorySlug": "gastrointestinal-laxatives-bowel-motility",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Selective 5-HT4 receptor agonist for chronic idiopathic constipation.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Chronic Idiopathic Constipation in Adults"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MEBEANCE-XR 200",
    "genericName": "Mebeverine Hydrochloride Prolonged Release Capsules 200mg",
    "composition": "Mebeverine Hydrochloride Prolonged Release Capsules 200mg",
    "strength": "200mg PR",
    "dosageForm": "Capsule",
    "categorySlug": "gastrointestinal-antispasmodic-prokinetic",
    "packaging": "10 x 10 Capsules",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Directly-acting musculotropic antispasmodic for irritable bowel syndrome.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Irritable Bowel Syndrome (IBS)",
      "GI Spasms"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ACTOANCE-100",
    "genericName": "Acotiamide Tablets 100mg",
    "composition": "Acotiamide Tablets 100mg",
    "strength": "100mg",
    "dosageForm": "Tablet",
    "categorySlug": "gastrointestinal-antispasmodic-prokinetic",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Prokinetic drug targeting postprandial distress syndrome and functional dyspepsia.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Functional Dyspepsia",
      "Postprandial Fullness"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "LEVOANCE 25",
    "genericName": "Levosulpiride 12.5mg/ml Injection",
    "composition": "Levosulpiride 12.5mg/ml Injection",
    "strength": "12.5mg / ml",
    "dosageForm": "Injectable",
    "categorySlug": "gastrointestinal-antispasmodic-prokinetic",
    "packaging": "2ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "D2 dopamine receptor antagonist prokinetic for emesis and GI dysmotility.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Diabetic Gastroparesis",
      "Refractory Nausea"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "VOMIANCE",
    "genericName": "Ondansetron Injection IP 2mg/ml",
    "composition": "Ondansetron Injection IP 2mg/ml",
    "strength": "2mg / ml (4mg/2ml)",
    "dosageForm": "Injectable",
    "categorySlug": "gastrointestinal-antispasmodic-prokinetic",
    "packaging": "2ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "5-HT3 receptor antagonist IV antiemetic for post-operative & chemotherapy nausea.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "CINV",
      "PONV",
      "Acute Emesis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CEDODRINE 2.5",
    "genericName": "Midodrine Hydrochloride USP 2.5mg/5/10mg Tablet",
    "composition": "Midodrine Hydrochloride USP 2.5mg/5/10mg Tablet",
    "strength": "2.5mg / 5mg / 10mg",
    "dosageForm": "Tablet",
    "categorySlug": "gastrointestinal-antispasmodic-prokinetic",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Alpha-1 adrenergic agonist for symptomatic orthostatic hypotension.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Severe Orthostatic Hypotension"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "HEPABIZ",
    "genericName": "L-Ornithine L-Aspartate Infusion 5gm, Silymarin, L-glutathione, Niacinamide & Multi-Vitamin Sachets",
    "composition": "L-Ornithine L-Aspartate Infusion 5gm, Silymarin, L-glutathione, Niacinamide & Multi-Vitamin Sachets",
    "strength": "5gm + Silymarin + Glutathione",
    "dosageForm": "Suspension",
    "categorySlug": "hepatoprotective-liver-support",
    "packaging": "Sachet Box",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Comprehensive hepatoprotective sachet formulation for liver detox and cirrhosis care.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Alcoholic Fatty Liver",
      "Cirrhosis",
      "Hepatic Dysfunction"
    ],
    "storage": "Store below 25°C in a dry place.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "HEPABIZ XT",
    "genericName": "L-Leucine, L-Isoleucine & L-Valine (BCAAs) Sachet",
    "composition": "L-Leucine, L-Isoleucine & L-Valine (BCAAs) Sachet",
    "strength": "BCAA Multi-Amino Ratio",
    "dosageForm": "Suspension",
    "categorySlug": "hepatoprotective-liver-support",
    "packaging": "Sachet Pack",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Branched-Chain Amino Acid nutritional sachet for chronic liver disease and protein metabolism.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Hepatic Insufficiency",
      "Muscle Wasting in Cirrhosis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "HEPABIZ (Inj.)",
    "genericName": "L-Ornithine L-Aspartate Infusion 5gm (10ml)",
    "composition": "L-Ornithine L-Aspartate Infusion 5gm (10ml)",
    "strength": "5gm / 10ml",
    "dosageForm": "Injectable",
    "categorySlug": "hepatoprotective-liver-support",
    "packaging": "10ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "IV L-Ornithine L-Aspartate for acute hyperammonemia in liver encephalopathy.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Hyperammonemia",
      "Hepatic Coma Management"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "URSOANCE",
    "genericName": "Ursodeoxycholic Acid 300mg/450mg SR Tablets IP",
    "composition": "Ursodeoxycholic Acid 300mg/450mg SR Tablets IP",
    "strength": "300mg / 450mg SR",
    "dosageForm": "Tablet",
    "categorySlug": "hepatoprotective-liver-support",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Hydrophilic bile acid tablet for primary biliary cholangitis and gallstone dissolution.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Primary Biliary Cholangitis",
      "Cholesterol Gallstones"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRSAME",
    "genericName": "S-Adenosyl-L-Methionine Disulfate Tosylate 400mg Tablets",
    "composition": "S-Adenosyl-L-Methionine Disulfate Tosylate 400mg Tablets",
    "strength": "400mg",
    "dosageForm": "Tablet",
    "categorySlug": "hepatoprotective-liver-support",
    "packaging": "10 x 10 Enteric Coated Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "SAMe formulation supporting transsulfuration and glutathione liver protection.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Intrahepatic Cholestasis",
      "Chronic Liver Diseases"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "SAFEGUT",
    "genericName": "Pre-Probiotic 15 Billion Capsules, Fructo-oligosaccharides 100mg",
    "composition": "Pre-Probiotic 15 Billion Capsules, Fructo-oligosaccharides 100mg",
    "strength": "15 Billion CFU + 100mg FOS",
    "dosageForm": "Capsule",
    "categorySlug": "probiotic",
    "packaging": "10 x 10 Capsules",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High CFU probiotic blend with prebiotic fibers restoring intestinal microbiota balance.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Antibiotic-Associated Diarrhea",
      "Gastroenteritis",
      "Dysbiosis"
    ],
    "storage": "Store below 25°C in a dry place.",
    "shelfLife": "18 Months"
  },
  {
    "brandName": "TORRPENTA-50",
    "genericName": "Tapentadol Tablets 50mg",
    "composition": "Tapentadol Tablets 50mg",
    "strength": "50mg",
    "dosageForm": "Tablet",
    "categorySlug": "analgesic-antipyretic",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Centrally acting analgesic with dual mu-opioid & NRI mechanism.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Moderate to Severe Acute Pain"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PARANCE",
    "genericName": "Paracetamol Injection 1gm/100ml (I.V.)",
    "composition": "Paracetamol Injection 1gm/100ml (I.V.)",
    "strength": "1gm / 100ml",
    "dosageForm": "Injectable",
    "categorySlug": "analgesic-antipyretic",
    "packaging": "100ml IV Infusion Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Ready-to-use IV paracetamol infusion for rapid post-op fever and pain management.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Acute Post-Operative Pain",
      "Severe Pyrexia"
    ],
    "storage": "Store below 30°C. Do not refrigerate.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "VOMIANCE (Inj.)",
    "genericName": "Ondansetron Injection IP 2mg/ml",
    "composition": "Ondansetron Injection IP 2mg/ml",
    "strength": "2mg / ml",
    "dosageForm": "Injectable",
    "categorySlug": "antiemetic",
    "packaging": "2ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "5-HT3 antagonist injection for immediate anti-emetic action.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Chemotherapy & Post-Surgical Nausea"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "PREDEANCE 40",
    "genericName": "Methylprednisolone Sodium Succinate Injection 40mg",
    "composition": "Methylprednisolone Sodium Succinate Injection 40mg",
    "strength": "40mg",
    "dosageForm": "Injectable",
    "categorySlug": "corticosteroids",
    "packaging": "Single Vial with Solvent",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Rapid-acting IV corticosteroid for acute anaphylaxis and severe asthma flares.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Severe Allergic Reactions",
      "Acute Asthma",
      "Shock"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CORTANCE 100 MG",
    "genericName": "Hydrocortisone Sodium Succinate Injection IP 100mg",
    "composition": "Hydrocortisone Sodium Succinate Injection IP 100mg",
    "strength": "100mg",
    "dosageForm": "Injectable",
    "categorySlug": "corticosteroids",
    "packaging": "Single Vial with WFI",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Short-acting glucosteroid IV injection for adrenal insufficiency and status asthmaticus.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Acute Adrenal Crisis",
      "Status Asthmaticus"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRPARIN",
    "genericName": "Heparin Sodium Injection IP 5,000 IU/5ml",
    "composition": "Heparin Sodium Injection IP 5,000 IU/5ml",
    "strength": "5,000 IU / 5ml",
    "dosageForm": "Injectable",
    "categorySlug": "anticoagulant",
    "packaging": "5ml Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Parenteral anticoagulant for venous thromboembolism prevention and hemodialysis.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Deep Vein Thrombosis",
      "Pulmonary Embolism"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRPARIN (25,000 IU)",
    "genericName": "Heparin Sodium Injection IP 25,000 IU/5ml",
    "composition": "Heparin Sodium Injection IP 25,000 IU/5ml",
    "strength": "25,000 IU / 5ml",
    "dosageForm": "Injectable",
    "categorySlug": "anticoagulant",
    "packaging": "5ml Multi-dose Vial",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High-concentration parenteral heparin for cardiac surgery and vascular procedures.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Open Heart Surgery",
      "Arterial Embolism Prophylaxis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TERLIBID",
    "genericName": "Terlipressin Injection 0.1mg/ml",
    "composition": "Terlipressin Injection 0.1mg/ml",
    "strength": "1mg / 10ml (0.1mg/ml)",
    "dosageForm": "Injectable",
    "categorySlug": "vasopressor",
    "packaging": "10ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Vasoactive analog of vasopressin for bleeding esophageal varices and hepatorenal syndrome.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Bleeding Esophageal Varices",
      "Hepatorenal Syndrome Type 1"
    ],
    "storage": "Store in refrigerator (2°C - 8°C).",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MUCOANCE",
    "genericName": "Acetylcysteine Injection BP 200mg/ml",
    "composition": "Acetylcysteine Injection BP 200mg/ml",
    "strength": "200mg / ml",
    "dosageForm": "Injectable",
    "categorySlug": "mucolytic-respiratory",
    "packaging": "2ml Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "IV mucolytic agent & acetaminophen overdose antidote.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Acetaminophen Toxicity",
      "Viscid Mucus Hypersecretion"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "MONTANCE-AD",
    "genericName": "Acebrophylline 200mg, Montelukast 10mg, Desloratadine 5mg Tablets",
    "composition": "Acebrophylline 200mg, Montelukast 10mg, Desloratadine 5mg Tablets",
    "strength": "200mg + 10mg + 5mg",
    "dosageForm": "Tablet",
    "categorySlug": "mucolytic-respiratory",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Triple combination bronchodilator, leukotriene receptor antagonist, and antihistamine.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "COPD",
      "Severe Asthma with Allergic Rhinitis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "RENOANCE",
    "genericName": "N-Acetylcysteine 150mg & Taurine 500mg Tablets",
    "composition": "N-Acetylcysteine 150mg & Taurine 500mg Tablets",
    "strength": "150mg + 500mg",
    "dosageForm": "Tablet",
    "categorySlug": "mucolytic-respiratory",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Renal-protective antioxidant combination for contrast-induced nephropathy prevention.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Nephro-Protection",
      "Diabetic Nephropathy"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "GLUTANCE (Injection)",
    "genericName": "Glutathione for Injection 600mg",
    "composition": "Glutathione for Injection 600mg",
    "strength": "600mg",
    "dosageForm": "Injectable",
    "categorySlug": "antioxidant-detox-support",
    "packaging": "Vial with WFI Ampoule",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Master endogenous antioxidant IV injection for cellular detox and chemoprotection.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Cisplatin Chemotherapy Neuro-Toxicity Prevention"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "GLUTANCE TABLET",
    "genericName": "Glutathione 500mg Tablets",
    "composition": "Glutathione 500mg Tablets",
    "strength": "500mg",
    "dosageForm": "Tablet",
    "categorySlug": "antioxidant-detox-support",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Reduced L-glutathione oral tablets for systemic cellular antioxidant protection.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Oxidative Stress Reduction",
      "Skin & Liver Detoxification"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "GLUTANCE SACHET",
    "genericName": "L-Glutamine 10g, Zinc Sulphate 3.3mg, Selenium 40mcg",
    "composition": "L-Glutamine 10g, Zinc Sulphate 3.3mg, Selenium 40mcg",
    "strength": "10g + 3.3mg + 40mcg",
    "dosageForm": "Suspension",
    "categorySlug": "antioxidant-detox-support",
    "packaging": "Sachet Pack",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Immunonutrition sachet for intestinal barrier recovery and post-op metabolic support.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Post-Surgical Healing",
      "Stomatitis & Mucositis Care"
    ],
    "storage": "Store in a cool dry place.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "AZOANCE-50",
    "genericName": "Azathioprine Tablets I.P. 50mg",
    "composition": "Azathioprine Tablets I.P. 50mg",
    "strength": "50mg",
    "dosageForm": "Tablet",
    "categorySlug": "immunosuppressant",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Purine synthesis inhibitor immunosuppressive tablet for organ transplant & autoimmune conditions.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Renal Allograft Rejection Prevention",
      "Severe Rheumatoid Arthritis"
    ],
    "storage": "Store below 25°C. Protect from light.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "CADZIM",
    "genericName": "Calcium Citrate Maleate 500mg, Vitamin D3 200 IU, Zinc Oxide 7.5mg, Magnesium Oxide 50mg Softgels",
    "composition": "Calcium Citrate Maleate 500mg, Vitamin D3 200 IU, Zinc Oxide 7.5mg, Magnesium Oxide 50mg, Soft Gelatin Capsules",
    "strength": "500mg + 200 IU",
    "dosageForm": "Capsule",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "10 x 10 Softgel Capsules",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Highly bioavailable calcium citrate maleate formula for bone mineralization.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Osteoporosis",
      "Pregnancy & Lactation Calcium Support"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRZINC Syrup",
    "genericName": "Vitamin A, Cholecalciferol, Cyanocobalamin, Vitamin E, Vitamin C, Zinc Sulphate",
    "composition": "Vitamin A, Cholecalciferol, Cyanocobalamin, Vitamin E, Vitamin C, Zinc Sulphate",
    "strength": "Multivitamin + Zinc",
    "dosageForm": "Syrup",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Essential multivitamin and zinc liquid supplement for pediatric & adult immune health.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "General Weakness",
      "Nutritional Deficiencies"
    ],
    "storage": "Store below 30°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "COGNITOR",
    "genericName": "L-Carnosine 200mg + DHA 125mg/5ml",
    "composition": "L-Carnosine 200mg + DHA 125mg/5ml",
    "strength": "200mg + 125mg",
    "dosageForm": "Syrup",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "100ml / 200ml Bottle",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Neuro-developmental pediatric syrup enhancing cognitive focus and language skills.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Autism Spectrum Support",
      "ADHD & Neuro-Development"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "18 Months"
  },
  {
    "brandName": "ALBUANCE",
    "genericName": "DHA, with Vitamins, Minerals & Zinc",
    "composition": "DHA, with Vitamins, Minerals & Zinc",
    "strength": "DHA Micronutrient Complex",
    "dosageForm": "Capsule",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "Container Box",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Maternal DHA & essential micronutrient formulation for fetal brain development.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Prenatal & Postnatal Nutritional Fortification"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORRBEST TAB",
    "genericName": "Methylcobalamin 1500mcg, Alpha Lipoic Acid 200mg, Benfotiamine 200mg, Folic Acid, Chromium, Pyridoxine HCl",
    "composition": "Methylcobalamin 1500mcg, Alpha Lipoic Acid 200mg, Benfotiamine 200mg, Folic Acid, Chromium, Pyridoxine HCl",
    "strength": "1500mcg + 200mg",
    "dosageForm": "Tablet",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High-potency benfotiamine & methylcobalamin formula for diabetic nerve regeneration.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Diabetic Neuropathy",
      "Peripheral Nerve Damage"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "Q-ANCE",
    "genericName": "CO-Enzyme Q10 100mg, Lycopene 10% 5000mcg, Omega-3 Fatty Acids, Cyanocobalamin, L-Arginine, Selenium",
    "composition": "CO-Enzyme Q10 100mg, Lycopene 10% 5000mcg, Omega-3 Fatty Acids, Cyanocobalamin, L-Arginine, Selenium",
    "strength": "100mg CoQ10 Complex",
    "dosageForm": "Capsule",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "10 x 10 Softgels",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Cardiovascular & mitochondrial energy booster softgel capsule.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Male & Female Sub-Fertility",
      "Statin-Induced Myopathy"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "VITMIN-8",
    "genericName": "Folic Acid, Methylcobalamin, Biotin, Calcium Pantothenate & Vitamins Tablets",
    "composition": "Folic Acid, Methylcobalamin, Biotin, Calcium Pantothenate & Vitamins Tablets",
    "strength": "Essential 8 B-Vitamins",
    "dosageForm": "Tablet",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Complete B-complex & biotin daily metabolic support tablet.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Hair Fall",
      "Nutritional Anemia",
      "Glossitis"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ALCOANCE TAB.",
    "genericName": "Thiamine Hydrochloride 250mg, Riboflavin 4mg & Pyridoxine Hydrochloride 50mg Tablets",
    "composition": "Thiamine Hydrochloride 250mg, Riboflavin 4mg & Pyridoxine Hydrochloride 50mg Tablets",
    "strength": "250mg + 4mg + 50mg",
    "dosageForm": "Tablet",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "10 x 10 Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "High-dose thiamine & B-vitamin formulation for Wernicke-Korsakoff prophylaxis.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Alcohol Neuropathy",
      "Severe Thiamine Deficiency"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "ALCOANCE KIT",
    "genericName": "Thiamine HCL, Riboflavin & Pyridoxine Injection + Ascorbic Acid + Dextrose Injection",
    "composition": "Thiamine HCL, Riboflavin & Pyridoxine Injection + Ascorbic Acid + Dextrose Injection",
    "strength": "Therapeutic Parenteral Kit",
    "dosageForm": "Injectable",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "Combipack Infusion Kit",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Parenteral high-potency vitamin replacement kit for ICU and detoxification care.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Acute Alcohol Withdrawal",
      "Severe Malnutrition"
    ],
    "storage": "Store below 25°C.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "TORBAL-1500",
    "genericName": "Methylcobalamin Injection 1500mcg",
    "composition": "Methylcobalamin Injection 1500mcg",
    "strength": "1500mcg / 2ml",
    "dosageForm": "Injectable",
    "categorySlug": "vitamins-minerals-nutritional-supplements",
    "packaging": "2ml Ampoule / Dispo Pack",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Parenteral active B12 injection for megaloblastic anemia and severe neuralgia.",
    "isFeatured": false,
    "isArchived": false,
    "indications": [
      "Pernicious Anemia",
      "Peripheral Neuropathy"
    ],
    "storage": "Store below 25°C. Protect from light.",
    "shelfLife": "24 Months"
  },
  {
    "brandName": "KETOANCE",
    "genericName": "Alpha Ketoanalogues & Essential Amino Acids Tablets",
    "composition": "Alpha Ketoanalogues & Essential Amino Acids Tablets",
    "strength": "Standard Alpha Keto-Acid Formula",
    "dosageForm": "Tablet",
    "categorySlug": "renal-nutritional-support",
    "packaging": "10 x 10 Film Coated Tablets",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "description": "Essential nitrogen-free keto-acid amino acid tablet for Chronic Kidney Disease (CKD) patients.",
    "isFeatured": true,
    "isArchived": false,
    "indications": [
      "Chronic Kidney Disease (CKD Stage 3-5)",
      "Uremic State Delay"
    ],
    "storage": "Store below 25°C in a dry place.",
    "shelfLife": "24 Months"
  }
];
