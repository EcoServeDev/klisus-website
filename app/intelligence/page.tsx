import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import CTABand from "@/components/ui/cta-band";
import Eyebrow from "@/components/ui/eyebrow";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import ContourGrid from "@/components/intelligence/contour-grid";

export const metadata: Metadata = {
  title: "KliSus Intelligence",
  description: "Research and analysis at the intersection of climate, land, nature, and economics.",
};

/** 04 — EXPLORE. Three coming-soon channels + the live Substack. */
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
      <section className="relative overflow-hidden border-b border-line">
        <ContourGrid className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_35%,transparent_95%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl animate-fade-up">
            <Eyebrow className="mb-5">KLISUS INTELLIGENCE</Eyebrow>
            <h1 className="font-display text-[28px] leading-[1.12] text-cream sm:text-[40px]">
              Intelligence at the intersection of climate, land, nature, and economics.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted">
              Research, analysis, and perspectives exploring how environmental change shapes
              economic decisions.
            </p>
            <p className="mt-10 border-t border-line pt-5 font-mono text-[12px] text-muted">
              {"Research & Insights · Reports · Resources · Substack"}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — INTELLIGENCE THESIS (paper: reads as a KliSus evidence document) */}
      <section className="paper-section border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading
            tone="paper"
            n="02"
            eyebrow="INTELLIGENCE THESIS"
            title="Environmental change is changing the economy."
          />
          <div className="mt-8 max-w-2xl space-y-5">
            <p className="text-[16px] leading-relaxed text-ink">
              Climate, land, and nature are increasingly influencing markets, regulation, supply
              chains, investment, and economic decisions.
            </p>
            <p className="text-[16px] leading-relaxed text-paper-muted">
              KliSus Intelligence examines these intersections, turning complex environmental
              developments into clear, evidence-led insights.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <Tag tone="paper">Climate</Tag>
            <Tag tone="paper">{"Land & Nature"}</Tag>
            <Tag tone="paper">Economics</Tag>
          </div>
        </div>
      </section>

      {/* 03 — FEATURED (honest coming-soon slot, not fake content) */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading n="03" eyebrow="FEATURED" title="Featured Intelligence" />
        <Card className="mt-10 border-dashed p-8 sm:p-10">
          <h3 className="font-display text-[20px] text-muted sm:text-[28px]">
            [Latest Research / Report]
          </h3>
          <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-muted">
            Short description of the featured research, report, or analysis.
          </p>
          <p className="mt-6 font-mono text-[12px] text-muted">
            {"Research & Insights · Date"}
          </p>
          <span aria-disabled="true" className="mt-5 inline-block text-[14px] text-muted">
            Read →
          </span>
        </Card>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
          <div>
            <p className="text-[16px] font-medium text-cream">Latest Intelligence</p>
            <p className="mt-1 text-[14px] text-muted">
              Additional research, analysis, reports, and perspectives.
            </p>
          </div>
          <Link
            href="#explore"
            className="text-[14px] text-ndvi-green transition-colors hover:text-cream"
          >
            Explore All Intelligence →
          </Link>
        </div>
      </section>

      {/* 04 — EXPLORE */}
      <section id="explore" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading n="04" eyebrow="EXPLORE" title="Explore KliSus Intelligence" />
          <div className="stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPLORE_CHANNELS.map((channel, i) => (
              <Card
                key={channel.title}
                style={{ "--i": i } as CSSProperties}
                className="flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-medium text-cream">{channel.title}</h3>
                  {channel.soon ? <Tag>SOON</Tag> : null}
                </div>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {channel.body}
                </p>
                {channel.soon ? (
                  <span aria-disabled="true" className="mt-5 text-[14px] text-muted">
                    Explore →
                  </span>
                ) : (
                  <Button href="#" variant="ghost" className="mt-4 self-start">
                    Read on Substack →
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — FINAL CTA */}
      <CTABand
        title="Stay ahead of the change."
        lede="Explore the intelligence shaping climate, land, nature, and economics."
        primary={{ label: "Read on Substack →", href: "#" }}
        secondary={{ label: "Contact KliSus →", href: "mailto:teams@klisus.com" }}
      />
    </>
  );
}
