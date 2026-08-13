import type { MetadataRoute } from "next";
import { absoluteUrl, localizedPagePath, pageKeys, type SiteLocale } from "@/lib/site";

const sitemapLocales: SiteLocale[] = ["en", "tr"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.flatMap((page) => {
    const languages = {
      en: absoluteUrl(localizedPagePath("en", page)),
      tr: absoluteUrl(localizedPagePath("tr", page)),
      "x-default": absoluteUrl(localizedPagePath("en", page)),
    };

    return sitemapLocales.map((locale) => ({
      url: absoluteUrl(localizedPagePath(locale, page)),
      alternates: { languages },
    }));
  });
}
