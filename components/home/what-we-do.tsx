import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import LayerDiagram from "@/components/visuals/layer-diagram";

/**
 * 02 — WHAT WE DO. The layer diagram, then the three-pillar card grid:
 * Intelligence / Evidence / Economic Decisions.
 */

const PILLARS = [
  {
    title: "Intelligence",
    line: "Analysis · Risk Assessment · Change Detection · Research",
  },
  {
    title: "Evidence",
    line: "Land Evidence · Due-Diligence Support · Traceability",
  },
  {
    title: "Economic Decisions",
    line: "Business · Investment · Regulation · Markets",
  },
];

export default function WhatWeDo() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          n="02"
          eyebrow="WHAT WE DO"
          title="The intelligence layer between environmental change and economic decisions."
          lede="KliSus transforms complex environmental information into structured intelligence and traceable evidence for business, investment, regulatory, and market decisions."
        />
        <div className="mt-14">
          <LayerDiagram />
        </div>
        <div className="stagger mt-14 grid gap-4 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Card key={pillar.title} style={{ "--i": i } as React.CSSProperties}>
              <h3 className="text-[20px] font-medium text-cream">{pillar.title}</h3>
              <p className="mt-3 font-mono text-[12px] leading-relaxed text-muted">
                {pillar.line}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
