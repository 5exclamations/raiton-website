import type { ReactNode } from "react";
import Image from "next/image";
import { Header } from "./header";
import { Footer } from "./footer";

type PageShellProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, intro, image, imageAlt, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero shell">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-intro">{intro}</p>
        </section>
        <figure className="page-hero-image media-reveal">
          <Image src={image} fill priority sizes="100vw" alt={imageAlt} />
        </figure>
        {children}
      </main>
      <Footer />
    </>
  );
}
