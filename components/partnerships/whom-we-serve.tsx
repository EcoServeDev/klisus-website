import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const AUDIENCES = [
  {
    label: "Businesses",
    body: "Environmental risk, supply-chain due diligence, and climate and nature claims.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 21h16M6 21V8l6-4 6 4v13M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    label: "Institutions",
    body: "Regulatory, policy, operational, and strategic environmental intelligence.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 9l9-5 9 5M5 9v10m14-10v10M3 21h18M9 13v4m6-4v4" />
      </svg>
    ),
  },
  {
    label: "Investors",
    body: "Environmental factors, due diligence, and investment research.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 19h16M6 16l4-5 3 3 5-7" />
      </svg>
    ),
  },
];

export default function WhomWeServe() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Whom we serve
        </p>
        <h2
          className="font-display mt-5 text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Built for decision-makers.
        </h2>
      </Reveal>
      <Reveal className="mt-12 grid gap-10 sm:grid-cols-3">
        {AUDIENCES.map((a, i) => (
          <div key={a.label} style={{ "--i": i } as CSSProperties}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-wash text-green-ink">
              {a.icon}
            </span>
            <h3 className="mt-5 text-[17px] font-semibold text-ink">{a.label}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-paper-muted">{a.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
