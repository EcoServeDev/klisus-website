import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import Reveal from "@/components/visuals/reveal";

/** Closing CTA: full-bleed satellite band with graded overlay. */
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
    <section className="dark-band relative overflow-hidden bg-forest-black">
      <Image
        src="/plates/nyeri-tc-2025.jpg"
        alt=""
        fill
        sizes="100vw"
        className="scale-105 object-cover opacity-70 blur-[3px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-forest-black/60" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:py-32">
        <h2
          className="font-display mx-auto max-w-[18ch] text-[34px] font-medium text-paper md:text-[46px]"
          style={{ "--i": 0 } as CSSProperties}
        >
          {title}
        </h2>
        {lede ? (
          <p
            className="voice-lede mx-auto mt-4 max-w-[44ch] text-[18px] text-cream/85"
            style={{ "--i": 1 } as CSSProperties}
          >
            {lede}
          </p>
        ) : null}
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
          style={{ "--i": 2 } as CSSProperties}
        >
          <Button href={primary.href} size="lg" onDark>
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="secondary" size="lg" onDark>
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
