import type { Metadata } from "next";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RAITON | Trading, Energy & Logistics",
    template: "%s | RAITON",
  },
  description:
    "RAITON L.L.C-FZ is a Dubai-based company active in general trading, crude oil trading and logistics services.",
  openGraph: {
    title: "RAITON | Trading, Energy & Logistics",
    description:
      "General trading, crude oil trading and logistics services from Dubai, UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "RAITON",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
