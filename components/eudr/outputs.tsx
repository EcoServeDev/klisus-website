import BracketLabel from "@/components/ui/bracket-label";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";

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

/** 04 — ASSESSMENT OUTPUT: the four analytical output states as a ledger. */
export default function OutputsSection() {
  return (
    <section>
      <SectionRule n="04" label="ASSESSMENT OUTPUT" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-28">
        <div className="grid gap-x-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              title="Evidence should show what was assessed."
              lede="Depending on the data, methodology, and assessment conditions, analytical outputs may indicate:"
            />
          </div>
        </div>
        <ul className="mt-12 list-none">
          {OUTPUTS.map((output) => (
            <li
              key={output.tag}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-t border-line py-6 last:border-b sm:grid-cols-[minmax(10rem,14rem)_minmax(12rem,16rem)_1fr]"
            >
              <BracketLabel tone={output.tone} className="self-start">
                {output.tag}
              </BracketLabel>
              <h3 className="text-[18px] font-medium leading-snug text-cream">
                {output.title}
              </h3>
              <p className="max-w-[56ch] text-[14px] leading-relaxed text-muted">
                {output.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-[13px] leading-relaxed text-muted">
          NOTE — Assessment terminology is governed by the applicable
          methodology, data quality, and stated limitations.
        </p>
      </div>
    </section>
  );
}
