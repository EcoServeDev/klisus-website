import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import ScrollWorkflow from "@/components/visuals/scroll-workflow";

const STEPS = [
  {
    title: "LOCATE",
    body: "Review the submitted production-plot coordinates or boundaries.",
  },
  {
    title: "ANALYSE",
    body: "Assess historical satellite observations, land-use patterns, vegetation indicators, and relevant forest-cover change signals.",
  },
  {
    title: "DOCUMENT",
    body: "Generate a structured evidence record with the assessed area, time period, data sources, methodology, and analytical findings.",
  },
] as const;

/** 02 — THE KLISUS APPROACH: named steps up top, scroll-linked journey below. */
export default function ApproachSection() {
  return (
    <>
      <section id="how-it-works" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionHeading
            n="02"
            eyebrow="THE KLISUS APPROACH"
            title="From coordinates to evidence."
            lede="KliSus transforms a production plot into a structured land evidence record using satellite observation and geospatial analysis."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step) => (
              <Card key={step.title}>
                <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-ndvi-green">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{step.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ScrollWorkflow />
    </>
  );
}
