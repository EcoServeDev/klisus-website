import Button from "@/components/ui/button";

/**
 * Full-width closing CTA: centered editorial headline + up to two actions.
 * Used for "Know the land. Make the decision." and every page's close.
 */
export default function CTABand({
  title,
  lede,
  primary,
  secondary,
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h2 className="font-display text-[28px] leading-[1.15] text-cream sm:text-[40px]">
          {title}
        </h2>
        {lede ? <p className="mt-4 text-[16px] text-muted">{lede}</p> : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
