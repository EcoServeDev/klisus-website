import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";

/**
 * 02 — WHOM WE SERVE. Three columns, each headed by a tag chip, separated by
 * hairlines on sm+ so the row reads as one instrument panel.
 */

const AUDIENCES = [
  {
    tag: "BUSINESSES",
    body: "Environmental risk, supply-chain due diligence, and climate and nature claims.",
  },
  {
    tag: "INSTITUTIONS",
    body: "Regulatory, policy, operational, and strategic environmental intelligence.",
  },
  {
    tag: "INVESTORS",
    body: "Environmental factors, due diligence, and investment research.",
  },
];

export default function WhomWeServe() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading n="02" eyebrow="WHOM WE SERVE" title="Built for decision-makers." />
        <div className="stagger mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {AUDIENCES.map((audience, i) => (
            <div
              key={audience.tag}
              style={{ "--i": i } as React.CSSProperties}
              className="border-t border-line pt-6"
            >
              <Tag>{audience.tag}</Tag>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">{audience.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
