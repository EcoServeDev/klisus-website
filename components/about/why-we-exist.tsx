import CornerTicks from "@/components/ui/corner-ticks";
import SectionRule from "@/components/ui/section-rule";

/**
 * 02 — WHY WE EXIST. A dossier page: running header rule, prose column,
 * the vision line on a green rail, registration ticks, folio row.
 */
export default function WhyWeExist() {
  return (
    <section className="paper-section bg-paper">
      <SectionRule paper n="02" label="KLISUS — WHY WE EXIST" marker="§ 02" />
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-12">
        <div className="relative px-2 py-6 sm:px-6">
          <CornerTicks paper />
          <h2 className="font-display max-w-[18ch] text-[32px] text-ink md:text-[44px] lg:text-[56px]">
            Environmental change is becoming an economic reality.
          </h2>
          <p className="mt-8 max-w-[68ch] text-[16px] leading-[1.7] text-ink">
            The world is generating unprecedented amounts of environmental data,
            yet decision-makers still lack accessible, reliable, and actionable
            intelligence.
          </p>
          <p className="mt-4 max-w-[68ch] text-[16px] leading-[1.7] text-ink">
            KliSus was founded on a simple belief: environmental information
            should be transformed into evidence that can inform real-world
            decisions.
          </p>
          <p className="voice-lede mt-12 max-w-[36ch] border-l-2 border-ndvi-green pl-6 text-[26px] text-ink md:text-[32px]">
            Our vision is a world where environmental decisions are informed by
            evidence.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-paper-line pt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-paper-muted">
          <span>KLISUS — ABOUT</span>
          <span>PAGE 01</span>
        </div>
      </div>
    </section>
  );
}
