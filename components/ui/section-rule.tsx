/**
 * The dossier section opener: a full-bleed hairline rule carrying a mono
 * running label — `02 / WHAT WE DO` — and an optional right-hand marker
 * (folio, coordinate). Owns the section's a11y name when no visible h2
 * follows (srTitle).
 */
export default function SectionRule({
  n,
  label,
  marker,
  paper = false,
  srTitle,
}: {
  n?: string;
  label: string;
  marker?: string;
  paper?: boolean;
  srTitle?: string;
}) {
  return (
    <div className={paper ? "border-t border-paper-line" : "border-t border-line"}>
      {srTitle ? <h2 className="sr-only">{srTitle}</h2> : null}
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6">
        <span className={`voice-label ${paper ? "voice-label-paper" : ""}`}>
          {n ? `${n} / ` : ""}
          {label}
        </span>
        {marker ? (
          <span
            className={`voice-label hidden sm:block ${paper ? "voice-label-paper" : ""}`}
          >
            {marker}
          </span>
        ) : null}
      </div>
    </div>
  );
}
