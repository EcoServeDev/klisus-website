import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const FLOW = ["Location", "History", "Evidence"];

/** THE PROBLEM */
export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          The problem
        </p>
        <h2
          className="font-display mt-5 max-w-[18ch] text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Can you evidence where your commodities come from?
        </h2>
        <div
          className="mt-6 max-w-[60ch] space-y-4 text-[16px] leading-relaxed text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          <p>
            EUDR due diligence requires businesses to collect information about
            relevant commodities, including the geolocation of the land where
            they were produced. Environmental and legal assessments may also
            require evidence from multiple sources.
          </p>
          <p>
            A location is the starting point. A credible review also requires
            historical context, documented methods, and traceable evidence.
          </p>
        </div>
        <div
          className="mt-9 flex flex-wrap items-center gap-3"
          style={{ "--i": 3 } as CSSProperties}
        >
          {FLOW.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="rounded-full bg-paper px-5 py-2 text-[15px] font-semibold text-ink shadow-[0_1px_2px_rgba(13,21,18,0.05),0_6px_18px_rgba(13,21,18,0.07)]">
                {step}
              </span>
              {i < FLOW.length - 1 ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-green-ink">
                  <path d="M3 8h10m0 0L8.8 3.8M13 8l-4.2 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
