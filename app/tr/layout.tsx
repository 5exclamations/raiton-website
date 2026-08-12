import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "RAITON L.L.C-FZ, Dubai merkezli; Genel Ticaret, Offshore Ham Petrol Ticareti ve Lojistik Hizmetleri alanlarında faaliyet gösteren bir şirkettir.",
  openGraph: {
    title: "RAITON | Ticaret, Enerji ve Lojistik",
    description: "Dubai merkezli Genel Ticaret, Offshore Ham Petrol Ticareti ve Lojistik Hizmetleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "RAITON",
  },
};

export default function TurkishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
