import type { CSSProperties } from "react";
import Button from "@/components/ui/button";
import Reveal from "@/components/visuals/reveal";

/** Sand hero: the partnerships page leads with the invitation. */
export default function PartnershipsHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pb-20">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Partnerships
        </p>
        <h1
          className="font-display mt-5 max-w-[18ch] text-[38px] font-medium text-ink sm:text-[48px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Build better environmental intelligence together.
        </h1>
        <p
          className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          KliSus partners with businesses, institutions, and research
          organisations to turn environmental data, technology, and expertise
          into practical solutions and decision-ready intelligence.
        </p>
        <div className="mt-9" style={{ "--i": 3 } as CSSProperties}>
          <Button href="mailto:teams@klisus.com" size="lg">
            Start a Conversation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
