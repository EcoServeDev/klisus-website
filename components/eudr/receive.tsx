import SectionHeading from "@/components/ui/section-heading";
import EvidenceRecordMock from "@/components/visuals/evidence-record-mock";

/** 03 — WHAT YOU RECEIVE: the paper report mock, framed like a document. */
export default function ReceiveSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading n="03" eyebrow="WHAT YOU RECEIVE" title="A structured view of the land." />
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="eyebrow mb-4 text-center">KliSus Land Evidence Report</p>
          <EvidenceRecordMock />
          <p className="mt-8 text-center text-[16px] text-cream">
            Structured for review. Built for traceability.
          </p>
        </div>
      </div>
    </section>
  );
}
