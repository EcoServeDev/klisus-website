import type { CSSProperties } from "react";
import EvidencePlate from "@/components/visuals/evidence-plate";
import Reveal from "@/components/visuals/reveal";
import { PLATES } from "@/lib/plates";

/**
 * RESPONSIBLE USE — always fully visible, never collapsed. The Nyeri
 * agroforestry plate stays with it: it illustrates the false-positive
 * problem the disclaimer describes.
 */
export default function ResponsibleUseSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <h2 className="sr-only">Responsible use</h2>
      <Reveal>
        <div style={{ "--i": 0 } as CSSProperties}>
          <EvidencePlate plate={PLATES["nyeri-tc"]} n="06" className="mb-12" />
        </div>
        <div
          className="rounded-2xl bg-paper p-8 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] sm:p-12"
          style={{ "--i": 1 } as CSSProperties}
        >
          <p className="kicker">Responsible use</p>
          <div className="mt-6 max-w-[68ch] space-y-5 leading-relaxed">
            <p className="text-[17px] text-ink">
              KliSus provides analytical information and evidence to support
              customer due-diligence processes. It does not constitute legal
              advice, a legal determination, certification, or a guarantee of
              compliance with the EUDR.
            </p>
            <p className="text-[16px] text-paper-muted">
              Customers remain responsible for conducting their own due diligence
              and fulfilling their regulatory obligations.
            </p>
            <p className="text-[16px] text-paper-muted">
              KliSus EUDR Land Evidence is designed to support — not replace —
              customer due-diligence processes. Analytical findings are subject
              to the available data, submitted coordinates or boundaries,
              assessment period, methodology, and stated limitations.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
