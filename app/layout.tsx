import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/instrument-sans";
import { OPEN_GRAPH_IMAGE_PATH, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RAITON | Trading, Energy & Logistics",
    template: "%s | RAITON",
  },
  description:
    "RAITON L.L.C-FZ is a Dubai-based company active in General Trading, Offshore Crude Oil Trading and Logistics Services.",
  openGraph: {
    title: "RAITON | Trading, Energy & Logistics",
    description:
      "General Trading, Offshore Crude Oil Trading and Logistics Services from Dubai, UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "RAITON",
    images: [{ url: OPEN_GRAPH_IMAGE_PATH, width: 1200, height: 630, alt: "RAITON" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAITON | Trading, Energy & Logistics",
    description: "General Trading, Offshore Crude Oil Trading and Logistics Services from Dubai, UAE.",
    images: [OPEN_GRAPH_IMAGE_PATH],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-raiton-locale") === "tr" ? "tr" : "en";
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
