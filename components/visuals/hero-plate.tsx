/**
 * Hero backdrop: Sentinel-2 plate + scrim + coordinate grid + one plot
 * polygon drawing itself in. An `absolute inset-0` layer stack — mount it
 * inside a `relative` hero section.
 */

import Image from "next/image";

const GRID = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];

export default function HeroPlate({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* (a) imagery plate */}
      <Image
        src="/hero-plate.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* (b) scrim */}
      <div className="absolute inset-0 bg-forest-black/55" />

      {/* (c) coordinate grid + labels */}
      <svg className="absolute inset-0 h-full w-full">
        {GRID.map((p) => (
          <line
            key={`v${p}`}
            x1={`${p}%`}
            y1="0"
            x2={`${p}%`}
            y2="100%"
            stroke="var(--cream)"
            strokeOpacity="0.045"
            strokeWidth="1"
          />
        ))}
        {GRID.map((p) => (
          <line
            key={`h${p}`}
            x1="0"
            y1={`${p}%`}
            x2="100%"
            y2={`${p}%`}
            stroke="var(--cream)"
            strokeOpacity="0.045"
            strokeWidth="1"
          />
        ))}
        <text
          x="9%"
          y="23%"
          fontSize="10"
          className="font-mono"
          fill="var(--cream)"
          fillOpacity="0.25"
        >
          3°08&#39; S&nbsp;&nbsp;60°01&#39; W
        </text>
        <text
          x="57%"
          y="31%"
          fontSize="10"
          className="font-mono"
          fill="var(--cream)"
          fillOpacity="0.25"
        >
          3°21&#39; S&nbsp;&nbsp;59°44&#39; W
        </text>
        <text
          x="73%"
          y="79%"
          fontSize="10"
          className="font-mono"
          fill="var(--cream)"
          fillOpacity="0.25"
        >
          3°52&#39; S&nbsp;&nbsp;59°30&#39; W
        </text>
      </svg>

      {/* (d) plot polygon — draws in once; the dash setup lives under the
          same reduced-motion guard as .animate-draw so the outline is never
          left hidden when motion is off. */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-plot-outline {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
        }
      `}</style>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="60.5,36.5 70.8,38.2 69.2,49.5 61.8,50.6 57.4,43.1"
          fill="var(--ndvi-green)"
          fillOpacity="0.06"
          stroke="var(--ndvi-green)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
          className="hero-plot-outline animate-draw"
        />
      </svg>

      {/* attribution */}
      <p className="absolute bottom-3 right-4 font-mono text-[10px] text-cream/40">
        Contains modified Copernicus Sentinel data (2026)
      </p>
    </div>
  );
}
