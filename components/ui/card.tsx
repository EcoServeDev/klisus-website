/**
 * Squared hairline container — reserved for depicted document objects and
 * figures. Light by default; `dark` renders a dark plate.
 */
export default function Card({
  children,
  dark = false,
  className = "",
  style,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-[2px] border p-6 ${
        dark ? "dark-band border-line bg-surface-1" : "border-paper-line bg-paper-surface"
      } ${className}`}
    >
      {children}
    </div>
  );
}
