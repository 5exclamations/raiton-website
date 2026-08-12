import Link from "next/link";
import { Arrow } from "./icons";

export function ContactBand({ title = "Start a conversation." }: { title?: string }) {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <p className="eyebrow">Contact RAITON</p>
        <h2>{title}</h2>
        <Link className="circle-link" href="/contact" aria-label="Contact RAITON">
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
