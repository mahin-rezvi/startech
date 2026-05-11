import type { MetadataRoute } from "next";

import { toAbsoluteSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/catalog", "/insights", "/products/"],
      disallow: ["/api/", "/_next/"],
    },
    sitemap: toAbsoluteSiteUrl("/sitemap.xml"),
    host: toAbsoluteSiteUrl(),
  };
}
