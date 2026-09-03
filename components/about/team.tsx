import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

/**
 * People behind KliSus. Placeholder identity by explicit decision — no fake
 * photos, no fake names; a dignified silhouette block stands in until real
 * team assets exist.
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
      className="flex aspect-[4/5] items-center justify-center rounded-xl bg-paper-surface"
    >
      <svg
        viewBox="0 0 96 96"
        className="h-20 w-20 opacity-15"
        fill="none"
        stroke="var(--paper-muted)"
        strokeWidth="2"
      >
        <circle cx="48" cy="34" r="14" />
        <path d="M20 82c0-15.5 12.5-26 28-26s28 10.5 28 26" />
      </svg>
    </div>
  );
}

export default function Team() {
  return (
    <section className="bg-paper-surface">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:pb-28">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            People behind KliSus
          </p>
          <h2
            className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-ink sm:text-[42px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            People behind KliSus
          </h2>
          <p
            className="mt-5 max-w-[50ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            A multidisciplinary team working across technology, environmental
            science, and strategy.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid gap-6 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <figure
              key={member.specialties}
              style={{ "--i": i } as CSSProperties}
              className="rounded-2xl bg-paper p-5 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
            >
              <PhotoPlaceholder />
              <figcaption className="px-1 pb-1 pt-5">
                <p className="text-[17px] font-semibold text-ink">[Name]</p>
                <p className="mt-1 text-[14px] text-paper-muted">{member.role}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-paper-muted">
                  {member.specialties}
                </p>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
