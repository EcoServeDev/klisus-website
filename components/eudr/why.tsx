import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const PILLARS = [
  {
    label: "Plot-level",
    body: "Analysis tied to defined production areas.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Historical",
    body: "Assessment of land-use change across relevant time periods.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    label: "Data-driven",
    body: "Earth-observation and geospatial datasets.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 19h16M6 16V9m6 7V5m6 11v-6" />
      </svg>
    ),
  },
  {
    label: "Traceable",
    body: "Structured outputs with documented data sources and methodology.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v4h4M9 12h6M9 16h6" />
      </svg>
    ),
  },
] as const;

/** WHY KLISUS: four-up icon-tile trust row. */
export default function WhySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Why KliSus
        </p>
        <h2
          className="font-display mt-5 text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Built for evidence.
        </h2>
      </Reveal>
      <Reveal className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <div key={pillar.label} style={{ "--i": i } as CSSProperties}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-wash text-green-ink">
              {pillar.icon}
            </span>
            <h3 className="mt-4 text-[16px] font-semibold text-ink">{pillar.label}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-paper-muted">{pillar.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
