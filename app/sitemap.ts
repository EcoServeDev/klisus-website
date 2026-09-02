import type { MetadataRoute } from "next";

// /plot-check/* is proxied to the product origin, which carries its own SEO —
// excluded here deliberately.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `https://klisus.com${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority,
  });
  return [
    page("", 1.0),
    page("/solutions", 0.8),
    page("/solutions/eudr-land-evidence", 0.9),
    page("/intelligence", 0.7),
    page("/about", 0.6),
    page("/partnerships", 0.6),
  ];
}
