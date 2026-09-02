import Eyebrow from "@/components/ui/eyebrow";
import Tag from "@/components/ui/tag";

/**
 * 01 — WHO WE ARE. Quiet editorial hero: eyebrow, the company definition,
 * and the four domain tags in the data voice.
 */
export default function AboutHero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow className="mb-5">WHO WE ARE</Eyebrow>
          <h1 className="font-display text-[40px] leading-[1.08] text-cream lg:text-[56px]">
            Climate Intelligence &amp; Economics
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted">
            KliSus provides data-driven solutions that turn environmental
            information into intelligence, evidence, and economic insight.
          </p>
          <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-muted">
            We help businesses, institutions, and investors assess environmental
            risks, evaluate climate and nature claims, and make better-informed
            decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Tag>Climate</Tag>
            <Tag>Land</Tag>
            <Tag>Nature</Tag>
            <Tag>Economics</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}
