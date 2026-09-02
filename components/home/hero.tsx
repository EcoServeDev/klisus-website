import Button from "@/components/ui/button";
import HeroPlate from "@/components/visuals/hero-plate";
import TelemetryStrip from "@/components/visuals/telemetry-strip";

/**
 * 01 — HERO. Type-led dossier opening: the headline pinned lower-left at max
 * scale over the satellite plate, pass marginalia top-right, and the
 * telemetry strip closing the frame at the bottom edge.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden">
      <HeroPlate />

      {/* pass marginalia — one corner only */}
      <div className="absolute right-6 top-24 hidden text-right md:block" aria-hidden="true">
        <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-muted">
          S2 PASS 2026-09-01
          <br />
          TILE 20MQD · CLOUD 4%
          <br />
          ILLUSTRATIVE
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10">
        <p className="voice-label animate-fade-up">
          SURVEY / CLIMATE INTELLIGENCE &amp; ECONOMICS
        </p>
        <h1 className="font-display animate-fade-up mt-6 max-w-[13ch] text-[44px] text-cream md:text-[64px] lg:text-[84px]">
          Evidence for decisions in a changing climate.
        </h1>
        <p className="animate-fade-up mt-6 max-w-[52ch] text-[16px] leading-relaxed text-cream/85">
          KliSus combines Earth observation, geospatial intelligence, and
          environmental analysis to help businesses, institutions, and
          investors assess environmental risk, evaluate climate and nature
          claims, and make better-informed decisions.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4">
          <Button href="/solutions/eudr-land-evidence" size="lg">
            Explore EUDR Land Evidence →
          </Button>
          <Button href="mailto:teams@klisus.com" variant="secondary" size="lg">
            Talk to KliSus
          </Button>
        </div>
      </div>

      <TelemetryStrip
        fields={[
          { label: "Production Plot", value: "17.4521° N, 78.3845° E" },
          { label: "Analysis Period", value: "31 Dec 2020 → Present" },
          { label: "Observed Land Change", bracket: { text: "REVIEW REQUIRED", tone: "amber" } },
          { label: "Evidence Record", bracket: { text: "GENERATED", tone: "green" } },
        ]}
        caption="Illustrative example — fictional coordinates"
      />
    </section>
  );
}
