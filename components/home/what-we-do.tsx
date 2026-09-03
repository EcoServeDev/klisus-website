import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

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

/** Full-viewport sand panel: headline left, module cards revealing right. */
export default function WhatWeDo() {
  return (
    <section className="stack-panel bg-paper-surface">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            What we do
          </p>
          <h2
            className="font-display mt-5 max-w-[16ch] text-[34px] font-medium text-ink sm:text-[44px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            The intelligence layer between environmental change and economic
            decisions.
          </h2>
          <p
            className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            KliSus transforms complex environmental information into structured
            intelligence and traceable evidence for business, investment,
            regulatory, and market decisions.
          </p>
        </Reveal>

        <Reveal className="grid gap-5">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              style={{ "--i": i } as CSSProperties}
              className="flex items-start gap-5 rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
            >
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-green-wash text-green-ink">
                {m.icon}
              </span>
              <span>
                <h3 className="text-[20px] font-semibold text-ink">{m.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-paper-muted">{m.line}</p>
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
