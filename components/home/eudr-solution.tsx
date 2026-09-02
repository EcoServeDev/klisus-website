import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import FlowStrip from "@/components/visuals/flow-strip";

/**
 * 03 — EUDR LAND EVIDENCE. Copy left, coordinates→evidence flow right,
 * captioned in the data voice.
 */
export default function EudrSolution() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              n="03"
              eyebrow="OUR FIRST SOLUTION"
              title="Understand the land behind your supply chain."
              lede="KliSus uses satellite and geospatial analysis to assess plot-level land-use history and identify relevant environmental change indicators. The resulting evidence can support EUDR due-diligence processes and internal supply-chain review."
            />
            <div className="mt-8">
              <Button href="/solutions/eudr-land-evidence">
                Explore EUDR Land Evidence →
              </Button>
            </div>
          </div>
          <div>
            <div className="rounded-sm border border-line bg-surface-1 p-6 sm:p-8">
              <FlowStrip
                items={[
                  "Coordinates",
                  "Geospatial Analysis",
                  "Land-Use Assessment",
                  "Structured Evidence",
                ]}
              />
            </div>
            <p className="mt-4 font-mono text-[12px] text-muted">
              From coordinates to traceable land evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
