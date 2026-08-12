import Image from "next/image";
import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";
import { Arrow } from "./icons";
import { LocaleHtmlLang } from "./locale-html-lang";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="not-found-page">
      <LocaleHtmlLang locale={locale} />
      <Header locale={locale} />
      <main className="not-found-main shell">
        <p className="not-found-code">404</p>
        <div className="not-found-copy">
          <h1>{dictionary.common.notFoundTitle}</h1>
          <p>{dictionary.common.notFoundCopy}</p>
          <Link className="text-link" href={localizedHref(locale, "/")} aria-label={dictionary.common.aria.backHome}>
            {dictionary.common.notFoundHome} <Arrow />
          </Link>
        </div>
        <div className="not-found-mark" aria-hidden="true">
          <Image src="/brand/raiton-symbol.svg" alt="" width={872} height={960} />
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
