/**
 * Section h2 + lede in the dossier voices. Section labels live in
 * <SectionRule>, which owns the running label.
 */
export default function SectionHeading({
  title,
  lede,
  tone = "dark",
  className = "",
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "dark" | "paper";
  className?: string;
}) {
  const paper = tone === "paper";
  return (
    <div className={className}>
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
