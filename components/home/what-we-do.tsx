import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import IndexRow, { IndexList } from "@/components/ui/index-row";
import LayerDiagram from "@/components/visuals/layer-diagram";

/**
 * 02 — WHAT WE DO. Ruled opener, asymmetric 12-col body (heading left,
 * diagram in the right columns), then the three modules as index rows.
 */

const MODULES = [
  {
    n: "01",
    title: "Intelligence",
    annotation: "Analysis · Risk Assessment · Change Detection · Research",
  },
  {
    n: "02",
    title: "Evidence",
    annotation: "Land Evidence · Due-Diligence Support · Traceability",
  },
  {
    n: "03",
    title: "Economic Decisions",
    annotation: "Business · Investment · Regulation · Markets",
  },
];

export default function WhatWeDo() {
  return (
    <section>
      <SectionRule n="02" label="WHAT WE DO" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:pb-28">
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              title="The intelligence layer between environmental change and economic decisions."
              lede="KliSus transforms complex environmental information into structured intelligence and traceable evidence for business, investment, regulatory, and market decisions."
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            <LayerDiagram />
          </div>
        </div>
        <IndexList className="mt-16">
          {MODULES.map((m) => (
            <IndexRow key={m.n} n={m.n} title={m.title} annotation={m.annotation} />
          ))}
        </IndexList>
      </div>
    </section>
  );
}
