/** Routes
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler.
 *
 * The only fields safe to hand-edit are the per-entry metadata below:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/products", changefreq: "monthly", priority: 0.8 },
  { path: "/divisions", changefreq: "monthly", priority: 0.8 },
  { path: "/research-development", changefreq: "monthly", priority: 0.8 },
  { path: "/careers", changefreq: "monthly", priority: 0.7 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/admin", changefreq: "monthly", priority: 0.3 },
];
