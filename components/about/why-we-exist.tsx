import Eyebrow from "@/components/ui/eyebrow";

/**
 * 02 — WHY WE EXIST. The page's single paper section: an editorial reading
 * moment set in the report palette — the site's "evidence document" register.
 */
export default function WhyWeExist() {
  return (
    <section className="paper-section bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow n="02" paper className="mb-4">
            WHY WE EXIST
          </Eyebrow>
          <h2 className="font-display text-[28px] leading-[1.15] text-ink sm:text-[40px]">
            Environmental change is becoming an economic reality.
          </h2>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-paper-muted">
            The world is generating unprecedented amounts of environmental data,
            yet decision-makers still lack accessible, reliable, and actionable
            intelligence.
          </p>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-paper-muted">
            KliSus was founded on a simple belief: environmental information
            should be transformed into evidence that can inform real-world
            decisions.
          </p>
          <p className="mt-10 border-l-2 border-paper-line pl-5 font-display text-[20px] leading-snug text-ink">
            Our vision is a world where environmental decisions are informed by
            evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
