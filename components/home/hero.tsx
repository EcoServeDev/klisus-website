import Image from "next/image";
import Button from "@/components/ui/button";
import StatCounter from "@/components/visuals/stat-counter";

/**
 * Full-bleed satellite hero with a graded overlay, kicker + big sentence
 * headline, pill CTAs, and a factual stat row (methodology-true figures
 * only — never invented metrics).
 */
const STATS = [
  { value: 6, suffix: "", label: "independent public datasets" },
  { value: 10, suffix: " m", label: "imagery resolution" },
  { value: 2020, suffix: "", label: "EUDR cutoff baseline" },
];

export default function Hero() {
  return (
    <section className="dark-band stack-panel relative justify-end overflow-hidden bg-forest-black">
      <Image
        src="/plates/apui-hero-2025.jpg"
        alt="Sentinel-2 satellite view of the Apuí deforestation frontier, Amazonas, Brazil"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-forest-black/80 via-forest-black/55 to-forest-black/90"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:pt-44">
        <p className="kicker animate-fade-up">Climate Intelligence &amp; Economics</p>
        <h1 className="font-display animate-fade-up mt-6 max-w-[17ch] text-[40px] font-medium text-paper sm:text-[52px] lg:text-[64px]">
          Evidence for decisions in a changing climate.
        </h1>
        <p className="animate-fade-up mt-6 max-w-[58ch] text-[17px] leading-relaxed text-cream/90">
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

        <div className="mt-20 grid gap-10 border-t border-cream/15 pt-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="stat-num text-[52px] text-paper sm:text-[60px]">
                <StatCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[14px] text-cream/75">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="relative mx-auto w-full max-w-6xl px-6 pb-4 text-right font-mono text-[10px] text-cream/40">
        Contains modified Copernicus Sentinel data (2025), processed by KliSus
      </p>
    </section>
  );
}
