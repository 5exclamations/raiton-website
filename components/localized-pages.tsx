import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow } from "@/components/icons";
import { LocaleHtmlLang } from "@/components/locale-html-lang";
import { PageShell } from "@/components/page-shell";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";
import { pagePaths, PHONE_HREF, PHONE_NUMBER, PUBLIC_EMAIL, WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

type LocalizedPageProps = { locale: Locale };

export function HomePage({ locale }: LocalizedPageProps) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;
  const areaPaths = [pagePaths.generalTrading, pagePaths.offshore, pagePaths.logistics] as const;

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <Header locale={locale} overlay />
      <main>
        <section className="home-hero">
          <Image src="/images/diversified-trade-panorama-hd-truck-fix.webp" fill priority quality={88} sizes="(max-width: 800px) 180vh, 100vw" alt={copy.heroAlt} />
          <div className="home-hero-shade" />
          <div className="home-hero-content shell">
            <p className="hero-kicker">{copy.heroKicker}</p>
            <h1>{copy.heroTitle.map((line) => <span key={line}>{line}<br /></span>)}</h1>
            <div className="hero-bottom">
              <p>{copy.heroSupport}</p>
              <a className="down-link" href="#introduction" aria-label={dictionary.common.aria.explore}>
                <Arrow direction="down" />
              </a>
            </div>
          </div>
        </section>

        <section className="home-intro shell" id="introduction">
          <p className="eyebrow">RAITON L.L.C-FZ</p>
          <h2>{copy.introTitle}</h2>
          <div className="home-intro-copy">
            <p>{copy.introCopy}</p>
            <Link className="text-link" href={localizedHref(locale, "/about")}>{copy.companyOverview} <Arrow /></Link>
          </div>
        </section>

        <section className="areas shell" aria-labelledby="areas-heading">
          <div className="section-heading-row">
            <p className="eyebrow">{copy.areasEyebrow}</p>
            <h2 id="areas-heading">{copy.areasTitle[0]}<br />{copy.areasTitle[1]}</h2>
          </div>
          <div className="area-list">
            {copy.areas.map(([title, areaCopy], index) => (
              <Link className="area-row" href={localizedHref(locale, areaPaths[index])} key={title}>
                <span className="area-no">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{areaCopy}</p>
                <span className="area-arrow"><Arrow /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="oil-feature" data-context={copy.industryContext}>
          <figure className="oil-feature-image media-reveal">
            <Image src="/images/tanker-dusk.jpg" fill sizes="100vw" alt={copy.oilAlt} />
          </figure>
          <div className="oil-feature-copy shell">
            <p className="eyebrow">{copy.oilEyebrow}</p>
            <h2>{copy.oilTitle[0]}<br />{copy.oilTitle[1]}</h2>
            <p>{copy.oilCopy}</p>
            <Link className="text-link text-link--light" href={localizedHref(locale, pagePaths.offshore)}>{copy.oilLink} <Arrow /></Link>
          </div>
        </section>

        <section className="trading-feature shell">
          <div className="trading-copy">
            <p className="eyebrow">{copy.generalEyebrow}</p>
            <h2>{copy.generalTitle}</h2>
            <p>{copy.generalCopy}</p>
            <Link className="text-link" href={localizedHref(locale, "/general-trading")}>{copy.generalLink} <Arrow /></Link>
          </div>
          <div className="trading-images">
            <figure className="trade-image trade-image--large media-reveal">
              <Image src="/images/industrial-pipes.jpg" fill sizes="(max-width: 800px) 100vw, 42vw" alt={copy.pipesAlt} />
            </figure>
            <figure className="trade-image trade-image--small media-reveal">
              <Image src="/images/construction-materials.jpg" fill sizes="(max-width: 800px) 55vw, 20vw" alt={copy.materialsAlt} />
            </figure>
          </div>
        </section>

        <section className="logistics-feature">
          <div className="logistics-image">
            <Image src="/images/container-ship.jpg" fill sizes="(max-width: 800px) 100vw, 58vw" alt={copy.logisticsAlt} />
          </div>
          <div className="logistics-copy">
            <p className="eyebrow">{copy.logisticsEyebrow}</p>
            <h2>{copy.logisticsTitle}</h2>
            <p>{copy.logisticsCopy}</p>
            <Link className="text-link" href={localizedHref(locale, "/logistics")}>{copy.logisticsLink} <Arrow /></Link>
          </div>
        </section>

        <section className="dubai-strip shell">
          <p className="eyebrow">{copy.presence}</p>
          <h2>{copy.dubai[0]}<br />{copy.dubai[1]}</h2>
          <address className="dubai-address">{copy.address.map((line) => <span key={line}>{line}<br /></span>)}</address>
        </section>

        <ContactBand locale={locale} title={copy.contactTitle} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function AboutPage({ locale }: LocalizedPageProps) {
  const copy = getDictionary(locale).about;
  return (
    <PageShell locale={locale} eyebrow={copy.eyebrow} title={<>{copy.title[0]}<br />{copy.title[1]}</>} intro={copy.intro} image="/images/port-terminal.jpg" imageAlt={copy.imageAlt}>
      <section className="editorial-section shell">
        <p className="eyebrow">{copy.company}</p>
        <div className="editorial-main">
          <h2>{copy.statement}</h2>
          <div className="prose">{copy.prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>
      <section className="principles shell">
        <p className="eyebrow">{copy.structure}</p>
        <div className="principle-list">
          {copy.areas.map(([title, areaCopy], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{areaCopy}</p></div>)}
        </div>
      </section>
      <ContactBand locale={locale} />
    </PageShell>
  );
}

type ListItem = readonly [string, string];

function NumberedList({ items }: { items: readonly ListItem[] }) {
  return (
    <div className="category-list">
      {items.map(([title, itemCopy], index) => (
        <article key={title}>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{itemCopy}</p>
        </article>
      ))}
    </div>
  );
}

function SpecSection({ eyebrow, title, items }: { eyebrow: string; title: readonly string[]; items: readonly ListItem[] }) {
  return (
    <section className="spec-section shell">
      <div className="spec-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title[0]}<br />{title[1]}</h2>
      </div>
      <div className="spec-grid">
        {items.map(([itemTitle, itemCopy], index) => (
          <article key={itemTitle}>
            <span>0{index + 1}</span>
            <h3>{itemTitle}</h3>
            <p>{itemCopy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StandardsBand({ eyebrow, title, copy, items }: { eyebrow: string; title: string; copy: string; items: readonly string[] }) {
  return (
    <section className="standards">
      <div className="shell standards-inner">
        <p className="eyebrow">{eyebrow}</p>
        <div className="standards-main">
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <ul className="term-list">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function GeneralTradingPage({ locale }: LocalizedPageProps) {
  const copy = getDictionary(locale).generalTrading;
  return (
    <PageShell locale={locale} eyebrow={copy.eyebrow} title={<>{copy.title[0]}<br />{copy.title[1]}</>} intro={copy.intro} image="/images/industrial-pipes.jpg" imageAlt={copy.imageAlt}>
      <section className="editorial-section shell">
        <p className="eyebrow">{copy.activity}</p>
        <div className="editorial-main"><h2>{copy.statement}</h2><div className="prose">{copy.prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
      </section>
      <section className="category-section shell">
        <div className="category-heading"><p className="eyebrow">{copy.categoriesEyebrow}</p><h2>{copy.categoriesTitle[0]}<br />{copy.categoriesTitle[1]}</h2></div>
        <NumberedList items={copy.categories} />
      </section>
      <section className="split-statement">
        <figure><Image src="/images/construction-materials.jpg" fill sizes="(max-width: 800px) 100vw, 50vw" alt={copy.materialsAlt} /></figure>
        <div><p className="eyebrow">{copy.scope}</p><h2>{copy.scopeTitle}</h2><p>{copy.scopeCopy}</p></div>
      </section>
      <SpecSection eyebrow={copy.approachEyebrow} title={copy.approachTitle} items={copy.approach} />
      <StandardsBand eyebrow={copy.standardsEyebrow} title={copy.standardsTitle} copy={copy.standardsCopy} items={copy.standardsList} />
      <ContactBand locale={locale} title={copy.contactTitle} />
    </PageShell>
  );
}

export function OffshorePage({ locale }: LocalizedPageProps) {
  const copy = getDictionary(locale).offshore;
  return (
    <PageShell locale={locale} eyebrow={copy.eyebrow} title={<>{copy.title[0]}<br />{copy.title[1]}</>} intro={copy.intro} image="/images/tanker-dusk.jpg" imageAlt={copy.imageAlt}>
      <section className="editorial-section shell editorial-section--dark">
        <p className="eyebrow">{copy.activity}</p>
        <div className="editorial-main"><h2>{copy.statement}</h2><div className="prose">{copy.prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
      </section>
      <SpecSection eyebrow={copy.scopeEyebrow} title={copy.scopeTitle} items={copy.scopeItems} />
      <section className="process-strip shell">
        <p className="eyebrow">{copy.sequence}</p>
        <div className="process-line process-line--four">{copy.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div>
      </section>
      <section className="split-statement split-statement--reverse">
        <figure><Image src="/images/industrial-pipes.jpg" fill sizes="(max-width: 800px) 100vw, 50vw" alt={copy.counterpartiesAlt} /></figure>
        <div>
          <p className="eyebrow">{copy.counterpartiesEyebrow}</p>
          <h2>{copy.counterpartiesTitle}</h2>
          <p>{copy.counterpartiesCopy}</p>
          <ul className="term-list">{copy.counterpartiesList.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <StandardsBand eyebrow={copy.standardsEyebrow} title={copy.standardsTitle} copy={copy.standardsCopy} items={copy.standardsList} />
      <ContactBand locale={locale} title={copy.contactTitle} />
    </PageShell>
  );
}

export function LogisticsPage({ locale }: LocalizedPageProps) {
  const copy = getDictionary(locale).logistics;
  return (
    <PageShell locale={locale} eyebrow={copy.eyebrow} title={<>{copy.title[0]}<br />{copy.title[1]}</>} intro={copy.intro} image="/images/container-ship.jpg" imageAlt={copy.imageAlt}>
      <section className="editorial-section shell">
        <p className="eyebrow">{copy.coordination}</p>
        <div className="editorial-main"><h2>{copy.statement}</h2><div className="prose">{copy.prose.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
      </section>
      <section className="category-section shell">
        <div className="category-heading"><p className="eyebrow">{copy.modesEyebrow}</p><h2>{copy.modesTitle[0]}<br />{copy.modesTitle[1]}</h2></div>
        <NumberedList items={copy.modes} />
      </section>
      <section className="logistics-detail shell">
        <figure><Image src="/images/port-terminal.jpg" fill sizes="(max-width: 800px) 100vw, 64vw" alt={copy.portAlt} /></figure>
        <div><p className="eyebrow">{copy.movement}</p><h2>{copy.movementTitle}</h2></div>
      </section>
      <SpecSection eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} items={copy.services} />
      <StandardsBand eyebrow={copy.standardsEyebrow} title={copy.standardsTitle} copy={copy.standardsCopy} items={copy.standardsList} />
      <ContactBand locale={locale} title={copy.contactTitle} />
    </PageShell>
  );
}

export function ContactPage({ locale }: LocalizedPageProps) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.contact;
  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <Header locale={locale} />
      <main className="contact-page">
        <section className="contact-hero shell"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title[0]}<br />{copy.title[1]}</h1></section>
        <section className="contact-details shell">
          <div className="contact-location"><p className="eyebrow">{copy.office}</p><address>{copy.address.map((line) => <span key={line}>{line}<br /></span>)}</address></div>
          <div className="contact-actions">
            <a href={PHONE_HREF}><span>{copy.phone}</span><strong>{PHONE_NUMBER}</strong><Arrow /></a>
            <a className="contact-email" href={`mailto:${PUBLIC_EMAIL}`}><span>{copy.email}</span><strong>{PUBLIC_EMAIL}</strong><Arrow /></a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{WHATSAPP_NUMBER}</strong><Arrow /></a>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
