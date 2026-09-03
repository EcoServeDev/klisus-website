import Image from "next/image";
import Button from "@/components/ui/button";

/**
 * 03 — Product panel (Ahya-style): blurred satellite imagery carrying the
 * two-tone product lockup on the left, copy on deep forest on the right.
 */
export default function EudrSolution() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-forest-black lg:min-h-[560px]">
        <Image
          src="/plates/apui-tc-2025.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="scale-110 object-cover opacity-80 blur-[6px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-forest-black/35" aria-hidden="true" />
        <p className="relative px-8 text-center">
          <span className="font-display block text-[44px] font-medium leading-none text-ndvi-green sm:text-[56px]">
            Land Evidence
          </span>
          <span className="mt-3 block text-[18px] font-medium text-cream">by KliSus</span>
        </p>
      </div>

      <div className="dark-band bg-forest-black px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
        <p className="kicker">Our first solution</p>
        <h2 className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-cream sm:text-[40px]">
          Understand the land behind your supply chain.
        </h2>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted">
          KliSus uses satellite and geospatial analysis to assess plot-level
          land-use history and identify relevant environmental change
          indicators. The resulting evidence can support EUDR due-diligence
          processes and internal supply-chain review.
        </p>
        <p className="mt-6 max-w-[52ch] text-[15px] text-cream/80">
          From coordinates to traceable land evidence.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/solutions/eudr-land-evidence" onDark>
            Explore EUDR Land Evidence
          </Button>
          <Button href="/solutions/eudr-land-evidence#how-it-works" variant="ghost" onDark>
            See the change timeline
          </Button>
        </div>
      </div>
    </section>
  );
}
