import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero shell">
          <p className="eyebrow">Contact RAITON</p>
          <h1>Let’s discuss<br />the requirement.</h1>
        </section>
        <section className="contact-details shell">
          <div className="contact-location">
            <p className="eyebrow">Dubai office</p>
            <address>Meydan Grandstand, 6th Floor<br />Meydan Road<br />Nad Al Sheba<br />Dubai, U.A.E.</address>
          </div>
          <div className="contact-actions">
            <a href="tel:+971501794245"><span>Phone</span><strong>+971 50 179 4245</strong><Arrow /></a>
            <a href="https://wa.me/447516673000" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+44 7516 673000</strong><Arrow /></a>
          </div>
        </section>
        <section className="contact-note shell">
          <p>No email address or social media accounts have been supplied for publication.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
