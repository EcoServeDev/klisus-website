/**
 * Ledger rows: mono term … dot-leader … value. Stacks plain on mobile,
 * keeps dl/dt/dd semantics. Serves the report mock and stat rows.
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
      className={`divide-y ${paper ? "divide-paper-line" : "divide-line"} ${className}`}
    >
      {rows.map((row, i) => (
        <div key={i} className="py-3 sm:flex sm:items-baseline">
          <dt
            className={`shrink-0 font-mono text-[13px] ${
              paper ? "text-ink" : "text-cream"
            }`}
          >
            {row.term}
          </dt>
          <span
            className={`dot-leader hidden sm:block ${paper ? "dot-leader-paper" : ""}`}
            aria-hidden="true"
          />
          <dd
            className={`mt-1 min-w-0 text-[14px] leading-relaxed sm:mt-0 sm:max-w-[55%] sm:text-right ${
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
