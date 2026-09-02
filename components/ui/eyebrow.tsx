/**
 * Inline mono label. Section-level openers use <SectionRule> now — Eyebrow
 * survives only for labels inside a composed block. Color follows the
 * voice-label context (light default, .dark-band override).
 */
export default function Eyebrow({
  children,
  n,
  className = "",
}: {
  children: React.ReactNode;
  n?: string;
  className?: string;
}) {
  return (
    <p className={`voice-label ${className}`}>
      {n ? `${n} / ` : null}
      {children}
    </p>
  );
}
