/**
 * Inline mono label. Section-level openers use <SectionRule> now — Eyebrow
 * survives only for labels inside a composed block.
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
    <p className={`voice-label ${paper ? "voice-label-paper" : ""} ${className}`}>
      {n ? `${n} / ` : null}
      {children}
    </p>
  );
}
