"use client";

/**
 * Sticky nav: wordmark · Solutions ▾ · Intelligence · About · Partnerships ·
 * "Request a Plot Assessment →" (quiet secondary — distinct, not loud).
 * The Solutions dropdown always shows two rich rows, never an empty panel.
 */

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Intelligence", href: "/intelligence" },
  { label: "Free Tools", href: "/tools" },
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
      className={`text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-ink ${
        active ? "text-ink" : "text-paper-muted"
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
    // iOS-safe scroll lock: fix the body in place instead of overflow:hidden.
    if (mobileOpen) {
      const y = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${y}px`;
      document.body.style.width = "100%";
    }
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
      const y = -parseInt(document.body.style.top || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, y);
      for (const el of inertTargets) el.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const solutionsActive = pathname.startsWith("/solutions");

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/70 bg-paper lg:bg-paper/85 lg:backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.01em] text-ink"
        >
          <Image src="/klisus-logo.png" alt="" width={26} height={26} />
          KliSus
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              ref={solutionsTriggerRef}
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
              className={`inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-ink ${
                solutionsActive ? "text-ink" : "text-paper-muted"
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
              <div className="absolute left-0 top-full mt-3 w-96 rounded-xl border border-paper-line/70 bg-paper p-2 shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.14)]">
                {SOLUTIONS_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href as never}
                    className="block rounded-lg p-4 transition-colors hover:bg-green-wash"
                  >
                    <span className="block text-[15px] font-semibold text-ink">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-paper-muted">
                      {item.desc}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/solutions"
                  className="block rounded-lg p-4 text-[14px] font-semibold text-green-ink transition-colors hover:bg-green-wash"
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
          <Button href="/request" className="shrink-0 whitespace-nowrap">
            Request a Plot Assessment
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          ref={mobileTriggerRef}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
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
        <div className="fixed inset-x-0 top-16 z-50 flex h-[calc(100svh-4rem)] flex-col overflow-y-auto overscroll-contain border-t border-paper-line bg-paper px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 lg:hidden">
          <p className="voice-label mb-3">Solutions</p>
          <div className="flex flex-col gap-4 border-l border-paper-line pl-4">
            {SOLUTIONS_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                active={pathname === item.href}
                onClick={() => setMobileOpen(false)}
                className="!text-[17px]"
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
                className="!text-[17px]"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-10">
            <Button href="/request" className="w-full justify-between" size="lg">
              Request a Plot Assessment
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
