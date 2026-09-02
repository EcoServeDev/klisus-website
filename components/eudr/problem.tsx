import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";
import FlowStrip from "@/components/visuals/flow-strip";

/** 01 — THE PROBLEM */
export default function ProblemSection() {
  return (
    <section>
      <SectionRule n="01" label="THE PROBLEM" />
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-10 sm:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading title="Can you evidence where your commodities come from?" />
          <div className="mt-8 max-w-[60ch] space-y-4 text-[16px] leading-relaxed text-paper-muted">
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
          <a
            href="#how-it-works"
            className="mt-8 inline-block font-mono text-[13px] text-ink underline decoration-paper-line underline-offset-4 transition-colors hover:decoration-green-ink"
          >
            See How It Works →
          </a>
        </div>
        <div className="mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <FlowStrip direction="vertical" items={["Location", "History", "Evidence"]} />
        </div>
      </div>
    </section>
  );
}
