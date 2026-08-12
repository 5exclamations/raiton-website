import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
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
