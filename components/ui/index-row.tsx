import Link from "next/link";

/**
 * Numbered ruled index row — the dossier's replacement for card grids.
 * Light by default (the page is paper); `dark` for dark bands.
 * Wrap sets in <IndexList>. Hover only when it's a link.
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
  dark = false,
}: {
  n: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  annotation?: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  const lineColor = dark ? "border-line" : "border-paper-line";
  const inner = (
    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 sm:grid-cols-[3.5rem_minmax(11rem,16rem)_1fr]">
      <span className={`font-mono text-[13px] ${dark ? "text-muted" : "text-paper-muted"}`}>
        {n}
      </span>
      <h3 className={`text-[18px] font-medium ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h3>
      <div
        className={`col-span-2 mt-2 flex items-baseline gap-x-3 text-[14px] leading-relaxed sm:col-span-1 sm:mt-0 ${
          dark ? "text-muted" : "text-paper-muted"
        }`}
      >
        <div className="max-w-[56ch]">{children}</div>
        {annotation ? (
          <>
            <span className="dot-leader hidden sm:block" aria-hidden="true" />
            <span className="hidden shrink-0 font-mono text-[12px] sm:block">{annotation}</span>
          </>
        ) : null}
      </div>
    </div>
  );

  return (
    <li className={`border-t ${lineColor} last:border-b ${dark ? "dark-band" : ""}`}>
      {href ? (
        <Link
          href={href as never}
          className={`block transition-colors ${dark ? "hover:bg-surface-1" : "hover:bg-paper-surface"}`}
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </li>
  );
}
