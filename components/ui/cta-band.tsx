import Button from "@/components/ui/button";

/** Closing CTA: a soft green-washed panel, centered content, big type. */
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
  n?: string;
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
      <div className="rounded-2xl bg-green-wash px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="font-display mx-auto max-w-[18ch] text-[32px] text-ink md:text-[44px]">
          {title}
        </h2>
        {lede ? (
          <p className="voice-lede mx-auto mt-4 max-w-[44ch] text-[18px] text-paper-muted md:text-[20px]">
            {lede}
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
