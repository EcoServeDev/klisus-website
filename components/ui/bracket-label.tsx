/**
 * Boxed state label, dossier-style: `[ REVIEW REQUIRED ]`.
 * Light tones use the ink-side signal colors (AA on paper); the `-dark`
 * tones are for dark bands (telemetry strip, scene panel).
 */

type Tone =
  | "neutral"
  | "green"
  | "amber"
  | "neutral-dark"
  | "green-dark"
  | "amber-dark";

const TONES: Record<Tone, { bracket: string; text: string }> = {
  neutral: { bracket: "text-paper-muted", text: "text-ink" },
  green: { bracket: "text-paper-muted", text: "text-green-ink" },
  amber: { bracket: "text-paper-muted", text: "text-amber-ink" },
  "neutral-dark": { bracket: "text-muted", text: "text-cream" },
  "green-dark": { bracket: "text-muted", text: "text-ndvi-green" },
  "amber-dark": { bracket: "text-muted", text: "text-review-amber" },
};

export default function BracketLabel({
  children,
  tone = "neutral",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] ${className}`}
    >
      <span aria-hidden="true" className={t.bracket}>
        [
      </span>
      <span className={t.text}>{children}</span>
      <span aria-hidden="true" className={t.bracket}>
        ]
      </span>
    </span>
  );
}
