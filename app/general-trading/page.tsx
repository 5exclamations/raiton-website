import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/contact-band";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "General Trading" };

const categories = [
  ["01", "Industrial equipment", "Equipment for industrial and commercial requirements."],
  ["02", "Spare parts", "Parts sourced within the scope of general trading."],
  ["03", "Household equipment", "Household equipment and related goods."],
  ["04", "Construction materials", "Materials for construction and building activity."],
];

export default function GeneralTradingPage() {
  return (
    <PageShell
      eyebrow="General Trading"
      title={<>Goods for industry<br />and commerce.</>}
      intro="RAITON trades across defined product categories, from industrial equipment to construction materials."
      image="/images/industrial-pipes.jpg"
      imageAlt="Industrial mechanical equipment and pipework"
    >
      <section className="category-section shell">
        <div className="category-heading">
          <p className="eyebrow">Trading categories</p>
          <h2>A broad remit,<br />presented clearly.</h2>
        </div>
        <div className="category-list">
          {categories.map(([no, title, copy]) => (
            <article key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="split-statement">
        <figure><Image src="/images/construction-materials.jpg" fill sizes="(max-width: 800px) 100vw, 50vw" alt="Building materials in an active service area" /></figure>
        <div><p className="eyebrow">Scope</p><h2>Commercial supply across multiple product groups.</h2><p>The website does not present an inventory or imply that goods are held in RAITON-owned facilities.</p></div>
      </section>
      <ContactBand title="Discuss a trading requirement." />
    </PageShell>
  );
}
