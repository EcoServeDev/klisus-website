import Button from "@/components/ui/button";

/**
 * 04 — INTELLIGENCE BANNER. Home's one quiet full-width moment — still
 * left-aligned, never centered. Faint contour/coordinate drawing behind;
 * one accent, no motion.
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
          stroke="var(--paper-line)"
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
          stroke="var(--paper-line)"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {/* contour lines */}
      <path
        d="M-20 300 C 160 250, 300 340, 480 290 S 820 190, 1000 250 S 1180 320, 1240 290"
        stroke="var(--paper-line)"
        strokeWidth="1"
      />
      <path
        d="M-20 250 C 180 200, 320 290, 500 240 S 840 140, 1020 200 S 1180 270, 1240 240"
        stroke="var(--paper-line)"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M-20 200 C 200 150, 340 240, 520 190 S 860 90, 1040 150 S 1180 220, 1240 190"
        stroke="var(--green-ink)"
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M-20 150 C 220 105, 360 190, 540 145 S 880 50, 1060 105 S 1180 170, 1240 145"
        stroke="var(--paper-line)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

export default function IntelligenceBanner() {
  return (
    <section className="relative overflow-hidden border-y border-paper-line bg-paper-surface">
      <ContourGrid />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <p className="voice-label">04 / BEYOND VERIFICATION</p>
        <h2 className="font-display mt-6 max-w-[14ch] text-[32px] text-ink md:text-[44px] lg:text-[56px]">
          KliSus Intelligence
        </h2>
        <p className="voice-lede mt-6 max-w-[42ch] text-[20px] text-paper-muted md:text-[24px]">
          Research and intelligence at the intersection of climate, land,
          nature, and economics.
        </p>
        <div className="mt-8">
          <Button href="/intelligence" variant="ghost">
            Explore KliSus Intelligence →
          </Button>
        </div>
      </div>
    </section>
  );
}
