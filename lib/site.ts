export const SITE_URL = "https://www.raitonllc.com";
export const PUBLIC_EMAIL = "sadig.i@raitonllc.com";
export const PHONE_NUMBER = "+971 50 179 4245";
export const PHONE_HREF = "tel:+971501794245";
export const WHATSAPP_NUMBER = "+44 7516 673000";
export const WHATSAPP_HREF = "https://wa.me/447516673000";
export const OPEN_GRAPH_IMAGE_PATH = "/brand/raiton-open-graph.jpg";

export const pageKeys = ["home", "about", "generalTrading", "offshore", "logistics", "contact"] as const;
export type PageKey = (typeof pageKeys)[number];
export type SiteLocale = "en" | "tr";

export const pagePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  generalTrading: "/general-trading",
  offshore: "/offshore-crude-oil-trading",
  logistics: "/logistics",
  contact: "/contact",
};

export function localizedPagePath(locale: SiteLocale, page: PageKey) {
  const path = pagePaths[page];
  if (locale === "en") return path;
  return path === "/" ? "/tr" : `/tr${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
