import Eyebrow from "@/components/ui/eyebrow";

/**
 * 06 — RESPONSIBLE USE. The page's single paper event: the disclaimer set in
 * the report's own document palette, always fully visible, never collapsed.
 */
export default function ResponsibleUseSection() {
  return (
    <section className="paper-section bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Eyebrow n="06" paper className="mb-6">
          RESPONSIBLE USE
        </Eyebrow>
        <div className="max-w-2xl space-y-5 text-[16px] leading-relaxed">
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
    </section>
  );
}
