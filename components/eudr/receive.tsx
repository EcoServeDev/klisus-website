import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import EvidenceRecordMock from "@/components/visuals/evidence-record-mock";

/** 03 — WHAT YOU RECEIVE: the paper report mock, left-anchored like a filed exhibit. */
export default function ReceiveSection() {
  return (
    <section>
      <SectionRule n="03" label="WHAT YOU RECEIVE" />
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-10 sm:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading title="A structured view of the land." />
          <p className="voice-label mb-4 mt-12">KliSus Land Evidence Report</p>
          <div className="rounded-[2px] border border-paper-line bg-paper-surface p-4 sm:p-6">
            <EvidenceRecordMock />
          </div>
          <p className="mt-8 font-mono text-[13px] text-paper-muted">
            NOTE — Structured for review. Built for traceability.
          </p>
        </div>
      </div>
    </section>
  );
}
