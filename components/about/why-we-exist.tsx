import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

/** Paper card panel: the founding argument, closing on the vision line. */
export default function WhyWeExist() {
  return (
    <section className="bg-paper-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Reveal className="rounded-2xl bg-paper p-8 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] sm:p-12">
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Why we exist
          </p>
          <h2
            className="font-display mt-5 max-w-[18ch] text-[32px] font-medium text-ink sm:text-[42px]"
            style={{ "--i": 1 } as CSSProperties}
          >
            Environmental change is becoming an economic reality.
          </h2>
          <p
            className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 2 } as CSSProperties}
          >
            The world is generating unprecedented amounts of environmental data,
            yet decision-makers still lack accessible, reliable, and actionable
            intelligence.
          </p>
          <p
            className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-paper-muted"
            style={{ "--i": 3 } as CSSProperties}
          >
            KliSus was founded on a simple belief: environmental information
            should be transformed into evidence that can inform real-world
            decisions.
          </p>
          <p
            className="font-display mt-10 max-w-[30ch] text-[24px] font-medium leading-snug text-green-ink sm:text-[30px]"
            style={{ "--i": 4 } as CSSProperties}
          >
            Our vision is a world where environmental decisions are informed by
            evidence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
