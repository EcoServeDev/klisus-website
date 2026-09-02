import Image from "next/image";
import Button from "@/components/ui/button";

/**
 * Cinematic full-bleed hero: the real Apuí Sentinel-2 frontier edge-to-edge
 * under a graded forest overlay, headline anchored lower-left.
 */
export default function Hero() {
  return (
    <section className="dark-band relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-forest-black">
      <Image
        src="/plates/apui-hero-2025.jpg"
        alt="Sentinel-2 satellite view of the Apuí deforestation frontier, Amazonas, Brazil"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-forest-black/95 via-forest-black/50 to-forest-black/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="voice-label animate-fade-up">Climate Intelligence &amp; Economics</p>
        <h1 className="font-display animate-fade-up mt-5 max-w-[15ch] text-[42px] text-paper sm:text-[56px] lg:text-[72px]">
          Evidence for decisions in a changing climate.
        </h1>
        <p className="animate-fade-up mt-6 max-w-[56ch] text-[17px] leading-relaxed text-cream/90 md:text-[19px]">
          KliSus combines Earth observation, geospatial intelligence, and
          environmental analysis to help businesses, institutions, and
          investors assess environmental risk, evaluate climate and nature
          claims, and make better-informed decisions.
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4">
          <Button href="/solutions/eudr-land-evidence" size="lg" onDark>
            Explore EUDR Land Evidence
          </Button>
          <Button href="mailto:teams@klisus.com" variant="secondary" size="lg" onDark>
            Talk to KliSus
          </Button>
        </div>
      </div>

      <p className="relative mx-auto w-full max-w-6xl px-6 pb-5 text-right font-mono text-[11px] text-cream/50">
        Apuí, Amazonas · 7.32° S, 59.62° W · Contains modified Copernicus
        Sentinel data (2025), processed by KliSus
      </p>
    </section>
  );
}
