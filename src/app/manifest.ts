import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bazaar - Product Catalog",
    short_name: "Bazaar",
    description: "Search and explore the Star Tech product catalog with analytics and product insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#09111c",
    theme_color: "#09111c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
