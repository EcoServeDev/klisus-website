/**
 * A KliSus Land Evidence Record mocked as a soft paper document card.
 * Clearly labeled as illustrative.
 */

import Button from "@/components/ui/button";
import DefList from "@/components/ui/def-list";

const SECTIONS = [
  "Plot",
  "Period",
  "Land use",
  "Change",
  "Sources",
  "Methodology",
  "Limitations",
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
        className={`relative mx-auto max-w-2xl rounded-2xl bg-paper p-6 text-ink shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)] sm:p-8 ${
          cta ? "pb-20 sm:pb-24" : ""
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-paper-muted">
            KliSus Land Evidence Record
          </p>
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="font-mono text-[11px] text-paper-muted">
              KLS-2026-00417 · 01 Sep 2026
            </p>
            <span className="rounded-md border border-paper-line px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-paper-muted">
              Illustrative sample
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <span
              key={s}
              className="rounded-md bg-green-wash px-2.5 py-1 text-[11px] font-semibold text-green-ink"
            >
              {s}
            </span>
          ))}
        </div>

        <DefList className="mt-6 border-t border-paper-line" rows={ROWS} />
      </div>

      {cta ? (
        <>
          <div
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper-surface to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <Button href="/plot-check/r/e12fe13023e0" variant="secondary">
              View Sample Report
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}
