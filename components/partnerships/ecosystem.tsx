import Eyebrow from "@/components/ui/eyebrow";
import Tag from "@/components/ui/tag";

/**
 * 03 — INSTITUTIONAL & ECOSYSTEM ENGAGEMENT. No real relationships exist yet,
 * so this renders the five engagement categories as neutral chips with an
 * honest empty-state line — never placeholder or fake logos.
 */

const CATEGORIES = [
  "MEMBERSHIPS",
  "AFFILIATIONS",
  "RESEARCH COLLABORATIONS",
  "STRATEGIC PARTNERSHIPS",
  "TECHNOLOGY PARTNERSHIPS",
];

export default function Ecosystem() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="sr-only">Institutional and ecosystem engagement</h2>
          <Eyebrow n="03" className="mb-4">
            INSTITUTIONAL &amp; ECOSYSTEM ENGAGEMENT
          </Eyebrow>
          <p className="text-[16px] leading-relaxed text-muted">
            KliSus engages with organisations and initiatives working across
            climate action, environmental integrity, sustainable development,
            research, and innovation.
          </p>
        </div>
        <div className="stagger mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((category, i) => (
            <span key={category} style={{ "--i": i } as React.CSSProperties} className="inline-flex">
              <Tag>{category}</Tag>
            </span>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-muted">
          Relationships are listed here as they are established.
        </p>
      </div>
    </section>
  );
}
