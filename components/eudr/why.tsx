import BracketLabel from "@/components/ui/bracket-label";
import SectionHeading from "@/components/ui/section-heading";
import SectionRule from "@/components/ui/section-rule";

const PILLARS = [
  { tag: "PLOT-LEVEL", body: "Analysis tied to defined production areas." },
  { tag: "HISTORICAL", body: "Assessment of land-use change across relevant time periods." },
  { tag: "DATA-DRIVEN", body: "Earth-observation and geospatial datasets." },
  { tag: "TRACEABLE", body: "Structured outputs with documented data sources and methodology." },
] as const;

/** 05 — WHY KLISUS: ruled four-column trust table. */
export default function WhySection() {
  return (
    <section>
      <SectionRule n="05" label="WHY KLISUS" />
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pb-28">
        <SectionHeading title="Built for evidence." />
        <div className="mt-12 grid divide-y divide-paper-line border-y border-paper-line sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.tag} className="p-6">
              <BracketLabel>{pillar.tag}</BracketLabel>
              <p className="mt-3 text-[14px] leading-relaxed text-paper-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
