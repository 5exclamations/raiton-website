import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/contact-band";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Logistics" };

export default function LogisticsPage() {
  return (
    <PageShell
      eyebrow="Logistics Services"
      title={<>Goods in motion.<br />Routes coordinated.</>}
      intro="International logistics and coordination for the movement of goods."
      image="/images/container-ship.jpg"
      imageAlt="Containers aboard a vessel at a terminal"
    >
      <section className="editorial-section shell">
        <p className="eyebrow">Logistics coordination</p>
        <div className="editorial-main">
          <h2>Supporting international movement through connected supply chains.</h2>
          <div className="prose">
            <p>RAITON’s logistics services cover the coordination of goods moving between commercial points.</p>
            <p>The service is described without claiming ownership of ships, trucks, warehouses or terminals.</p>
          </div>
        </div>
      </section>
      <section className="logistics-detail shell">
        <figure><Image src="/images/port-terminal.jpg" fill sizes="(max-width: 800px) 100vw, 64vw" alt="Working port with cargo vessels" /></figure>
        <div><p className="eyebrow">International movement</p><h2>Coordination across the journey of goods.</h2></div>
      </section>
      <ContactBand title="Discuss a logistics requirement." />
    </PageShell>
  );
}
