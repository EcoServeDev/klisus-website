/**
 * Section h2 + lede in the dossier voices. Section labels live in
 * <SectionRule>, which owns the running label. Light by default.
 */
export default function SectionHeading({
  title,
  lede,
  tone = "light",
  className = "",
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <h2
        className={`font-display max-w-[18ch] text-[32px] md:text-[44px] lg:text-[56px] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`voice-lede mt-6 max-w-[46ch] text-[20px] md:text-[24px] ${
            dark ? "text-muted" : "text-paper-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
