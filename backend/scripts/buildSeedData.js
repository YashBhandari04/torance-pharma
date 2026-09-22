import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// We can dynamic import from frontend mockData
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mockDataPath = path.resolve(__dirname, '../../frontend/src/data/mockData.ts');

async function main() {
  const { CATEGORIES, PRODUCTS } = await import(`file://${mockDataPath}`);

  const categoriesToSeed = CATEGORIES.map(c => ({
    name: c.name,
    slug: c.slug,
    description: c.description,
    icon: c.icon
  }));

  const productsToSeed = PRODUCTS.map(p => ({
    brandName: p.brandName,
    genericName: p.genericName,
    composition: p.composition,
    strength: p.strength,
    dosageForm: p.dosageForm,
    categorySlug: p.category.slug,
    packaging: p.packaging,
    imageUrl: p.imageUrl,
    description: p.description,
    isFeatured: p.isFeatured || false,
    isArchived: false,
    indications: p.indications || [],
    storage: p.storage || 'Store below 25°C in a dry place.',
    shelfLife: p.shelfLife || '24 Months'
  }));

  const targetPath = path.resolve(__dirname, '../src/utils/seedProductsData.ts');
  const fileContent = `export interface SeedCategory {\n  name: string;\n  slug: string;\n  description: string;\n  icon: string;\n}\n\nexport interface SeedProduct {\n  brandName: string;\n  genericName: string;\n  composition: string;\n  strength: string;\n  dosageForm: string;\n  categorySlug: string;\n  packaging: string;\n  imageUrl: string;\n  description: string;\n  isFeatured: boolean;\n  isArchived: boolean;\n  indications: string[];\n  storage: string;\n  shelfLife: string;\n}\n\nexport const SEED_CATEGORIES: SeedCategory[] = ${JSON.stringify(categoriesToSeed, null, 2)};\n\nexport const SEED_PRODUCTS: SeedProduct[] = ${JSON.stringify(productsToSeed, null, 2)};\n`;

  fs.writeFileSync(targetPath, fileContent, 'utf8');
  console.log(`Successfully generated ${targetPath} with ${categoriesToSeed.length} categories and ${productsToSeed.length} products.`);
}

main().catch(console.error);
