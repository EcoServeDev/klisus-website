/** Boxed state label, dossier-style: `[ REVIEW REQUIRED ]`. No pill, no fill. */

type Tone = "neutral" | "green" | "amber" | "paper";

const TONES: Record<Tone, { bracket: string; text: string }> = {
  neutral: { bracket: "text-muted", text: "text-cream" },
  green: { bracket: "text-muted", text: "text-ndvi-green" },
  amber: { bracket: "text-muted", text: "text-review-amber" },
  paper: { bracket: "text-paper-muted", text: "text-ink" },
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
