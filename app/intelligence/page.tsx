import type { Metadata } from "next";
import Link from "next/link";
import BracketLabel from "@/components/ui/bracket-label";
import CornerTicks from "@/components/ui/corner-ticks";
import CTABand from "@/components/ui/cta-band";
import IndexRow, { IndexList } from "@/components/ui/index-row";
import SectionRule from "@/components/ui/section-rule";
import ContourGrid from "@/components/intelligence/contour-grid";

export const metadata: Metadata = {
  title: "KliSus Intelligence",
  description: "Research and analysis at the intersection of climate, land, nature, and economics.",
};

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

export default function IntelligencePage() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative overflow-hidden">
        <ContourGrid className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_35%,transparent_95%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-x-6 px-6 pb-16 pt-24 sm:pt-32 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-9">
            <p className="voice-label">KLISUS INTELLIGENCE</p>
            <h1 className="font-display mt-6 max-w-[16ch] text-[44px] text-ink md:text-[64px]">
              Intelligence at the intersection of climate, land, nature, and economics.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
              Research, analysis, and perspectives exploring how environmental change shapes
              economic decisions.
            </p>
            <p className="voice-label mt-12 border-t border-paper-line pt-3">
              {"Research & Insights · Reports · Resources · Substack"}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — INTELLIGENCE THESIS (paper dossier spread) */}
      <section className="relative bg-paper-surface">
        <CornerTicks />
        <SectionRule n="02" label="KLISUS — INTELLIGENCE THESIS" marker="§ 02" />
        <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-8 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display max-w-[18ch] text-[32px] text-ink md:text-[44px]">
              Environmental change is changing the economy.
            </h2>
            <div className="mt-8 max-w-[68ch] space-y-5">
              <p className="text-[16px] leading-[1.7] text-ink">
                Climate, land, and nature are increasingly influencing markets, regulation, supply
                chains, investment, and economic decisions.
              </p>
              <p className="text-[16px] leading-[1.7] text-paper-muted">
                KliSus Intelligence examines these intersections, turning complex environmental
                developments into clear, evidence-led insights.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <BracketLabel>Climate</BracketLabel>
              <BracketLabel>{"Land & Nature"}</BracketLabel>
              <BracketLabel>Economics</BracketLabel>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-t border-paper-line py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-paper-muted">
            <span>KLISUS INTELLIGENCE</span>
            <span>PAGE 01</span>
          </div>
        </div>
      </section>

      {/* 03 — FEATURED (honest coming-soon slot, not fake content) */}
      <SectionRule n="03" label="FEATURED" />
      <section className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-8 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h2 className="font-display max-w-[18ch] text-[32px] text-ink md:text-[44px]">
            Featured Intelligence
          </h2>
          <div className="mt-10 rounded-[2px] border border-dashed border-paper-line p-8 sm:p-10">
            <h3 className="font-display text-[20px] text-paper-muted sm:text-[28px]">
              [Latest Research / Report]
            </h3>
            <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-paper-muted">
              Short description of the featured research, report, or analysis.
            </p>
            <p className="mt-6 font-mono text-[12px] text-paper-muted">
              {"Research & Insights · Date"}
            </p>
            <span className="mt-5 inline-block text-[14px] text-paper-muted">
              Read →<span className="sr-only"> (coming soon)</span>
            </span>
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-paper-line pt-6">
            <div>
              <p className="text-[16px] font-medium text-ink">Latest Intelligence</p>
              <p className="mt-1 text-[14px] text-paper-muted">
                Additional research, analysis, reports, and perspectives.
              </p>
            </div>
            <Link
              href="#explore"
              className="font-mono text-[13px] text-ink underline decoration-paper-line underline-offset-4 transition-colors hover:decoration-green-ink"
            >
              Explore All Intelligence →
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — EXPLORE */}
      <section id="explore" className="scroll-mt-16">
        <SectionRule n="04" label="EXPLORE" />
        <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-10">
            <h2 className="font-display max-w-[18ch] text-[32px] text-ink md:text-[44px]">
              Explore KliSus Intelligence
            </h2>
            <IndexList className="mt-10">
              {EXPLORE_CHANNELS.map((channel, i) => (
                <IndexRow
                  key={channel.title}
                  n={`0${i + 1}`}
                  title={channel.title}
                  annotation={
                    channel.soon ? <BracketLabel>SOON</BracketLabel> : undefined
                  }
                >
                  <p>{channel.body}</p>
                  {channel.soon ? (
                    <span className="mt-3 inline-block text-[14px] text-paper-muted">
                      Explore →<span className="sr-only"> (coming soon)</span>
                    </span>
                  ) : (
                    <span className="mt-3 inline-block text-[14px] text-paper-muted">
                      Read on Substack →<span className="sr-only"> (coming soon)</span>
                    </span>
                  )}
                </IndexRow>
              ))}
            </IndexList>
          </div>
        </div>
      </section>

      {/* 05 — FINAL CTA */}
      <CTABand
        n="05"
        title="Stay ahead of the change."
        lede="Explore the intelligence shaping climate, land, nature, and economics."
        primary={{ label: "Contact KliSus →", href: "mailto:teams@klisus.com" }}
        secondary={{ label: "Explore EUDR Land Evidence →", href: "/solutions/eudr-land-evidence" }}
      />
    </>
  );
}
