import type { Metadata } from "next";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import CTABand from "@/components/ui/cta-band";
import Eyebrow from "@/components/ui/eyebrow";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import EvidenceRecordMock from "@/components/visuals/evidence-record-mock";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Environmental intelligence, built for decisions — plot-level land evidence, climate intelligence, and climate economics.",
};

const INTELLIGENCE_CARDS = [
  {
    title: "Climate Intelligence",
    body: "Understanding environmental risks and changing conditions.",
  },
  {
    title: "Land & Nature Intelligence",
    body: "Analysing environmental change across landscapes and assets.",
  },
  {
    title: "Climate Economics",
    body: "Connecting environmental change with markets, capital, and economic decisions.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="animate-fade-up max-w-3xl">
            <Eyebrow className="mb-4">Solutions</Eyebrow>
            <h1 className="font-display text-[40px] leading-[1.1] text-cream sm:text-[56px]">
              Environmental intelligence, built for decisions.
            </h1>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-muted">
              KliSus provides data-driven solutions that turn environmental
              information into actionable intelligence and traceable evidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Tag>Climate</Tag>
              <Tag>Land</Tag>
              <Tag>Nature</Tag>
              <Tag>Economics</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — EUDR Land Evidence */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow n="01" className="mb-4">
              EUDR Land Evidence
            </Eyebrow>
            <h2 className="font-display text-[28px] leading-[1.15] text-cream sm:text-[40px]">
              Assess the land behind your supply chain.
            </h2>
            <p className="mt-4 text-[20px] leading-snug text-cream">
              Plot-level satellite and geospatial intelligence to support EUDR
              due diligence.
            </p>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">
              KliSus analyses production-plot locations and historical land-use
              indicators to provide structured evidence for supply-chain review
              and due-diligence workflows.
            </p>
            <div className="mt-8">
              <Button href="/solutions/eudr-land-evidence">
                Explore EUDR Land Evidence →
              </Button>
            </div>
          </div>

          {/* Product visual: the evidence record, framed — no link, no CTA. */}
          <figure className="min-w-0 overflow-hidden rounded-sm border border-line bg-surface-1 p-4 sm:p-6">
            <EvidenceRecordMock cta={false} />
          </figure>
        </div>
      </section>

      {/* 02 — Growing the intelligence layer (CTABand below draws the divider) */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionHeading
            n="02"
            eyebrow="Growing the intelligence layer"
            title="More intelligence. More solutions."
            lede="KliSus is building solutions across climate, land, nature, and environmental economics — turning complex environmental data into decision-ready intelligence."
          />
          <div className="stagger mt-12 grid gap-4 sm:grid-cols-3">
            {INTELLIGENCE_CARDS.map((card, i) => (
              <Card key={card.title} style={{ "--i": i } as React.CSSProperties}>
                <h3 className="text-[16px] font-medium text-cream">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{card.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/intelligence" variant="secondary">
              Explore KliSus Intelligence →
            </Button>
          </div>
        </div>
      </section>

      {/* 03 — Closing CTA */}
      <CTABand
        title="Start with the land."
        lede="Explore KliSus EUDR Land Evidence."
        primary={{
          label: "Explore EUDR Land Evidence →",
          href: "/solutions/eudr-land-evidence",
        }}
      />
    </>
  );
}
