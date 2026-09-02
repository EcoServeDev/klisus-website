"use client";

/**
 * Sticky nav: wordmark · Solutions ▾ · Intelligence · About · Partnerships ·
 * "Request a Plot Assessment →" (quiet secondary — distinct, not loud).
 * The Solutions dropdown always shows two rich rows, never an empty panel.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Intelligence", href: "/intelligence" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
];

const SOLUTIONS_ITEMS = [
  {
    label: "EUDR Land Evidence",
    href: "/solutions/eudr-land-evidence",
    desc: "Plot-level satellite and geospatial analysis to support EUDR due diligence.",
  },
  {
    label: "Climate Intelligence",
    href: "/intelligence",
    desc: "Environmental risk, land, nature and economic decision support.",
  },
];

function NavLink({
  href,
  active,
  onClick,
  children,
  className = "",
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href as never}
      onClick={onClick}
      className={`text-[14px] transition-colors hover:text-cream ${
        active
          ? "text-cream underline decoration-ndvi-green underline-offset-8"
          : "text-muted"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSolutionsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!solutionsOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setSolutionsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSolutionsOpen(false);
        solutionsTriggerRef.current?.focus();
      }
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!dropdownRef.current?.contains(e.relatedTarget as Node)) setSolutionsOpen(false);
    };
    const panel = dropdownRef.current;
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    panel?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      panel?.removeEventListener("focusout", onFocusOut);
    };
  }, [solutionsOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    // Keep scroll-locked background content out of the tab order while the
    // sheet is open (the sheet lives inside <header>, which stays live).
    const inertTargets = document.querySelectorAll("main, footer");
    for (const el of inertTargets) el.toggleAttribute("inert", mobileOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      for (const el of inertTargets) el.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const solutionsActive = pathname.startsWith("/solutions");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-forest-black/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-cream"
        >
          KliSus
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              ref={solutionsTriggerRef}
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
              className={`inline-flex items-center gap-1 text-[14px] transition-colors hover:text-cream ${
                solutionsActive
                  ? "text-cream underline decoration-ndvi-green underline-offset-8"
                  : "text-muted"
              }`}
            >
              Solutions
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path
                  d="M2 3.5 5 6.5 8 3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            {solutionsOpen ? (
              <div className="absolute left-0 top-full mt-3 w-80 rounded-sm border border-line bg-surface-2 p-2 shadow-2xl">
                {SOLUTIONS_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href as never}
                    className="block rounded-sm p-3 transition-colors hover:bg-surface-1"
                  >
                    <span className="block text-[14px] font-medium text-cream">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[12px] leading-relaxed text-muted">
                      {item.desc}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/solutions"
                  className="block border-t border-line p-3 text-[12px] text-ndvi-green transition-colors hover:text-cream"
                >
                  All solutions →
                </Link>
              </div>
            ) : null}
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button href="/plot-check" variant="secondary">
            Request a Plot Assessment →
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          ref={mobileTriggerRef}
          className="p-2 text-cream md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {mobileOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto border-t border-line bg-forest-black px-6 py-8 md:hidden">
          <p className="eyebrow mb-3">Solutions</p>
          <div className="flex flex-col gap-4 border-l border-line pl-4">
            {SOLUTIONS_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                active={pathname === item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-10">
            <Button href="/plot-check" className="w-full" size="lg">
              Request a Plot Assessment →
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
