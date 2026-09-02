import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";

/**
 * 03 — EUDR LAND EVIDENCE. Ruled opener; copy in the left columns, a quiet
 * pointer to the change timeline on the product page in the right columns.
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
          <div className="border-t border-paper-line pt-6 lg:col-span-5 lg:col-start-8">
            <p className="voice-label">THE CHANGE TIMELINE</p>
            <p className="mt-4 max-w-[44ch] text-[14px] leading-relaxed text-paper-muted">
              Six years of the same nine kilometres of the Apuí frontier —
              assessed frame by frame.
            </p>
            <Button
              href="/solutions/eudr-land-evidence#how-it-works"
              variant="ghost"
              className="mt-6 !px-0"
            >
              See the full change timeline →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
