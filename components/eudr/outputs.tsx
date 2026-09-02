import Card from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";

const OUTPUTS = [
  {
    tone: "green",
    tag: "COMPLETE",
    title: "Assessment complete",
    body: "The defined assessment has been completed using the stated methodology and available data.",
  },
  {
    tone: "green",
    tag: "NO CHANGE INDICATOR",
    title: "No relevant change indicator identified",
    body: "No relevant change indicator was identified within the assessed period and methodology.",
  },
  {
    tone: "amber",
    tag: "CHANGE INDICATOR",
    title: "Change indicator identified",
    body: "A relevant land or forest-cover change indicator was identified and may require further review.",
  },
  {
    tone: "neutral",
    tag: "LIMITATION",
    title: "Assessment limitation",
    body: "The available data or assessment conditions do not support a conclusive analytical finding.",
  },
] as const;

/** 04 — ASSESSMENT OUTPUT: the four analytical output states. */
export default function OutputsSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          n="04"
          eyebrow="ASSESSMENT OUTPUT"
          title="Evidence should show what was assessed."
          lede="Depending on the data, methodology, and assessment conditions, analytical outputs may indicate:"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {OUTPUTS.map((output) => (
            <Card key={output.tag}>
              <Tag tone={output.tone}>{output.tag}</Tag>
              <h3 className="mt-4 text-[16px] font-medium text-cream">{output.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{output.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 font-mono text-[13px] leading-relaxed text-muted">
          Assessment terminology is governed by the applicable methodology, data
          quality, and stated limitations.
        </p>
      </div>
    </section>
  );
}
