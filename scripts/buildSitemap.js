import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const { SEED_PRODUCTS } = await import('../backend/src/utils/seedProductsData.ts');

  const baseUrl = 'https://torancelifescience.com';

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/products', priority: '0.9', changefreq: 'daily' },
    { url: '/divisions', priority: '0.8', changefreq: 'monthly' },
    { url: '/research-development', priority: '0.7', changefreq: 'monthly' },
    { url: '/careers', priority: '0.7', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach(p => {
    xml += `  <url>\n    <loc>${baseUrl}${p.url}</loc>\n    <lastmod>2026-09-30</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
  });

  SEED_PRODUCTS.forEach(p => {
    xml += `  <url>\n    <loc>${baseUrl}/products/${p.slug}</loc>\n    <lastmod>2026-09-30</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  xml += '</urlset>\n';

  const targetPath = path.resolve(__dirname, '../frontend/public/sitemap.xml');
  fs.writeFileSync(targetPath, xml, 'utf8');
  console.log(`Successfully generated ${targetPath} with ${staticPages.length + SEED_PRODUCTS.length} total URLs!`);
}

main().catch(console.error);
