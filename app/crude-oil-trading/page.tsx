import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Crude Oil Trading" };

export default function CrudeOilPage() {
  return (
    <PageShell
      eyebrow="Crude Oil Trading"
      title={<>Physical crude oil.<br />Commercial discipline.</>}
      intro="RAITON participates in physical crude oil and commodity trading."
      image="/images/tanker-dusk.jpg"
      imageAlt="Cargo vessel at an industrial port at dusk"
    >
      <section className="editorial-section shell editorial-section--dark">
        <p className="eyebrow">Trading activity</p>
        <div className="editorial-main">
          <h2>The business area is focused on physical crude oil trading.</h2>
          <div className="prose">
            <p>RAITON approaches crude oil as a traded commodity. No trading volumes, counterparties or geographic coverage are disclosed on this website.</p>
            <p>The photography provides industry context. It does not represent vessels, terminals or storage assets owned or operated by RAITON.</p>
          </div>
        </div>
      </section>
      <section className="process-strip shell">
        <p className="eyebrow">Commercial sequence</p>
        <div className="process-line">
          <div><span>01</span><h3>Requirement</h3></div>
          <div><span>02</span><h3>Trade</h3></div>
          <div><span>03</span><h3>Coordination</h3></div>
        </div>
      </section>
      <ContactBand title="Discuss crude oil trading." />
    </PageShell>
  );
}
