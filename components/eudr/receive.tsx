import type { CSSProperties } from "react";
import EvidenceRecordMock from "@/components/visuals/evidence-record-mock";
import Reveal from "@/components/visuals/reveal";

/** WHAT YOU RECEIVE: the report mock as a centered exhibit. */
export default function ReceiveSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          What you receive
        </p>
        <h2
          className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          A structured view of the land.
        </h2>
        <p
          className="mt-4 text-[15px] font-semibold text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          KliSus Land Evidence Report
        </p>
        <div className="mt-8 max-w-2xl" style={{ "--i": 3 } as CSSProperties}>
          <EvidenceRecordMock />
        </div>
        <p
          className="mt-8 text-[15px] text-paper-muted"
          style={{ "--i": 4 } as CSSProperties}
        >
          Structured for review. Built for traceability.
        </p>
      </Reveal>
    </section>
  );
}
