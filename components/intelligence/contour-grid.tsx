/**
 * Decorative backdrop for the Intelligence hero: a faint coordinate grid with
 * survey crosshairs, elevation contours, and two mono coordinate labels — the
 * cartographic "intelligence unit" texture. Pure presentational SVG; hidden
 * from assistive tech. All strokes ride existing tokens (--line, --muted,
 * --ndvi-green) at low opacity so the type stays in charge.
 */
export default function ContourGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1200 640"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="intel-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M80 0H0V80" stroke="var(--line)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* coordinate grid */}
      <rect width="1200" height="640" fill="url(#intel-grid)" opacity="0.35" />

      {/* survey crosshairs on grid intersections */}
      <g stroke="var(--muted)" strokeWidth="1" opacity="0.35">
        <path d="M240 152v16M232 160h16" />
        <path d="M560 392v16M552 400h16" />
        <path d="M1040 472v16M1032 480h16" />
        <path d="M880 72v16M872 80h16" />
      </g>

      {/* nested elevation contours, upper right */}
      <g stroke="var(--ndvi-green)" strokeWidth="1" opacity="0.12">
        <path d="M940 90c110-20 210 40 220 140s-80 170-200 165-180-85-165-175c13-80 65-117 145-130Z" />
        <path d="M945 130c80-12 160 30 168 105s-63 125-151 121-132-61-120-130c10-58 43-87 103-96Z" />
        <path d="M950 170c55-8 108 22 113 70s-41 80-99 77-72-40-63-85c7-35 24-56 49-62Z" />
        <path d="M953 208c32-4 60 13 63 37s-21 40-50 38-43-22-37-45c4-16 12-28 24-30Z" />
      </g>

      {/* open contour band, lower left */}
      <g stroke="var(--ndvi-green)" strokeWidth="1" opacity="0.09">
        <path d="M-20 520c140-40 280-10 400-50 90-30 160-20 260-50" />
        <path d="M-20 560c150-35 290-5 415-45 90-28 165-20 265-50" />
        <path d="M-20 600c150-30 295-2 425-40 95-27 170-20 270-48" />
      </g>

      {/* mono coordinate callouts */}
      <g
        fill="var(--muted)"
        opacity="0.5"
        fontSize="10"
        letterSpacing="0.08em"
        fontFamily="var(--font-plex-mono), monospace"
      >
        <text x="252" y="150">25.2048° N</text>
        <text x="572" y="390">55.2708° E</text>
      </g>
    </svg>
  );
}
