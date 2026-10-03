import { Router, Request, Response } from 'express';
import { isSystemHost } from '../utils/seo-host';
import { seoRoutes } from '../utils/seo-routes';

const router = Router();

/**
 * GET /sitemap.xml
 * Dynamic XML sitemap generator based on registered SEO routes
 */
router.get('/sitemap.xml', (req: Request, res: Response) => {
  const protocol = req.protocol || 'https';
  const host = req.get('host') || 'torancepharma.com';
  const baseUrl = `${protocol}://${host}`;

  const xmlEntries = seoRoutes.map((route) => {
    const priority = route.priority !== undefined ? route.priority.toFixed(1) : '0.8';
    const changefreq = route.changefreq || 'monthly';
    const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.status(200).send(xml);
});

/**
 * GET /robots.txt
 * Serves dynamic robots.txt enforcing Disallow: / on system hosts vs Allow: / on production domains
 */
router.get('/robots.txt', (req: Request, res: Response) => {
  const isSys = isSystemHost({ hostname: req.hostname });
  const protocol = req.protocol || 'https';
  const host = req.get('host') || 'torancepharma.com';

  if (isSys) {
    res.header('Content-Type', 'text/plain');
    res.status(200).send(`User-agent: *\nDisallow: /\n`);
    return;
  }

  res.header('Content-Type', 'text/plain');
  res.status(200).send(`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${protocol}://${host}/sitemap.xml\n`);
});

export default router;
