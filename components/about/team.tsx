import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

/**
 * 03 — PEOPLE BEHIND KLISUS. Three real team cards with placeholder identity
 * ([Name] and photo blocks stay placeholders by explicit decision — no fake
 * photos, no fake names). A quiet person silhouette keeps the block dignified.
 */

const TEAM = [
  {
    role: "Founder & [Role]",
    specialties: "Climate strategy · Policy · Sustainability",
  },
  {
    role: "[Role]",
    specialties: "Geospatial technology · Data science",
  },
  {
    role: "[Role]",
    specialties: "Environmental science · Land systems",
  },
];

function PhotoPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[4/5] items-center justify-center rounded-sm border border-line bg-surface-2"
    >
      <svg
        viewBox="0 0 96 96"
        className="h-20 w-20 opacity-15"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="2"
      >
        <circle cx="48" cy="34" r="14" />
        <path d="M20 82c0-15.5 12.5-26 28-26s28 10.5 28 26" />
      </svg>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.08em] text-muted/60">
        [PHOTO]
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          n="03"
          eyebrow="PEOPLE BEHIND KLISUS"
          title="People behind KliSus"
          lede="A multidisciplinary team working across technology, environmental science, and strategy."
        />
        <div className="stagger mt-14 grid gap-4 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <Card key={member.specialties} style={{ "--i": i } as React.CSSProperties}>
              <PhotoPlaceholder />
              <h3 className="mt-5 text-[16px] font-medium text-cream">[Name]</h3>
              <p className="mt-1 font-mono text-[13px] text-muted">{member.role}</p>
              <p className="mt-3 font-mono text-[12px] leading-relaxed text-muted">
                {member.specialties}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
