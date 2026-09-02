/** Quiet hairline card. Hover shifts the border only — nothing moves. */
export default function Card({
  children,
  paper = false,
  className = "",
  style,
}: {
  children: React.ReactNode;
  paper?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-sm border p-6 transition-colors ${
        paper
          ? "border-paper-line bg-paper-surface"
          : "border-line bg-surface-1 hover:border-ndvi-green/40"
      } ${className}`}
    >
      {children}
    </div>
  );
}
