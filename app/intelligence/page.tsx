import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import CTABand from "@/components/ui/cta-band";
import Reveal from "@/components/visuals/reveal";

export const metadata: Metadata = {
  title: "KliSus Intelligence",
  description: "Research and analysis at the intersection of climate, land, nature, and economics.",
};

const CHANNELS = ["Research & Insights", "Reports", "Resources", "Substack"];

/** 04 — EXPLORE. Three coming-soon channels + Substack (also pre-launch). */
const EXPLORE_CHANNELS: { title: string; body: string; soon: boolean }[] = [
  {
    title: "Research & Insights",
    body: "Original research, analysis, and perspectives on climate, land, nature, and economics.",
    soon: true,
  },
  {
    title: "Reports",
    body: "In-depth reports, assessments, and publications.",
    soon: true,
  },
  {
    title: "Resources",
    body: "Datasets, explainers, methodologies, and selected research resources.",
    soon: true,
  },
  {
    title: "Substack",
    body: "Regular commentary and analysis from KliSus.",
    soon: false,
  },
];

function SoonTag() {
  return (
    <span className="rounded-full bg-paper-surface px-3 py-1 text-[12px] font-medium text-paper-muted">
      Soon
    </span>
  );
}

export default function IntelligencePage() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="bg-paper-surface">
        <Reveal className="mx-auto max-w-6xl px-6 pb-20 pt-36">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            KliSus Intelligence
          </p>
          <h1
            className="font-display mt-5 max-w-[18ch] text-[38px] font-medium text-ink sm:text-[48px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Intelligence at the intersection of climate, land, nature, and
            economics.
          </h1>
          <p
            className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            Research, analysis, and perspectives exploring how environmental
            change shapes economic decisions.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3"
            style={{ "--i": 3 } as CSSProperties}
          >
            {CHANNELS.map((c) => (
              <span
                key={c}
                className="rounded-full bg-paper px-4 py-1.5 text-[13px] font-medium text-paper-muted shadow-[0_1px_2px_rgba(13,21,18,0.05)]"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 02 — INTELLIGENCE THESIS (gradient panel) */}
      <section className="dark-band relative overflow-hidden bg-[linear-gradient(100deg,#123a34_0%,#12314c_55%,#0c1e3e_100%)]">
        <svg
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[18, 42, 66, 88].map((y, i) => (
            <path
              key={i}
              d={`M 0 ${y} C 30 ${y - 10}, 55 ${y + 8}, 100 ${y - 5}`}
              fill="none"
              stroke={i === 1 ? "#7fd6c2" : "#3a5a6a"}
              strokeOpacity={i === 1 ? 0.35 : 0.4}
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <Reveal className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Intelligence thesis
          </p>
          <h2
            className="font-display mt-5 max-w-[18ch] text-[34px] font-medium text-paper sm:text-[44px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Environmental change is changing the economy.
          </h2>
          <p
            className="mt-6 max-w-[54ch] text-[17px] leading-relaxed text-cream/85"
            style={{ "--i": 2 } as CSSProperties}
          >
            Climate, land, and nature are increasingly influencing markets,
            regulation, supply chains, investment, and economic decisions.
          </p>
          <p
            className="mt-4 max-w-[54ch] text-[17px] leading-relaxed text-cream/85"
            style={{ "--i": 3 } as CSSProperties}
          >
            KliSus Intelligence examines these intersections, turning complex
            environmental developments into clear, evidence-led insights.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3"
            style={{ "--i": 4 } as CSSProperties}
          >
            {["Climate", "Land & Nature", "Economics"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-cream/10 px-4 py-1.5 text-[13px] font-medium text-cream"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 03 — FEATURED (honest coming-soon slot, not fake content) */}
      <section className="bg-paper-surface">
        <Reveal className="mx-auto max-w-6xl px-6 py-24">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Featured intelligence
          </p>
          <h2
            className="font-display mt-5 max-w-[18ch] text-[34px] font-medium text-ink sm:text-[44px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Featured Intelligence
          </h2>
          <div
            className="mt-10 rounded-2xl border-2 border-dashed border-paper-line bg-paper/60 p-8 sm:p-10"
            style={{ "--i": 2 } as CSSProperties}
          >
            <h3 className="font-display text-[22px] font-medium text-paper-muted sm:text-[28px]">
              [Latest Research / Report]
            </h3>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-paper-muted">
              Short description of the featured research, report, or analysis.
            </p>
            <p className="mt-6 font-mono text-[12px] text-paper-muted">
              {"Research & Insights · Date"}
            </p>
            <span className="mt-5 inline-block text-[15px] font-medium text-paper-muted">
              Read →<span className="sr-only"> (coming soon)</span>
            </span>
          </div>
          <div
            className="mt-10 flex flex-wrap items-end justify-between gap-4"
            style={{ "--i": 3 } as CSSProperties}
          >
            <div>
              <p className="text-[17px] font-semibold text-ink">Latest Intelligence</p>
              <p className="mt-1 text-[15px] text-paper-muted">
                Additional research, analysis, reports, and perspectives.
              </p>
            </div>
            <Link
              href="#explore"
              className="text-[15px] font-semibold text-green-ink transition-colors hover:text-ink"
            >
              Explore All Intelligence →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 04 — EXPLORE */}
      <section id="explore" className="scroll-mt-24 bg-paper-surface">
        <Reveal className="mx-auto max-w-6xl px-6">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Explore
          </p>
          <h2
            className="font-display mt-5 max-w-[18ch] text-[34px] font-medium text-ink sm:text-[44px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Explore KliSus Intelligence
          </h2>
        </Reveal>
        <Reveal className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-2">
          {EXPLORE_CHANNELS.map((channel, i) => (
            <div
              key={channel.title}
              style={{ "--i": i } as CSSProperties}
              className="rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[20px] font-semibold text-ink">{channel.title}</h3>
                <SoonTag />
              </div>
              <p className="mt-2.5 text-[15px] leading-relaxed text-paper-muted">
                {channel.body}
              </p>
              <span className="mt-5 inline-block text-[15px] font-medium text-paper-muted">
                {channel.soon ? "Explore →" : "Read on Substack →"}
                <span className="sr-only"> (coming soon)</span>
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* 05 — FINAL CTA */}
      <CTABand
        title="Stay ahead of the change."
        lede="Explore the intelligence shaping climate, land, nature, and economics."
        primary={{ label: "Contact KliSus", href: "mailto:teams@klisus.com" }}
        secondary={{ label: "Explore EUDR Land Evidence", href: "/solutions/eudr-land-evidence" }}
      />
    </>
  );
}
