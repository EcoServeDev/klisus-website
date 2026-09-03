import type { CSSProperties } from "react";
import Reveal from "@/components/visuals/reveal";

const OUTPUTS = [
  {
    tagClass: "bg-green-wash text-green-ink",
    tag: "Complete",
    title: "Assessment complete",
    body: "The defined assessment has been completed using the stated methodology and available data.",
  },
  {
    tagClass: "bg-green-wash text-green-ink",
    tag: "No change indicator",
    title: "No relevant change indicator identified",
    body: "No relevant change indicator was identified within the assessed period and methodology.",
  },
  {
    tagClass: "bg-[#f5eeda] text-amber-ink",
    tag: "Change indicator",
    title: "Change indicator identified",
    body: "A relevant land or forest-cover change indicator was identified and may require further review.",
  },
  {
    tagClass: "bg-paper-surface text-paper-muted",
    tag: "Limitation",
    title: "Assessment limitation",
    body: "The available data or assessment conditions do not support a conclusive analytical finding.",
  },
] as const;

/** ASSESSMENT OUTPUT: the four analytical output states as soft cards. */
export default function OutputsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <Reveal>
        <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
          Assessment output
        </p>
        <h2
          className="font-display mt-5 max-w-[16ch] text-[32px] font-medium text-ink sm:text-[42px]"
          style={{ "--i": 1 } as CSSProperties}
        >
          Evidence should show what was assessed.
        </h2>
        <p
          className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          Depending on the data, methodology, and assessment conditions,
          analytical outputs may indicate:
        </p>
      </Reveal>
      <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
        {OUTPUTS.map((output, i) => (
          <div
            key={output.tag}
            style={{ "--i": i } as CSSProperties}
            className="rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)]"
          >
            <span
              className={`inline-block rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${output.tagClass}`}
            >
              {output.tag}
            </span>
            <h3 className="mt-4 text-[17px] font-semibold text-ink">{output.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-paper-muted">{output.body}</p>
          </div>
        ))}
      </Reveal>
      <Reveal>
        <p className="mt-8 max-w-[70ch] text-[14px] leading-relaxed text-paper-muted">
          Assessment terminology is governed by the applicable methodology,
          data quality, and stated limitations.
        </p>
      </Reveal>
    </section>
  );
}
