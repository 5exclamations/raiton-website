import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { NotFoundPage } from "@/components/not-found-page";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-raiton-locale") === "tr" ? "tr" : "en";
  return {
    title: locale === "tr" ? "Sayfa bulunamadı | RAITON" : "Page not found | RAITON",
  };
}

export default async function GlobalNotFound() {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-raiton-locale") === "tr" ? "tr" : "en";

  return (
    <html lang={locale}>
      <body>
        <NotFoundPage locale={locale} />
      </body>
    </html>
  );
}
