/**
 * Horizontal data-voice sequence: LOCATION → HISTORY → EVIDENCE.
 * Wraps on narrow screens; separators are decorative.
 */

export default function FlowStrip({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-wide text-cream ${className}`}
    >
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-x-3">
          {i > 0 ? (
            <span className="text-muted" aria-hidden="true">
              →
            </span>
          ) : null}
          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}
