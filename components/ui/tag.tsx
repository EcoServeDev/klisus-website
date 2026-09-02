/** Chip signature: PLOT-LEVEL, TRACEABLE, REVIEW REQUIRED, ... */

type Tone = "neutral" | "green" | "amber" | "paper";

const TONES: Record<Tone, string> = {
  neutral: "border-line text-muted",
  green: "border-ndvi-green/50 bg-ndvi-green/10 text-ndvi-green",
  amber: "border-review-amber/50 bg-review-amber/10 text-review-amber",
  paper: "border-paper-line text-paper-muted",
};

export default function Tag({
  children,
  tone = "neutral",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return <span className={`tag ${TONES[tone]} ${className}`}>{children}</span>;
}
