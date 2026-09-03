import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/visuals/reveal";

const CARDS = [
  {
    tag: "Solution",
    title: "EUDR Land Evidence",
    line: "Plot-level satellite and geospatial intelligence to support EUDR due diligence.",
    href: "/solutions/eudr-land-evidence",
    img: "/plates/apui-tc-2025.jpg",
    alt: "Sentinel-2 view of the Apuí frontier, Amazonas",
  },
  {
    tag: "Research",
    title: "KliSus Intelligence",
    line: "Research and analysis on climate, land, nature, and economics.",
    href: "/intelligence",
    img: "/plates/jharkhand-ndvi-delta.jpg",
    alt: "Vegetation-index change map, Jharkhand, India",
  },
  {
    tag: "Free tool",
    title: "Plot Check",
    line: "Run a free satellite check on any single plot — no signup required.",
    href: "/plot-check",
    img: "/plates/nyeri-tc-2025.jpg",
    alt: "Sentinel-2 view of coffee country near Nyeri, Kenya",
  },
];

/** Ahya press-card texture with honest content: three image cards. */
export default function ExploreCards() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Explore KliSus
        </p>
      </Reveal>
      <Reveal className="mt-8 grid gap-6 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <Link
            key={c.title}
            href={c.href as never}
            style={{ "--i": i } as CSSProperties}
            className="group overflow-hidden rounded-2xl bg-paper shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]"
          >
            <span className="block overflow-hidden">
              <Image
                src={c.img}
                alt={c.alt}
                width={1600}
                height={1200}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
              />
            </span>
            <span className="block p-6">
              <span className="kicker">{c.tag}</span>
              <span className="mt-2.5 block text-[19px] font-semibold text-ink">{c.title}</span>
              <span className="mt-1.5 block text-[14px] leading-relaxed text-paper-muted">
                {c.line}
              </span>
            </span>
          </Link>
        ))}
      </Reveal>
    </div>
  );
}
