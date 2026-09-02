/**
 * Numbered workflow step: mono numeral in green, left rail, quiet body.
 * `active` fills the rail (used by the scroll-linked EUDR workflow).
 */
export default function WorkflowStep({
  n,
  title,
  children,
  active = false,
}: {
  n: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`border-l-2 pl-5 transition-colors ${
        active ? "border-ndvi-green" : "border-line"
      }`}
    >
      <p className="font-mono text-[12px] text-ndvi-green">{n}</p>
      <h3 className="mt-1 text-[20px] font-medium text-cream">{title}</h3>
      {children ? (
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{children}</p>
      ) : null}
    </div>
  );
}
