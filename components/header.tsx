"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getDictionary, localizedHref, type Locale } from "@/lib/i18n";
import { MenuIcon } from "./icons";

export function Header({ locale, overlay = false }: { locale: Locale; overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const dictionary = getDictionary(locale);
  const links = [
    [dictionary.common.nav.about, "/about"],
    [dictionary.common.nav.generalTrading, "/general-trading"],
    [dictionary.common.nav.offshore, "/crude-oil-trading"],
    [dictionary.common.nav.logistics, "/logistics"],
    [dictionary.common.nav.contact, "/contact"],
  ] as const;
  const englishPath = pathname === "/tr" ? "/" : pathname.startsWith("/tr/") ? pathname.slice(3) : pathname;
  const turkishPath = localizedHref("tr", englishPath);

  useEffect(() => {
    if (!open) return;

    const trigger = buttonRef.current;
    document.body.style.overflow = open ? "hidden" : "";
    const content = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    content.forEach((element) => {
      if (open) element.setAttribute("inert", "");
      else element.removeAttribute("inert");
    });

    const focusFirstMenuLink = () => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const focusFrame = window.requestAnimationFrame(focusFirstMenuLink);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !headerRef.current) return;
      const focusable = Array.from(headerRef.current.querySelectorAll<HTMLElement>('a[href]:not([tabindex="-1"]), button:not([disabled])'))
        .filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      content.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`site-header${overlay ? " site-header--overlay" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link className="header-logo" href={localizedHref(locale, "/")} aria-label={dictionary.common.aria.home} onClick={() => setOpen(false)}>
          <span className="header-logo-symbol" aria-hidden="true" />
          <span className="header-logo-wordmark" aria-hidden="true" />
        </Link>
        <div className="header-actions">
          <nav className="desktop-nav" aria-label={dictionary.common.aria.primaryNav}>
            {links.map(([label, href]) => <Link key={href} href={localizedHref(locale, href)}>{label}</Link>)}
          </nav>
          <nav className="language-switcher" aria-label={dictionary.common.aria.language}>
            <Link href={englishPath} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href={turkishPath} hrefLang="tr" lang="tr" aria-current={locale === "tr" ? "page" : undefined}>TR</Link>
          </nav>
          <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? dictionary.common.aria.closeMenu : dictionary.common.aria.openMenu} onClick={() => setOpen(!open)}>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
      <div ref={menuRef} className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
        <nav aria-label={dictionary.common.aria.mobileNav}>
          {links.map(([label, href], index) => (
            <Link key={href} href={localizedHref(locale, href)} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <p>{dictionary.common.location}</p>
      </div>
    </header>
  );
}
