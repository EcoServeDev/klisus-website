import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import CTABand from "@/components/ui/cta-band";
import Reveal from "@/components/visuals/reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Environmental intelligence, built for decisions — plot-level land evidence, climate intelligence, and climate economics.",
};

const DOMAINS = ["Climate", "Land", "Nature", "Economics"] as const;

const GROWING_SOLUTIONS = [
  {
    title: "Climate Intelligence",
    body: "Understanding environmental risks and changing conditions.",
  },
  {
    title: "Land & Nature Intelligence",
    body: "Analysing environmental change across landscapes and assets.",
  },
  {
    title: "Climate Economics",
    body: "Connecting environmental change with markets, capital, and economic decisions.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      {/* Sand hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Solutions
          </p>
          <h1
            className="font-display mt-5 max-w-[18ch] text-[38px] font-medium text-ink sm:text-[48px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Environmental intelligence, built for decisions.
          </h1>
          <p
            className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            KliSus provides data-driven solutions that turn environmental
            information into actionable intelligence and traceable evidence.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 } as CSSProperties}
          >
            {DOMAINS.map((d) => (
              <span
                key={d}
                className="rounded-full bg-paper px-4 py-1.5 text-[14px] font-medium text-paper-muted shadow-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* EUDR feature panel — dark split */}
      <section className="grid bg-forest-black lg:grid-cols-2 lg:items-stretch">
        <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden lg:min-h-[560px]">
          <Image
            src="/plates/apui-tc-2025.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="scale-110 object-cover opacity-80 blur-[6px]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-forest-black/35" aria-hidden="true" />
          <Reveal className="relative px-8 text-center">
            <span
              className="font-display block text-[46px] font-medium leading-none text-ndvi-green sm:text-[60px]"
              style={{ "--i": 0 } as CSSProperties}
            >
              Land Evidence
            </span>
            <span
              className="mt-3 block text-[18px] font-medium text-cream"
              style={{ "--i": 1 } as CSSProperties}
            >
              by KliSus
            </span>
          </Reveal>
        </div>

        <div className="dark-band flex items-center bg-forest-black">
          <Reveal className="px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
            <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
              EUDR Land Evidence
            </p>
            <h2
              className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-cream sm:text-[40px]"
              style={{ "--i": 1 } as CSSProperties}
            >
              Assess the land behind your supply chain.
            </h2>
            <p
              className="mt-5 max-w-[44ch] text-[18px] leading-snug text-cream/90"
              style={{ "--i": 2 } as CSSProperties}
            >
              Plot-level satellite and geospatial intelligence to support EUDR
              due diligence.
            </p>
            <p
              className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted"
              style={{ "--i": 3 } as CSSProperties}
            >
              KliSus analyses production-plot locations and historical land-use
              indicators to provide structured evidence for supply-chain review
              and due-diligence workflows.
            </p>
            <div className="mt-9" style={{ "--i": 4 } as CSSProperties}>
              <Button href="/solutions/eudr-land-evidence" onDark>
                Explore EUDR Land Evidence
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Growing the intelligence layer */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-28">
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Growing the intelligence layer
          </p>
          <h2
            className="font-display mt-5 max-w-[16ch] text-[34px] font-medium text-ink sm:text-[44px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            More intelligence. More solutions.
          </h2>
          <p
            className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            KliSus is building solutions across climate, land, nature, and
            environmental economics — turning complex environmental data into
            decision-ready intelligence.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid gap-6 md:grid-cols-3">
          {GROWING_SOLUTIONS.map((s, i) => (
            <div
              key={s.title}
              style={{ "--i": i } as CSSProperties}
              className="rounded-2xl bg-paper p-8 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
            >
              <h3 className="text-[20px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-paper-muted">{s.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-12">
          <div style={{ "--i": 0 } as CSSProperties}>
            <Button href="/intelligence" variant="secondary">
              Explore KliSus Intelligence
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Closing */}
      <CTABand
        title="Start with the land."
        lede="Explore KliSus EUDR Land Evidence."
        primary={{ label: "Explore EUDR Land Evidence", href: "/solutions/eudr-land-evidence" }}
      />
    </>
  );
}
