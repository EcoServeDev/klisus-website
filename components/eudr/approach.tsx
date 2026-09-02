import IndexRow, { IndexList } from "@/components/ui/index-row";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import ScrollWorkflow from "@/components/visuals/scroll-workflow";

const STEPS = [
  {
    n: "01",
    title: "LOCATE",
    body: "Review the submitted production-plot coordinates or boundaries.",
  },
  {
    n: "02",
    title: "ANALYSE",
    body: "Assess historical satellite observations, land-use patterns, vegetation indicators, and relevant forest-cover change signals.",
  },
  {
    n: "03",
    title: "DOCUMENT",
    body: "Generate a structured evidence record with the assessed area, time period, data sources, methodology, and analytical findings.",
  },
] as const;

/** 02 — THE KLISUS APPROACH: named steps as an index, scroll journey below. */
export default function ApproachSection() {
  return (
    <>
      <section id="how-it-works" className="scroll-mt-20">
        <SectionRule n="02" label="THE KLISUS APPROACH" marker="§ HOW IT WORKS" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-28">
          <div className="grid gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeading
                title="From coordinates to evidence."
                lede="KliSus transforms a production plot into a structured land evidence record using satellite observation and geospatial analysis."
              />
            </div>
          </div>
          <IndexList className="mt-12">
            {STEPS.map((step) => (
              <IndexRow
                key={step.n}
                n={step.n}
                title={<span className="voice-label">{step.title}</span>}
              >
                {step.body}
              </IndexRow>
            ))}
          </IndexList>
        </div>
      </section>
      <section aria-label="How an assessment progresses" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <ScrollWorkflow />
        </div>
      </section>
    </>
  );
}
