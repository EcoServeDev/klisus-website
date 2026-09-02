/**
 * Report-contents table: mono terms, readable definitions, hairline rows.
 * Serves "What you receive", assessment-output states, and stat rows.
 */
export default function DefList({
  rows,
  paper = false,
  className = "",
}: {
  rows: { term: React.ReactNode; def: React.ReactNode; extra?: React.ReactNode }[];
  paper?: boolean;
  className?: string;
}) {
  return (
    <dl
      className={`divide-y ${
        paper ? "divide-paper-line" : "divide-line"
      } ${className}`}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid gap-1 py-3 sm:grid-cols-[minmax(11rem,14rem)_1fr] sm:gap-6"
        >
          <dt
            className={`font-mono text-[13px] ${
              paper ? "text-ink" : "text-cream"
            }`}
          >
            {row.term}
          </dt>
          <dd
            className={`text-[14px] leading-relaxed ${
              paper ? "text-paper-muted" : "text-muted"
            }`}
          >
            {row.def}
            {row.extra}
          </dd>
        </div>
      ))}
    </dl>
  );
}
