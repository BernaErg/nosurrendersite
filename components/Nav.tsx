"use client";

import { useEffect, useState } from "react";
import { content } from "@/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-6"
      >
        <a href="#top" className="font-display text-sm font-bold uppercase tracking-widest text-ink">
          No Surrender
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {content.nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
