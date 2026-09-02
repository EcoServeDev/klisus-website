import type { Metadata } from "next";
import BracketLabel from "@/components/ui/bracket-label";
import Button from "@/components/ui/button";
import CTABand from "@/components/ui/cta-band";
import IndexRow, { IndexList } from "@/components/ui/index-row";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import EvidenceRecordMock from "@/components/visuals/evidence-record-mock";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Environmental intelligence, built for decisions — plot-level land evidence, climate intelligence, and climate economics.",
};

const GROWING_SOLUTIONS = [
  {
    n: "01",
    title: "Climate Intelligence",
    body: "Understanding environmental risks and changing conditions.",
  },
  {
    n: "02",
    title: "Land & Nature Intelligence",
    body: "Analysing environmental change across landscapes and assets.",
  },
  {
    n: "03",
    title: "Climate Economics",
    body: "Connecting environmental change with markets, capital, and economic decisions.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      {/* Page title — ruled, type-led, left-hung */}
      <section className="border-t border-paper-line">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-10 items-center">
            <span className="voice-label">SOLUTIONS</span>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-16 pt-8 sm:pb-20 lg:grid-cols-12">
          <div className="animate-fade-up lg:col-span-10">
            <h1 className="font-display max-w-[14ch] text-[36px] text-ink sm:text-[44px] md:text-[56px] lg:text-[72px]">
              Environmental intelligence, built for decisions.
            </h1>
            <p className="voice-lede mt-8 max-w-[44ch] text-[20px] text-paper-muted md:text-[26px]">
              KliSus provides data-driven solutions that turn environmental
              information into actionable intelligence and traceable evidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              <BracketLabel>Climate</BracketLabel>
              <BracketLabel>Land</BracketLabel>
              <BracketLabel>Nature</BracketLabel>
              <BracketLabel>Economics</BracketLabel>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — EUDR Land Evidence */}
      <SectionRule n="01" label="EUDR LAND EVIDENCE" marker="FIRST SOLUTION" />
      <section>
        <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-12 px-6 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <h2 className="font-display max-w-[18ch] text-[32px] text-ink md:text-[44px]">
              Assess the land behind your supply chain.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[20px] leading-snug text-ink">
              Plot-level satellite and geospatial intelligence to support EUDR
              due diligence.
            </p>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-paper-muted">
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

          {/* Product figure: the evidence record — no link, no CTA. */}
          <figure className="relative min-w-0 overflow-hidden rounded-[2px] border border-paper-line bg-paper-surface p-4 sm:p-6 lg:col-span-5 lg:col-start-8">
            <EvidenceRecordMock cta={false} />
          </figure>
        </div>
      </section>

      {/* 02 — Growing the intelligence layer */}
      <SectionRule n="02" label="GROWING THE INTELLIGENCE LAYER" />
      <section>
        <div className="mx-auto grid max-w-6xl gap-x-6 px-6 py-14 lg:grid-cols-12 lg:py-20">
          <SectionHeading
            className="lg:col-span-8"
            title="More intelligence. More solutions."
            lede="KliSus is building solutions across climate, land, nature, and environmental economics — turning complex environmental data into decision-ready intelligence."
          />
          <IndexList className="mt-12 lg:col-span-12">
            {GROWING_SOLUTIONS.map((s) => (
              <IndexRow key={s.n} n={s.n} title={s.title}>
                {s.body}
              </IndexRow>
            ))}
          </IndexList>
          <div className="mt-10 lg:col-span-12">
            <Button href="/intelligence" variant="secondary">
              Explore KliSus Intelligence →
            </Button>
          </div>
        </div>
      </section>

      {/* 03 — Closing */}
      <CTABand
        n="03"
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
