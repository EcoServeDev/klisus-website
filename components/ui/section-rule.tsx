/**
 * The dossier section opener: a full-bleed hairline rule carrying a mono
 * running label — `02 / WHAT WE DO` — and an optional right-hand marker.
 * Light by default; `dark` for dark bands. Owns the section's a11y name
 * when no visible h2 follows (srTitle).
 */
export default function SectionRule({
  n,
  label,
  marker,
  dark = false,
  srTitle,
}: {
  n?: string;
  label: string;
  marker?: string;
  dark?: boolean;
  srTitle?: string;
}) {
  return (
    <div className={dark ? "dark-band border-t border-line" : "border-t border-paper-line"}>
      {srTitle ? <h2 className="sr-only">{srTitle}</h2> : null}
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6">
        <span className="voice-label">
          {n ? `${n} / ` : ""}
          {label}
        </span>
        {marker ? <span className="voice-label hidden sm:block">{marker}</span> : null}
      </div>
    </div>
  );
}
