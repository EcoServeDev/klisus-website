/**
 * Ledger rows: mono term … dot-leader … value. Stacks plain on mobile,
 * keeps dl/dt/dd semantics. Light by default; `dark` for dark bands.
 */
export default function DefList({
  rows,
  dark = false,
  className = "",
}: {
  rows: { term: React.ReactNode; def: React.ReactNode; extra?: React.ReactNode }[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <dl
      className={`divide-y ${dark ? "dark-band divide-line" : "divide-paper-line"} ${className}`}
    >
      {rows.map((row, i) => (
        <div key={i} className="py-3 sm:flex sm:items-baseline">
          <dt
            className={`shrink-0 font-mono text-[13px] ${dark ? "text-cream" : "text-ink"}`}
          >
            {row.term}
          </dt>
          <span className="dot-leader hidden sm:block" aria-hidden="true" />
          <dd
            className={`mt-1 min-w-0 text-[14px] leading-relaxed sm:mt-0 sm:max-w-[55%] sm:text-right ${
              dark ? "text-muted" : "text-paper-muted"
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
