import Eyebrow from "@/components/ui/eyebrow";

/**
 * Standard section opener: eyebrow + editorial h2 + optional lede.
 * tone="paper" for light editorial sections.
 */
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
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <Eyebrow n={n} paper={paper} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`font-display text-[28px] leading-[1.15] sm:text-[40px] ${
          paper ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-[60ch] text-[16px] leading-relaxed ${
            paper ? "text-paper-muted" : "text-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
