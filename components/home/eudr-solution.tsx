import Image from "next/image";
import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

/** 03 — OUR FIRST SOLUTION: feature panel with the real change imagery. */
export default function EudrSolution() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:pb-28">
      <div className="grid items-center gap-12 rounded-2xl bg-paper-surface p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our first solution"
            title="Understand the land behind your supply chain."
          />
          <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            KliSus uses satellite and geospatial analysis to assess plot-level
            land-use history and identify relevant environmental change
            indicators. The resulting evidence can support EUDR due-diligence
            processes and internal supply-chain review.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/solutions/eudr-land-evidence" size="lg">
              Explore EUDR Land Evidence
            </Button>
          </div>
        </div>

        <figure>
          <div className="relative overflow-hidden rounded-xl shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.14)]">
            <Image
              src="/plates/apui-tc-2025.jpg"
              alt="True-color Sentinel-2 composite of the Apuí clearing, 2025"
              width={1800}
              height={1350}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="w-full"
            />
            <span className="absolute left-3 top-3 rounded-md bg-forest-black/70 px-2.5 py-1 font-mono text-[11px] text-cream backdrop-blur-sm">
              Apuí, Amazonas · 2020 → 2025
            </span>
          </div>
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-[14px] text-paper-muted">
              From coordinates to traceable land evidence.
            </span>
            <Button href="/solutions/eudr-land-evidence#how-it-works" variant="ghost">
              See the full change timeline →
            </Button>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
