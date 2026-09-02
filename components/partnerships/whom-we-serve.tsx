import BracketLabel from "@/components/ui/bracket-label";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";

/**
 * 02 — WHOM WE SERVE. Three-column ruled table — one instrument panel,
 * bracket-labelled.
 */

const AUDIENCES = [
  {
    tag: "BUSINESSES",
    body: "Environmental risk, supply-chain due diligence, and climate and nature claims.",
  },
  {
    tag: "INSTITUTIONS",
    body: "Regulatory, policy, operational, and strategic environmental intelligence.",
  },
  {
    tag: "INVESTORS",
    body: "Environmental factors, due diligence, and investment research.",
  },
];

export default function WhomWeServe() {
  return (
    <section>
      <SectionRule n="02" label="WHOM WE SERVE" />
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-8">
        <SectionHeading title="Built for decision-makers." />
        <div className="mt-12 grid divide-y divide-paper-line border-y border-paper-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {AUDIENCES.map((audience) => (
            <div key={audience.tag} className="p-6">
              <BracketLabel>{audience.tag}</BracketLabel>
              <p className="mt-4 text-[14px] leading-relaxed text-paper-muted">{audience.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
