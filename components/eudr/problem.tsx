import SectionHeading from "@/components/ui/section-heading";
import FlowStrip from "@/components/visuals/flow-strip";

/** 01 — THE PROBLEM */
export default function ProblemSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          n="01"
          eyebrow="THE PROBLEM"
          title="Can you evidence where your commodities come from?"
        />
        <div className="mt-8 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
          <p>
            EUDR due diligence requires businesses to collect information about
            relevant commodities, including the geolocation of the land where
            they were produced. Environmental and legal assessments may also
            require evidence from multiple sources.
          </p>
          <p>
            A location is the starting point. A credible review also requires
            historical context, documented methods, and traceable evidence.
          </p>
        </div>
        <FlowStrip className="mt-12" items={["Location", "History", "Evidence"]} />
      </div>
    </section>
  );
}
