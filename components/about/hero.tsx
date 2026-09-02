import BracketLabel from "@/components/ui/bracket-label";

/**
 * 01 — WHO WE ARE. Ruled page-title: label row, display h1, the company
 * definition, and the four domains as bracket labels. No plate.
 */
export default function AboutHero() {
  return (
    <section className="border-t border-paper-line">
      <div className="mx-auto flex h-10 max-w-6xl items-center px-6">
        <span className="voice-label">WHO WE ARE</span>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-16 pt-10 sm:pb-20 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-10">
          <h1 className="font-display text-[44px] text-ink md:text-[56px] lg:text-[72px]">
            Climate Intelligence &amp; Economics
          </h1>
          <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            KliSus provides data-driven solutions that turn environmental
            information into intelligence, evidence, and economic insight.
          </p>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            We help businesses, institutions, and investors assess environmental
            risks, evaluate climate and nature claims, and make better-informed
            decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
            <BracketLabel>Climate</BracketLabel>
            <BracketLabel>Land</BracketLabel>
            <BracketLabel>Nature</BracketLabel>
            <BracketLabel>Economics</BracketLabel>
          </div>
        </div>
      </div>
    </section>
  );
}
