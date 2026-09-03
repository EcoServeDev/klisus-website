import type { CSSProperties } from "react";
import ChangeTimeline from "@/components/visuals/change-timeline";
import Reveal from "@/components/visuals/reveal";

const STEPS = [
  {
    n: "1",
    title: "Locate",
    body: "Review the submitted production-plot coordinates or boundaries.",
  },
  {
    n: "2",
    title: "Analyse",
    body: "Assess historical satellite observations, land-use patterns, vegetation indicators, and relevant forest-cover change signals.",
  },
  {
    n: "3",
    title: "Document",
    body: "Generate a structured evidence record with the assessed area, time period, data sources, methodology, and analytical findings.",
  },
] as const;

/** THE KLISUS APPROACH: three steps as soft cards, the change timeline below. */
export default function ApproachSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-20 sm:pt-24">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            The KliSus approach
          </p>
          <h2
            className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-ink sm:text-[42px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            From coordinates to evidence.
          </h2>
          <p
            className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            KliSus transforms a production plot into a structured land evidence
            record using satellite observation and geospatial analysis.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              style={{ "--i": i } as CSSProperties}
              className="rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-wash text-[17px] font-semibold text-green-ink">
                {step.n}
              </span>
              <h3 className="mt-5 text-[18px] font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper-muted">{step.body}</p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* No overflow-hidden on this wrapper — the timeline's sticky stage
          depends on unclipped ancestors. */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ChangeTimeline />
      </div>
    </section>
  );
}
