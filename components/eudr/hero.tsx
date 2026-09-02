import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import HeroPlate from "@/components/visuals/hero-plate";
import FlowStrip from "@/components/visuals/flow-strip";

/** Flagship hero: satellite plate behind, headline left, flow strip below. */
export default function EudrHero() {
  return (
    <section className="relative overflow-hidden">
      <HeroPlate />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pb-24 sm:pt-36">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow className="mb-5">EUDR LAND EVIDENCE</Eyebrow>
          <h1 className="font-display text-[40px] leading-[1.1] text-cream lg:text-[56px]">
            Assess the land behind your supply chain.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[20px] leading-relaxed text-cream">
            Plot-level satellite and geospatial intelligence to support EUDR due
            diligence.
          </p>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">
            KliSus analyses production-plot locations and historical land-use
            indicators to provide structured evidence for supply-chain review
            and due-diligence workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/plot-check" size="lg">
              Request a Plot Assessment →
            </Button>
            <Button href="/plot-check/r/e12fe13023e0" variant="secondary" size="lg">
              View Sample Report →
            </Button>
          </div>
          <FlowStrip
            className="mt-12"
            items={["Production Plot", "Historical Satellite Analysis", "Land Evidence"]}
          />
        </div>
      </div>
    </section>
  );
}
