import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const CATEGORIES = [
  "Memberships",
  "Affiliations",
  "Research Collaborations",
  "Strategic Partnerships",
  "Technology Partnerships",
];

export default function Ecosystem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <h2 className="sr-only">Institutional and ecosystem engagement</h2>
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Institutional &amp; ecosystem engagement
        </p>
        <p
          className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-paper-muted"
          style={{ "--i": 1 } as CSSProperties}
        >
          KliSus engages with organisations and initiatives working across
          climate action, environmental integrity, sustainable development,
          research, and innovation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" style={{ "--i": 2 } as CSSProperties}>
          {CATEGORIES.map((category) => (
            <span
              key={category}
              className="rounded-full bg-paper px-4 py-2 text-[14px] font-medium text-paper-muted shadow-[0_1px_2px_rgba(13,21,18,0.05)]"
            >
              {category}
            </span>
          ))}
        </div>
        <p
          className="mt-6 text-[14px] text-paper-muted"
          style={{ "--i": 3 } as CSSProperties}
        >
          Relationships are listed here as they are established.
        </p>
      </Reveal>
    </section>
  );
}
