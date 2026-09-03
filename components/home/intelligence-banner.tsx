import type { CSSProperties } from "react";
import Button from "@/components/ui/button";
import Reveal from "@/components/visuals/reveal";

/** Full-viewport gradient panel (Ahya AI analog). */
export default function IntelligenceBanner() {
  return (
    <section className="dark-band stack-panel bg-[linear-gradient(100deg,#123a34_0%,#12314c_55%,#0c1e3e_100%)]">
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[18, 42, 66, 88].map((y, i) => (
          <path
            key={i}
            d={`M 0 ${y} C 30 ${y - 10}, 55 ${y + 8}, 100 ${y - 5}`}
            fill="none"
            stroke={i === 1 ? "#7fd6c2" : "#3a5a6a"}
            strokeOpacity={i === 1 ? 0.35 : 0.4}
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Beyond verification
          </p>
          <h2
            className="font-display mt-4 text-[38px] font-medium text-paper sm:text-[52px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            KliSus <span className="text-[#7fd6c2]">Intelligence</span>
          </h2>
          <p
            className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-cream/85"
            style={{ "--i": 2 } as CSSProperties}
          >
            Research and intelligence at the intersection of climate, land,
            nature, and economics.
          </p>
        </Reveal>
        <Reveal>
          <Button href="/intelligence" variant="secondary" size="lg" onDark>
            Explore KliSus Intelligence
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
