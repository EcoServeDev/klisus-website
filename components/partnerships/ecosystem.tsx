import BracketLabel from "@/components/ui/bracket-label";
import SectionRule from "@/components/ui/section-rule";

/**
 * 03 — INSTITUTIONAL & ECOSYSTEM ENGAGEMENT. No real relationships exist yet,
 * so this renders the five engagement categories as bracket labels with an
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
    <section>
      <SectionRule
        n="03"
        label="INSTITUTIONAL &amp; ECOSYSTEM ENGAGEMENT"
        srTitle="Institutional and ecosystem engagement"
      />
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-8">
        <p className="max-w-[62ch] text-[16px] leading-relaxed text-paper-muted">
          KliSus engages with organisations and initiatives working across
          climate action, environmental integrity, sustainable development,
          research, and innovation.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {CATEGORIES.map((category) => (
            <BracketLabel key={category}>{category}</BracketLabel>
          ))}
        </div>
        <p className="mt-6 font-mono text-[12px] text-paper-muted">
          Relationships are listed here as they are established.
        </p>
      </div>
    </section>
  );
}
