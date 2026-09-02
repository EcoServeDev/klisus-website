/**
 * Section h2 + lede in the dossier voices. Section labels live in
 * <SectionRule> now — the `eyebrow`/`n` props are accepted for compatibility
 * but should be unused once pages migrate (SectionRule owns the label).
 */
import Eyebrow from "@/components/ui/eyebrow";

export default function SectionHeading({
  eyebrow,
  n,
  title,
  lede,
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  n?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "dark" | "paper";
  className?: string;
}) {
  const paper = tone === "paper";
  return (
    <div className={className}>
      {eyebrow ? (
        <Eyebrow n={n} paper={paper} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`font-display max-w-[18ch] text-[32px] md:text-[44px] lg:text-[56px] ${
          paper ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`voice-lede mt-6 max-w-[46ch] text-[20px] md:text-[24px] ${
            paper ? "text-paper-muted" : "text-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
