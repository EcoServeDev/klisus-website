import Image from "next/image";
import Button from "@/components/ui/button";

/** Dark image hero band — the Home hero's sibling for the flagship page. */
export default function EudrHero() {
  return (
    <section className="dark-band relative flex flex-col justify-end overflow-hidden bg-forest-black">
      <Image
        src="/plates/apui-hero-2025.jpg"
        alt="Sentinel-2 satellite view of the Apuí deforestation frontier, Amazonas, Brazil"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-black/85 via-forest-black/55 to-forest-black/85"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-36 lg:pt-44">
        <p className="kicker animate-fade-up">EUDR Land Evidence</p>
        <h1 className="font-display animate-fade-up mt-6 max-w-[16ch] text-[38px] font-medium text-paper sm:text-[48px] lg:text-[56px]">
          Assess the land behind your supply chain.
        </h1>
        <p className="animate-fade-up mt-6 max-w-[44ch] text-[18px] leading-relaxed text-cream/90">
          Plot-level satellite and geospatial intelligence to support EUDR due
          diligence.
        </p>
        <p className="animate-fade-up mt-4 max-w-[56ch] text-[16px] leading-relaxed text-cream/80">
          KliSus analyses production-plot locations and historical land-use
          indicators to provide structured evidence for supply-chain review
          and due-diligence workflows.
        </p>
        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4">
          <Button href="/request" size="lg" onDark>
            Request a Plot Assessment
          </Button>
          <Button href="/plot-check/r/e12fe13023e0" variant="secondary" size="lg" onDark>
            View Sample Report
          </Button>
        </div>
      </div>

      <p className="relative mx-auto w-full max-w-6xl px-6 pb-4 text-right font-mono text-[10px] text-cream/40">
        Contains modified Copernicus Sentinel data (2025), processed by KliSus
      </p>
    </section>
  );
}
