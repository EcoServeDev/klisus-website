import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Reveal from "@/components/visuals/reveal";

/** Full-viewport product panel: blurred imagery + lockup left, copy right. */
export default function EudrSolution() {
  return (
    <section className="stack-panel bg-forest-black lg:flex-row lg:items-stretch">
      <div className="relative flex min-h-[380px] flex-1 items-center justify-center overflow-hidden lg:min-h-0">
        <Image
          src="/plates/apui-tc-2025.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="scale-110 object-cover opacity-80 blur-[6px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-forest-black/35" aria-hidden="true" />
        <Reveal className="relative px-8 text-center">
          <span
            className="font-display block text-[46px] font-medium leading-none text-ndvi-green sm:text-[60px]"
            style={{ "--i": 0 } as CSSProperties}
          >
            Land Evidence
          </span>
          <span
            className="mt-3 block text-[18px] font-medium text-cream"
            style={{ "--i": 1 } as CSSProperties}
          >
            by KliSus
          </span>
        </Reveal>
      </div>

      <div className="dark-band flex flex-1 items-center bg-forest-black">
        <Reveal className="px-8 py-16 sm:px-12 lg:px-16">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Our first solution
          </p>
          <h2
            className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-cream sm:text-[40px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Understand the land behind your supply chain.
          </h2>
          <p
            className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            KliSus uses satellite and geospatial analysis to assess plot-level
            land-use history and identify relevant environmental change
            indicators. The resulting evidence can support EUDR due-diligence
            processes and internal supply-chain review.
          </p>
          <div className="mt-8 flex gap-10" style={{ "--i": 3 } as CSSProperties}>
            <div>
              <p className="stat-num text-[34px] text-paper">10 m</p>
              <p className="mt-1 text-[13px] text-muted">imagery resolution</p>
            </div>
            <div>
              <p className="stat-num text-[34px] text-paper">2020</p>
              <p className="mt-1 text-[13px] text-muted">EUDR cutoff baseline</p>
            </div>
          </div>
          <div
            className="mt-9 flex flex-wrap items-center gap-4"
            style={{ "--i": 4 } as CSSProperties}
          >
            <Button href="/solutions/eudr-land-evidence" onDark>
              Explore EUDR Land Evidence
            </Button>
            <Button href="/solutions/eudr-land-evidence#how-it-works" variant="ghost" onDark>
              See the change timeline
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
