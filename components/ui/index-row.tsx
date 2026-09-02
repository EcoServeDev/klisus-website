import Link from "next/link";

/**
 * Numbered ruled index row — the dossier's replacement for card grids.
 * Wrap sets in <ul className="list-none">. Hover only when it's a link.
 */
export function IndexList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={`list-none ${className}`}>{children}</ul>;
}

export default function IndexRow({
  n,
  title,
  children,
  annotation,
  href,
  paper = false,
}: {
  n: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  annotation?: React.ReactNode;
  href?: string;
  paper?: boolean;
}) {
  const lineColor = paper ? "border-paper-line" : "border-line";
  const inner = (
    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 sm:grid-cols-[3.5rem_minmax(11rem,16rem)_1fr]">
      <span className={`font-mono text-[13px] ${paper ? "text-paper-muted" : "text-muted"}`}>
        {n}
      </span>
      <h3 className={`text-[18px] font-medium ${paper ? "text-ink" : "text-cream"}`}>
        {title}
      </h3>
      <div
        className={`col-span-2 mt-2 flex items-baseline gap-x-3 text-[14px] leading-relaxed sm:col-span-1 sm:mt-0 ${
          paper ? "text-paper-muted" : "text-muted"
        }`}
      >
        <div className="max-w-[56ch]">{children}</div>
        {annotation ? (
          <>
            <span className={`dot-leader hidden sm:block ${paper ? "dot-leader-paper" : ""}`} aria-hidden="true" />
            <span className="hidden shrink-0 font-mono text-[12px] sm:block">{annotation}</span>
          </>
        ) : null}
      </div>
    </div>
  );

  return (
    <li className={`border-t ${lineColor} last:border-b`}>
      {href ? (
        <Link
          href={href as never}
          className={`block transition-colors ${paper ? "hover:bg-paper-surface" : "hover:bg-surface-1"}`}
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </li>
  );
}
