import Button from "@/components/ui/button";

/** 04 — Beyond verification: quiet dark interlude with contour texture. */
export default function IntelligenceBanner() {
  return (
    <section className="dark-band relative overflow-hidden bg-forest-black">
      <svg
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[12, 30, 48, 66, 84].map((y, i) => (
          <path
            key={i}
            d={`M 0 ${y} C 25 ${y - 9}, 50 ${y + 7}, 100 ${y - 4}`}
            fill="none"
            stroke={i === 2 ? "var(--ndvi-green)" : "var(--line)"}
            strokeOpacity={i === 2 ? 0.3 : 0.55}
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <p className="voice-label">Beyond verification</p>
        <h2 className="font-display mt-4 max-w-[16ch] text-[34px] text-cream md:text-[44px]">
          KliSus Intelligence
        </h2>
        <p className="voice-lede mt-4 max-w-[46ch] text-[18px] text-muted md:text-[20px]">
          Research and intelligence at the intersection of climate, land,
          nature, and economics.
        </p>
        <div className="mt-8">
          <Button href="/intelligence" variant="secondary" onDark>
            Explore KliSus Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
}
