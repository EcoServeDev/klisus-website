/** Section opener: green eyebrow + big display title + optional lede. */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      {eyebrow ? <p className="voice-label mb-4">{eyebrow}</p> : null}
      <h2
        className={`font-display max-w-[20ch] text-[34px] md:text-[44px] lg:text-[52px] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`voice-lede mt-5 max-w-[52ch] text-[18px] md:text-[20px] ${
            dark ? "text-muted" : "text-paper-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
