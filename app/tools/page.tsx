import type { Metadata } from "next";
import { ToolCard } from "@/components/tools/tool-shell";
import CTABand from "@/components/ui/cta-band";
import { CATEGORIES, TOOLS } from "@/lib/tools/registry";

export const metadata: Metadata = {
  title: "Free climate tools",
  description:
    "Free carbon calculators: electricity and fuel to CO2, freight, product footprint, CBAM code checker and cost, carbon price exposure and solar savings. Every factor sourced.",
};

const PRINCIPLES = [
  { term: "Sourced", def: "Every factor names its dataset and year." },
  { term: "Shown", def: "Every result shows its arithmetic." },
  { term: "Global", def: "Grid factors for 60+ countries, not one market." },
  { term: "Free", def: "No sign-up. Nothing leaves your browser." },
];

export default function ToolsIndex() {
  return (
    <>
      <section className="bg-paper-surface">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <p className="kicker">Free tools</p>
          <h1 className="font-display mt-5 max-w-[20ch] text-[38px] font-medium text-ink sm:text-[52px]">Carbon numbers you can show your working for</h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-paper-muted">
            Calculators for the questions buyers, lenders and EU importers are asking now. Each one shows the formula, the factor and where
            the factor comes from, so the number holds up when someone checks it.
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.term} className="rounded-xl bg-paper px-5 py-4 shadow-[0_1px_2px_rgba(13,21,18,0.05)]">
                <dt className="text-[14px] font-semibold text-ink">{p.term}</dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-paper-muted">{p.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-paper-muted">{cat}</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((t) => t.category === cat).map((t) => (
                  <ToolCard key={t.slug} slug={t.slug} title={t.title} blurb={t.blurb} meta={t.method} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Need evidence, not just an estimate?"
        lede="KliSus turns satellite and environmental data into evidence your buyers and lenders can check."
        primary={{ label: "Talk to us", href: "/partnerships" }}
        secondary={{ label: "Explore our solutions", href: "/solutions" }}
      />
    </>
  );
}
