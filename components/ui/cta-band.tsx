import Button from "@/components/ui/button";

/**
 * Ruled closing block — left-aligned inside the 12-col grid, never centered.
 * Paper ground like the rest of the page.
 */
export default function CTABand({
  title,
  lede,
  primary,
  secondary,
  n,
  label = "NEXT",
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  n?: string;
  label?: string;
}) {
  return (
    <section className="border-t border-paper-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-10 items-center">
          <span className="voice-label">
            {n ? `${n} / ` : ""}
            {label}
          </span>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-8 sm:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h2 className="font-display max-w-[16ch] text-[32px] text-ink md:text-[44px] lg:text-[56px]">
            {title}
          </h2>
          {lede ? (
            <p className="voice-lede mt-6 max-w-[44ch] text-[20px] text-paper-muted md:text-[24px]">
              {lede}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
