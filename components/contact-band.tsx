import Link from "next/link";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";
import { Arrow } from "./icons";

export function ContactBand({ locale, title }: { locale: Locale; title?: string }) {
  const dictionary = getDictionary(locale);
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <p className="eyebrow">{dictionary.common.contactEyebrow}</p>
        <h2>{title ?? dictionary.common.contactDefault}</h2>
        <Link className="circle-link" href={localizedHref(locale, "/contact")} aria-label={dictionary.common.aria.contact}>
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
