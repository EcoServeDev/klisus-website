import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const REASONS = [
  {
    title: "Extend Capability",
    body: "Combine KliSus's environmental and geospatial intelligence with your organisation's data, expertise, and networks.",
  },
  {
    title: "Build Applied Solutions",
    body: "Develop practical tools and workflows for emerging climate, land, and nature challenges.",
  },
  {
    title: "Create Research Value",
    body: "Translate environmental data and scientific insight into useful outputs for policy, operations, markets, and investment analysis.",
  },
  {
    title: "Develop Long-Term Relationships",
    body: "Work together on partnerships that create durable value across business, research, and institutions.",
  },
];

const CARD =
  "rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] " +
  "transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 " +
  "hover:shadow-[0_2px_4px_rgba(13,21,18,0.06),0_16px_40px_rgba(13,21,18,0.12)]";

export default function WhyPartner() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Why partner with KliSus
        </p>
        <h2
          className="font-display mt-5 max-w-[18ch] text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Where environmental intelligence meets opportunity.
        </h2>
      </Reveal>
      <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
        {REASONS.map((reason, i) => (
          <div key={reason.title} style={{ "--i": i } as CSSProperties} className={CARD}>
            <h3 className="text-[20px] font-semibold text-ink">{reason.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-paper-muted">{reason.body}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
