import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import IndexRow, { IndexList } from "@/components/ui/index-row";

/** 01 — WHY PARTNER WITH KLISUS. Four numbered index rows, not cards. */

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
    <section>
      <SectionRule n="01" label="WHY PARTNER WITH KLISUS" />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 lg:pb-20">
        <SectionHeading title="Where environmental intelligence meets opportunity." />
        <IndexList className="mt-12">
          {REASONS.map((reason, i) => (
            <IndexRow key={reason.title} n={`0${i + 1}`} title={reason.title}>
              {reason.body}
            </IndexRow>
          ))}
        </IndexList>
      </div>
    </section>
  );
}
