import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow } from "@/components/icons";
import { LocaleHtmlLang } from "@/components/locale-html-lang";
import { PageShell } from "@/components/page-shell";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";

type LocalizedPageProps = { locale: Locale };

export function HomePage({ locale }: LocalizedPageProps) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;
  const areaPaths = ["/general-trading", "/crude-oil-trading", "/logistics"] as const;

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <Header locale={locale} overlay />
      <main>
        <section className="home-hero">
          <Image src="/images/diversified-trade-panorama-hd.webp" fill priority quality={88} sizes="(max-width: 800px) 180vh, 100vw" alt={copy.heroAlt} />
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
            <Link className="text-link text-link--light" href={localizedHref(locale, "/crude-oil-trading")}>{copy.oilLink} <Arrow /></Link>
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

export function GeneralTradingPage({ locale }: LocalizedPageProps) {
  const copy = getDictionary(locale).generalTrading;
  return (
    <PageShell locale={locale} eyebrow={copy.eyebrow} title={<>{copy.title[0]}<br />{copy.title[1]}</>} intro={copy.intro} image="/images/industrial-pipes.jpg" imageAlt={copy.imageAlt}>
      <section className="category-section shell">
        <div className="category-heading"><p className="eyebrow">{copy.categoriesEyebrow}</p><h2>{copy.categoriesTitle[0]}<br />{copy.categoriesTitle[1]}</h2></div>
        <div className="category-list">
          {copy.categories.map(([title, categoryCopy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{categoryCopy}</p></article>)}
        </div>
      </section>
      <section className="split-statement">
        <figure><Image src="/images/construction-materials.jpg" fill sizes="(max-width: 800px) 100vw, 50vw" alt={copy.materialsAlt} /></figure>
        <div><p className="eyebrow">{copy.scope}</p><h2>{copy.scopeTitle}</h2><p>{copy.scopeCopy}</p></div>
      </section>
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
      <section className="process-strip shell">
        <p className="eyebrow">{copy.sequence}</p>
        <div className="process-line">{copy.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div>
      </section>
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
      <section className="logistics-detail shell">
        <figure><Image src="/images/port-terminal.jpg" fill sizes="(max-width: 800px) 100vw, 64vw" alt={copy.portAlt} /></figure>
        <div><p className="eyebrow">{copy.movement}</p><h2>{copy.movementTitle}</h2></div>
      </section>
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
            <a href="tel:+971501794245"><span>{copy.phone}</span><strong>+971 50 179 4245</strong><Arrow /></a>
            <a href="https://wa.me/447516673000" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+44 7516 673000</strong><Arrow /></a>
          </div>
        </section>
        <section className="contact-note shell"><p>{copy.note}</p></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
