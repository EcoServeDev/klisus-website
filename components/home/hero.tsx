import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import HeroPlate from "@/components/visuals/hero-plate";
import HeroDataCard from "@/components/visuals/hero-data-card";

/**
 * 01 — HERO. Full-height satellite plate with the headline block left and the
 * fictional evidence card right. Everything sits above the plate (z-10).
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      <HeroPlate />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="animate-fade-up">
            <Eyebrow className="mb-5">CLIMATE INTELLIGENCE &amp; ECONOMICS</Eyebrow>
            <h1 className="font-display text-[40px] leading-[1.08] text-cream lg:text-[56px]">
              Evidence for decisions in a changing climate.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted">
              KliSus combines Earth observation, geospatial intelligence, and
              environmental analysis to help businesses, institutions, and
              investors assess environmental risk, evaluate climate and nature
              claims, and make better-informed decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/solutions/eudr-land-evidence" size="lg">
                Explore EUDR Land Evidence →
              </Button>
              <Button href="mailto:teams@klisus.com" variant="secondary" size="lg">
                Talk to KliSus
              </Button>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <HeroDataCard />
          </div>
        </div>
      </div>
    </section>
  );
}
