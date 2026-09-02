import CornerTicks from "@/components/ui/corner-ticks";
import SectionRule from "@/components/ui/section-rule";
import EvidencePlate from "@/components/visuals/evidence-plate";
import { PLATES } from "@/lib/plates";

/**
 * 06 — RESPONSIBLE USE. The page's single paper event, set as a dossier
 * spread: running header rule, prose column, registration ticks, folio.
 * Always fully visible, never collapsed.
 */
export default function ResponsibleUseSection() {
  return (
    <section className="bg-paper-surface">
      <SectionRule
        n="06"
        label="KLISUS — RESPONSIBLE USE"
        marker="§ 06"
        srTitle="Responsible use"
      />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-24">
        <EvidencePlate plate={PLATES["nyeri-tc"]} n="06" className="mb-10" />
        <div className="relative py-8">
          <CornerTicks />
          <div className="mx-auto max-w-[68ch] space-y-5 px-6 text-[16px] leading-[1.7] sm:px-10">
            <p className="text-ink">
              KliSus provides analytical information and evidence to support
              customer due-diligence processes. It does not constitute legal
              advice, a legal determination, certification, or a guarantee of
              compliance with the EUDR.
            </p>
            <p className="text-paper-muted">
              Customers remain responsible for conducting their own due diligence
              and fulfilling their regulatory obligations.
            </p>
            <p className="text-paper-muted">
              KliSus EUDR Land Evidence is designed to support — not replace —
              customer due-diligence processes. Analytical findings are subject
              to the available data, submitted coordinates or boundaries,
              assessment period, methodology, and stated limitations.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-paper-line pt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-paper-muted">
          <span>KLISUS EUDR LAND EVIDENCE</span>
          <span>PAGE 01</span>
        </div>
      </div>
    </section>
  );
}
