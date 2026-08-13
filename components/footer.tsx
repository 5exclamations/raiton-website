import Link from "next/link";
import Image from "next/image";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";
import { pagePaths, PHONE_HREF, PHONE_NUMBER, PUBLIC_EMAIL, WHATSAPP_HREF } from "@/lib/site";
import { Arrow } from "./icons";

export function Footer({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const links = [
    [dictionary.common.nav.about, "/about"],
    [dictionary.common.nav.generalTrading, "/general-trading"],
    [dictionary.common.nav.offshore, pagePaths.offshore],
    [dictionary.common.nav.logistics, "/logistics"],
    [dictionary.common.nav.contact, "/contact"],
  ] as const;

  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div>
          <Link className="footer-wordmark" href={localizedHref(locale, "/")} aria-label={dictionary.common.aria.home}>
            <Image src="/brand/raiton-logo-light.svg" alt="RAITON" width={1128} height={1278} />
          </Link>
          <p>RAITON L.L.C-FZ<br />{dictionary.common.location}</p>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">{dictionary.common.directContact}</p>
          <a className="footer-phone" href={PHONE_HREF}>{PHONE_NUMBER}</a>
          <a className="footer-email" href={`mailto:${PUBLIC_EMAIL}`}>{PUBLIC_EMAIL}</a>
          <a className="footer-whatsapp" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
        </div>
        <nav className="footer-nav" aria-label={dictionary.common.aria.footerNav}>
          {links.map(([label, href]) => <Link key={href} href={localizedHref(locale, href)}>{label}</Link>)}
        </nav>
      </div>
      <div className="footer-bottom shell">
        <p>© {new Date().getFullYear()} RAITON L.L.C-FZ</p>
        <p>{dictionary.common.addressInline}</p>
      </div>
    </footer>
  );
}
