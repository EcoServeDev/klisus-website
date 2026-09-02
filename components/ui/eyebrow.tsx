/**
 * Eyebrow signature: 11px mono uppercase, wide tracked. Optional section
 * numeral renders the content doc's "01 — HERO" rhythm on the page itself.
 */
export default function Eyebrow({
  children,
  n,
  paper = false,
  className = "",
}: {
  children: React.ReactNode;
  n?: string;
  paper?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${paper ? "eyebrow-paper" : ""} ${className}`}>
      {n ? `${n} — ` : null}
      {children}
    </p>
  );
}
