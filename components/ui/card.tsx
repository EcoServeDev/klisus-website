/** Soft elevated surface. `dark` renders a dark-band card. */
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
      className={`rounded-xl p-7 ${
        dark
          ? "dark-band border border-line bg-surface-1"
          : "border border-paper-line/70 bg-paper shadow-[0_1px_2px_rgba(13,21,18,0.06),0_8px_24px_rgba(13,21,18,0.08)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
