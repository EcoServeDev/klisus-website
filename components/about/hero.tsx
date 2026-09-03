import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const DOMAINS = ["Climate", "Land", "Nature", "Economics"];

/** Sand hero: kicker, display h1, the company definition, domain tags. */
export default function AboutHero() {
  return (
    <section className="bg-paper-surface">
      <Reveal className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pb-20">
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Who we are
        </p>
        <h1
          className="font-display mt-5 max-w-[18ch] text-[38px] font-medium text-ink sm:text-[48px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Climate Intelligence &amp; Economics
        </h1>
        <p
          className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          KliSus provides data-driven solutions that turn environmental
          information into intelligence, evidence, and economic insight.
        </p>
        <p
          className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
          style={{ "--i": 3 } as CSSProperties}
        >
          We help businesses, institutions, and investors assess environmental
          risks, evaluate climate and nature claims, and make better-informed
          decisions.
        </p>
        <div
          className="mt-9 flex flex-wrap gap-2.5"
          style={{ "--i": 4 } as CSSProperties}
        >
          {DOMAINS.map((d) => (
            <span
              key={d}
              className="rounded-full bg-paper px-4 py-1.5 text-[14px] font-medium text-paper-muted shadow-[0_1px_2px_rgba(13,21,18,0.05)]"
            >
              {d}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
