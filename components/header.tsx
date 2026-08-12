"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "./icons";

const links = [
  ["About", "/about"],
  ["General Trading", "/general-trading"],
  ["Crude Oil", "/crude-oil-trading"],
  ["Logistics", "/logistics"],
  ["Contact", "/contact"],
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const content = Array.from(document.body.children).filter((element) => element.tagName !== "SCRIPT" && !element.querySelector("header.site-header"));
    content.forEach((element) => {
      if (open) element.setAttribute("inert", "");
      else element.removeAttribute("inert");
    });

    if (open) menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = [buttonRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLAnchorElement>('a[href]:not([tabindex="-1"])'))].filter(Boolean) as HTMLElement[];
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
    };
  }, [open]);

  return (
    <header className={`site-header${overlay ? " site-header--overlay" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="RAITON home" onClick={() => setOpen(false)}>
          RAITON<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
      <div ref={menuRef} className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link key={href} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <p>Dubai, United Arab Emirates</p>
      </div>
    </header>
  );
}
