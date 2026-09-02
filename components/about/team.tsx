import CornerTicks from "@/components/ui/corner-ticks";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";

/**
 * 03 — PEOPLE BEHIND KLISUS. Survey figures with placeholder identity
 * ([Name] and photo blocks stay placeholders by explicit decision — no fake
 * photos, no fake names). Ruled caption rows, no cards, no hover.
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
      className="relative flex aspect-[4/5] items-center justify-center rounded-[2px] border border-paper-line bg-paper-surface"
    >
      <CornerTicks />
      <svg
        viewBox="0 0 96 96"
        className="h-20 w-20 opacity-20"
        fill="none"
        stroke="var(--paper-muted)"
        strokeWidth="2"
      >
        <circle cx="48" cy="34" r="14" />
        <path d="M20 82c0-15.5 12.5-26 28-26s28 10.5 28 26" />
      </svg>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.08em] text-paper-muted">
        [PHOTO]
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <section>
      <SectionRule n="03" label="PEOPLE BEHIND KLISUS" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-28">
        <SectionHeading
          title="People behind KliSus"
          lede="A multidisciplinary team working across technology, environmental science, and strategy."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {TEAM.map((member) => (
            <figure key={member.specialties}>
              <PhotoPlaceholder />
              <figcaption className="mt-5 divide-y divide-paper-line border-b border-paper-line">
                <p className="py-2 text-[16px] font-medium text-ink">[Name]</p>
                <p className="py-2 font-mono text-[12px] text-paper-muted">{member.role}</p>
                <p className="py-2 font-mono text-[11px] leading-relaxed text-paper-muted">
                  {member.specialties}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
