/**
 * A KliSus Land Evidence Record mocked in the paper palette, sitting on the
 * dark ground like a printed document. Clearly watermarked as illustrative.
 */

import Button from "@/components/ui/button";
import DefList from "@/components/ui/def-list";
import Tag from "@/components/ui/tag";

const SECTIONS = [
  "PLOT",
  "PERIOD",
  "LAND USE",
  "CHANGE",
  "SOURCES",
  "METHODOLOGY",
  "LIMITATIONS",
];

const ROWS = [
  {
    term: "Production plot",
    def: "17.4521° N, 78.3845° E — submitted boundary, 3.2 ha",
  },
  { term: "Assessed area", def: "Defined analysis area, 4.0 ha buffer" },
  { term: "Analysis period", def: "31 Dec 2020 → 01 Sep 2026" },
  {
    term: "Satellite observations",
    def: "Sentinel-2 L2A · 214 scenes · cloud-masked",
  },
  {
    term: "Land-use assessment",
    def: "Established tree crop indicated across period",
  },
  {
    term: "Forest-cover change indicators",
    def: "No relevant change indicator identified",
  },
  {
    term: "Data & methodology",
    def: "Sources, methods, and parameters documented",
  },
  {
    term: "Limitations & review notes",
    def: "Data-quality and interpretation considerations stated",
  },
];

export default function EvidenceRecordMock({
  className = "",
  cta = true,
}: {
  className?: string;
  cta?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`mx-auto max-w-2xl rounded-sm border border-paper-line bg-paper p-6 text-ink shadow-2xl sm:p-8 ${
          cta ? "pb-20 sm:pb-24" : ""
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-muted">
            KliSus Land Evidence Record
          </p>
          <div className="text-right">
            <p className="font-mono text-[12px] text-paper-muted">
              KLS-2026-00417 · 01 Sep 2026
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-paper-muted">
              Illustrative sample
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <Tag key={s} tone="paper">
              {s}
            </Tag>
          ))}
        </div>

        <DefList paper className="mt-6 border-t border-paper-line" rows={ROWS} />
      </div>

      {cta ? (
        <>
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest-black to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <Button href="/plot-check/r/e12fe13023e0" variant="secondary">
              View Sample Report →
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}
