import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";

const PILLARS = [
  { tag: "PLOT-LEVEL", body: "Analysis tied to defined production areas." },
  { tag: "HISTORICAL", body: "Assessment of land-use change across relevant time periods." },
  { tag: "DATA-DRIVEN", body: "Earth-observation and geospatial datasets." },
  { tag: "TRACEABLE", body: "Structured outputs with documented data sources and methodology." },
] as const;

/** 05 — WHY KLISUS: quiet four-column trust strip. */
export default function WhySection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading n="05" eyebrow="WHY KLISUS" title="Built for evidence." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.tag} className="border-t border-line pt-5">
              <Tag>{pillar.tag}</Tag>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
