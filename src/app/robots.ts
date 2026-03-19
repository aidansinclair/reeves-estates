import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/_next/"],
    },
    sitemap: "https://reevesestates.com/sitemap.xml",
  };
}
