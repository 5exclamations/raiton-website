import type { Metadata } from "next";
import { OPEN_GRAPH_IMAGE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  description: "RAITON L.L.C-FZ, Dubai merkezli; Genel Ticaret, Offshore Ham Petrol Ticareti ve Lojistik Hizmetleri alanlarında faaliyet gösteren bir şirkettir.",
  openGraph: {
    title: "RAITON | Ticaret, Enerji ve Lojistik",
    description: "Dubai merkezli Genel Ticaret, Offshore Ham Petrol Ticareti ve Lojistik Hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "RAITON",
    images: [{ url: OPEN_GRAPH_IMAGE_PATH, width: 1200, height: 630, alt: "RAITON" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAITON | Ticaret, Enerji ve Lojistik",
    description: "Dubai merkezli Genel Ticaret, Offshore Ham Petrol Ticareti ve Lojistik Hizmetleri.",
    images: [OPEN_GRAPH_IMAGE_PATH],
  },
};

export default function TurkishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
