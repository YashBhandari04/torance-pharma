import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const { SEED_PRODUCTS } = await import('../src/utils/seedProductsData.ts');

  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  const slugMap = new Map();

  SEED_PRODUCTS.forEach((p, idx) => {
    let baseSlug = slugify(p.brandName);
    if (slugMap.has(baseSlug)) {
      baseSlug = slugify(`${p.brandName}-${p.strength || p.dosageForm}`);
      if (slugMap.has(baseSlug)) {
        baseSlug = `${baseSlug}-${idx + 1}`;
      }
    }
    slugMap.set(baseSlug, p.brandName);
    p.slug = baseSlug;
  });

  console.log('Total Products:', SEED_PRODUCTS.length);
  console.log('Unique Slugs Count:', slugMap.size);
  console.log('First 10 Slugs:', Array.from(slugMap.entries()).slice(0, 10));
}

main().catch(console.error);
