import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About RAITON"
      title={<>Commercial focus.<br />Dubai base.</>}
      intro="RAITON L.L.C-FZ is a Dubai-based company active in trading and logistics."
      image="/images/port-terminal.jpg"
      imageAlt="Cargo vessels and containers at a port"
    >
      <section className="editorial-section shell">
        <p className="eyebrow">Company</p>
        <div className="editorial-main">
          <h2>RAITON works across physical goods, energy commodities and the coordination of international cargo.</h2>
          <div className="prose">
            <p>The company’s business is organised around general trading, offshore crude oil trading and logistics services.</p>
            <p>RAITON is based in Dubai, United Arab Emirates. No additional offices or owned infrastructure are represented on this website.</p>
          </div>
        </div>
      </section>
      <section className="principles shell">
        <p className="eyebrow">Business structure</p>
        <div className="principle-list">
          <div><span>01</span><h3>General Trading</h3><p>Equipment, parts, household equipment and construction materials.</p></div>
          <div><span>02</span><h3>Crude Oil Trading</h3><p>Physical crude oil and commodity trading.</p></div>
          <div><span>03</span><h3>Logistics Services</h3><p>International movement and coordination of goods.</p></div>
        </div>
      </section>
      <ContactBand />
    </PageShell>
  );
}
