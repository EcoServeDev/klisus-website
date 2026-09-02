import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import FlowStrip from "@/components/visuals/flow-strip";

/**
 * 03 — EUDR LAND EVIDENCE. Ruled opener; copy in the left columns, the
 * vertical coordinates→evidence flow hanging in the right columns.
 */
export default function EudrSolution() {
  return (
    <section>
      <SectionRule n="03" label="OUR FIRST SOLUTION" marker="FIRST SOLUTION" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:pb-28">
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Understand the land behind your supply chain."
              lede="KliSus uses satellite and geospatial analysis to assess plot-level land-use history and identify relevant environmental change indicators. The resulting evidence can support EUDR due-diligence processes and internal supply-chain review."
            />
            <div className="mt-10">
              <Button href="/solutions/eudr-land-evidence">
                Explore EUDR Land Evidence →
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <FlowStrip
              direction="vertical"
              items={[
                "Coordinates",
                "Geospatial Analysis",
                "Land-Use Assessment",
                "Structured Evidence",
              ]}
            />
            <p className="mt-6 font-mono text-[13px] text-paper-muted">
              From coordinates to traceable land evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
