import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow } from "@/components/icons";

const areas = [
  { no: "01", title: "General Trading", copy: "Industrial equipment, spare parts, household equipment and construction materials.", href: "/general-trading" },
  { no: "02", title: "Crude Oil Trading", copy: "Physical crude oil and commodity trading.", href: "/crude-oil-trading" },
  { no: "03", title: "Logistics Services", copy: "International movement and coordination of goods.", href: "/logistics" },
];

export default function Home() {
  return (
    <>
      <Header overlay />
      <main>
        <section className="home-hero">
          <Image src="/images/diversified-trade-panorama.webp" fill priority sizes="100vw" alt="Contextual industrial panorama with trading goods, energy infrastructure and cargo logistics" />
          <div className="home-hero-shade" />
          <div className="home-hero-content shell">
            <p className="hero-kicker">Diversified trading company · Dubai, U.A.E.</p>
            <h1><span>Trade.</span><br /><span>Energy.</span><br /><span>Logistics.</span></h1>
            <div className="hero-bottom">
              <p>General trading, physical crude oil trading and international logistics coordination.</p>
              <a className="down-link" href="#introduction" aria-label="Explore RAITON">
                <Arrow direction="down" />
              </a>
            </div>
          </div>
        </section>

        <section className="home-intro shell" id="introduction">
          <p className="eyebrow">RAITON L.L.C-FZ</p>
          <h2>Commerce connects places, industries and essential goods.</h2>
          <div className="home-intro-copy">
            <p>Based in Dubai, RAITON operates across general trading, crude oil trading and logistics services.</p>
            <Link className="text-link" href="/about">Company overview <Arrow /></Link>
          </div>
        </section>

        <section className="areas shell" aria-labelledby="areas-heading">
          <div className="section-heading-row">
            <p className="eyebrow">Business areas</p>
            <h2 id="areas-heading">Three fields.<br />One commercial focus.</h2>
          </div>
          <div className="area-list">
            {areas.map((area) => (
              <Link className="area-row" href={area.href} key={area.no}>
                <span className="area-no">{area.no}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
                <span className="area-arrow"><Arrow /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="oil-feature">
          <figure className="oil-feature-image media-reveal">
            <Image src="/images/tanker-dusk.jpg" fill sizes="100vw" alt="Cargo vessel moored at an industrial port at dusk" />
          </figure>
          <div className="oil-feature-copy shell">
            <p className="eyebrow">Crude oil trading</p>
            <h2>Physical trading.<br />Clear commercial purpose.</h2>
            <p>RAITON participates in physical crude oil and commodity trading. The company’s role is commercial; the imagery shown is contextual.</p>
            <Link className="text-link text-link--light" href="/crude-oil-trading">Explore crude oil trading <Arrow /></Link>
          </div>
        </section>

        <section className="trading-feature shell">
          <div className="trading-copy">
            <p className="eyebrow">General trading</p>
            <h2>From industrial parts to construction materials.</h2>
            <p>RAITON’s general trading scope includes equipment, spare parts, household equipment and building materials.</p>
            <Link className="text-link" href="/general-trading">View categories <Arrow /></Link>
          </div>
          <div className="trading-images">
            <figure className="trade-image trade-image--large media-reveal">
              <Image src="/images/industrial-pipes.jpg" fill sizes="(max-width: 800px) 100vw, 42vw" alt="Industrial pipework and mechanical equipment" />
            </figure>
            <figure className="trade-image trade-image--small media-reveal">
              <Image src="/images/construction-materials.jpg" fill sizes="(max-width: 800px) 55vw, 20vw" alt="Construction materials in a working service area" />
            </figure>
          </div>
        </section>

        <section className="logistics-feature">
          <div className="logistics-image">
            <Image src="/images/container-ship.jpg" fill sizes="(max-width: 800px) 100vw, 58vw" alt="Containers aboard a vessel at a terminal" />
          </div>
          <div className="logistics-copy">
            <p className="eyebrow">Logistics services</p>
            <h2>Coordinating the movement of goods.</h2>
            <p>International logistics support for goods moving through ports and supply chains.</p>
            <Link className="text-link" href="/logistics">Logistics services <Arrow /></Link>
          </div>
        </section>

        <section className="dubai-strip shell">
          <p className="eyebrow">Company presence</p>
          <h2>Dubai<br /><span>25.1562° N</span><br />55.3003° E</h2>
          <p>Meydan Grandstand, Nad Al Sheba</p>
        </section>

        <ContactBand title="Talk to RAITON." />
      </main>
      <Footer />
    </>
  );
}
