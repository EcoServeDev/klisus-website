import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";

/**
 * 04 — INTELLIGENCE BANNER. Quiet full-width interlude with a faint
 * contour/coordinate-grid drawing behind. Calm by design: one accent, no motion.
 */

function ContourGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 400"
      fill="none"
    >
      {/* coordinate grid */}
      {Array.from({ length: 11 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={i * 120}
          y1="0"
          x2={i * 120}
          y2="400"
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {Array.from({ length: 5 }, (_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 100}
          x2="1200"
          y2={i * 100}
          stroke="var(--line)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {/* contour lines */}
      <path
        d="M-20 300 C 160 250, 300 340, 480 290 S 820 190, 1000 250 S 1180 320, 1240 290"
        stroke="var(--line)"
        strokeWidth="1"
      />
      <path
        d="M-20 250 C 180 200, 320 290, 500 240 S 840 140, 1020 200 S 1180 270, 1240 240"
        stroke="var(--line)"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M-20 200 C 200 150, 340 240, 520 190 S 860 90, 1040 150 S 1180 220, 1240 190"
        stroke="var(--ndvi-green)"
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M-20 150 C 220 105, 360 190, 540 145 S 880 50, 1060 105 S 1180 170, 1240 145"
        stroke="var(--line)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

export default function IntelligenceBanner() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface-1">
      <ContourGrid />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
        <Eyebrow className="mb-4">Beyond verification</Eyebrow>
        <h2 className="font-display text-[28px] leading-[1.15] text-cream sm:text-[40px]">
          KliSus Intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted">
          Research and intelligence at the intersection of climate, land,
          nature, and economics.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/intelligence" variant="secondary" size="lg">
            Explore KliSus Intelligence →
          </Button>
        </div>
      </div>
    </section>
  );
}
