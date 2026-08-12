import Link from "next/link";
import { Arrow } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div>
          <Link className="footer-wordmark" href="/">RAITON<span>.</span></Link>
          <p>RAITON L.L.C-FZ<br />Dubai, United Arab Emirates</p>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Direct contact</p>
          <a href="tel:+971501794245">+971 50 179 4245</a>
          <a href="https://wa.me/447516673000" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/general-trading">General Trading</Link>
          <Link href="/crude-oil-trading">Crude Oil Trading</Link>
          <Link href="/logistics">Logistics</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom shell">
        <p>© {new Date().getFullYear()} RAITON L.L.C-FZ</p>
        <p>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
      </div>
    </footer>
  );
}
