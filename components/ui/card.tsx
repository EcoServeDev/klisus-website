/**
 * Squared hairline container — reserved for depicted document objects and
 * figures. Not for enumerable content (use IndexRow), no hover on statics.
 */
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
      className={`rounded-[2px] border p-6 ${
        paper ? "border-paper-line bg-paper-surface" : "border-line bg-surface-1"
      } ${className}`}
    >
      {children}
    </div>
  );
}
