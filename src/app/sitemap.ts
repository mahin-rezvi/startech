import type { MetadataRoute } from "next";

import { getCatalog } from "@/lib/startech";
import { toAbsoluteSiteUrl } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const catalog = await getCatalog();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteSiteUrl("/"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: toAbsoluteSiteUrl("/catalog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: toAbsoluteSiteUrl("/insights"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = catalog.products.slice(0, 5000).map((product) => ({
    url: toAbsoluteSiteUrl(`/products/${product.slug}`),
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
