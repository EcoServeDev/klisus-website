import type { CSSProperties } from "react";
import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

const MODULES = [
  {
    title: "Intelligence",
    line: "Analysis · Risk Assessment · Change Detection · Research",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </svg>
    ),
  },
  {
    title: "Evidence",
    line: "Land Evidence · Due-Diligence Support · Traceability",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Economic Decisions",
    line: "Business · Investment · Regulation · Markets",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 19h16M6 16V9m6 7V5m6 11v-6" />
      </svg>
    ),
  },
];

/** 02 — WHAT WE DO */
export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="The intelligence layer between environmental change and economic decisions."
        lede="KliSus transforms complex environmental information into structured intelligence and traceable evidence for business, investment, regulatory, and market decisions."
      />
      <div className="stagger mt-14 grid gap-6 md:grid-cols-3">
        {MODULES.map((m, i) => (
          <Card key={m.title} style={{ "--i": i } as CSSProperties}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-wash text-green-ink">
              {m.icon}
            </span>
            <h3 className="mt-5 text-[20px] font-bold text-ink">{m.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-paper-muted">{m.line}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
