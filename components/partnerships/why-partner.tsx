import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

/**
 * 01 — WHY PARTNER WITH KLISUS. Four quiet cards, 2×2 on sm+, staggered
 * entrance on first view.
 */

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

export default function WhyPartner() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          n="01"
          eyebrow="WHY PARTNER WITH KLISUS"
          title="Where environmental intelligence meets opportunity."
        />
        <div className="stagger mt-14 grid gap-4 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <Card key={reason.title} style={{ "--i": i } as React.CSSProperties}>
              <h3 className="text-[20px] font-medium text-cream">{reason.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{reason.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
