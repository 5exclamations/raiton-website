import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Add the absolute sitemap URL when the production domain is confirmed.
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
