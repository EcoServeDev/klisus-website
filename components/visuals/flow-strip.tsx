/**
 * Data-voice sequence: LOCATION → HISTORY → EVIDENCE.
 * Horizontal (wrapping) by default; vertical stacks the items left-aligned
 * with `↓` mono connectors — the dossier margin-flow treatment.
 */

export default function FlowStrip({
  items,
  direction = "horizontal",
  className = "",
}: {
  items: string[];
  direction?: "horizontal" | "vertical";
  className?: string;
}) {
  if (direction === "vertical") {
    return (
      <div className={`flex flex-col items-start gap-y-1 ${className}`}>
        {items.map((item, i) => (
          <div key={item} className="flex flex-col items-start gap-y-1">
            {i > 0 ? (
              <span className="font-mono text-[12px] text-paper-muted" aria-hidden="true">
                ↓
              </span>
            ) : null}
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink">
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-[0.08em] text-ink ${className}`}
    >
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-x-3">
          {i > 0 ? (
            <span className="text-paper-muted" aria-hidden="true">
              →
            </span>
          ) : null}
          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}
