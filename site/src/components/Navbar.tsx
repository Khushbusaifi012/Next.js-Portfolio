"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] shadow-[0_1px_0_var(--border)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--text)] transition-opacity duration-200 hover:opacity-90 sm:text-base"
          onClick={() => setOpen(false)}
        >
          BK<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--elevated)] hover:text-[var(--text)]"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="ml-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-foreground)] transition-[filter] hover:brightness-110"
          >
            Hire
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-[var(--text)] hover:bg-[var(--elevated)]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="mt-2 rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-medium text-[var(--accent-foreground)]"
              onClick={() => setOpen(false)}
            >
              Email {personal.name.split(" ")[0]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
