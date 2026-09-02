/** Registration ticks — four `+` marks at the corners of a relative parent. */
export default function CornerTicks({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "var(--line)" : "var(--paper-line)";
  const tick = (pos: string) => (
    <svg
      key={pos}
      className={`absolute h-2 w-2 ${pos}`}
      viewBox="0 0 8 8"
      aria-hidden="true"
    >
      <path d="M4 0v8M0 4h8" stroke={stroke} strokeWidth="1" />
    </svg>
  );
  return (
    <span aria-hidden="true">
      {tick("left-2 top-2")}
      {tick("right-2 top-2")}
      {tick("bottom-2 left-2")}
      {tick("bottom-2 right-2")}
    </span>
  );
}
