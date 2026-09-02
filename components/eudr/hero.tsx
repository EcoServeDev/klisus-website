import Button from "@/components/ui/button";
import HeroPlate from "@/components/visuals/hero-plate";
import TelemetryStrip from "@/components/visuals/telemetry-strip";

/**
 * Flagship hero, dossier grammar: type pinned lower-left over the plate,
 * assessment flow as the bottom telemetry strip.
 */
export default function EudrHero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden">
      <HeroPlate />

      {/* marginalia — one corner only */}
      <div className="absolute right-6 top-24 hidden text-right md:block" aria-hidden="true">
        <p className="font-mono text-[10px] leading-relaxed text-muted">
          S2 PASS 2026-09-01
          <br />
          TILE 20MQD · CLOUD 4%
          <br />
          ILLUSTRATIVE
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10">
        <p className="voice-label animate-fade-up">EUDR LAND EVIDENCE</p>
        <h1 className="font-display animate-fade-up mt-6 max-w-[13ch] text-[44px] text-cream md:text-[64px] lg:text-[84px]">
          Assess the land behind your supply chain.
        </h1>
        <p className="voice-lede mt-6 max-w-[40ch] text-[20px] text-cream md:text-[24px]">
          Plot-level satellite and geospatial intelligence to support EUDR due
          diligence.
        </p>
        <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-cream/85">
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
      </div>

      <TelemetryStrip
        fields={[
          { label: "01 PRODUCTION PLOT", value: "SUBMITTED" },
          { label: "02 HISTORICAL SATELLITE ANALYSIS", value: "ASSESSED" },
          { label: "03 LAND EVIDENCE", value: "STRUCTURED" },
        ]}
      />
    </section>
  );
}
