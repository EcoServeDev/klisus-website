import Button from "@/components/ui/button";

/**
 * Flagship page-title, light dossier grammar. The imagery lives below as
 * evidence plates — the hero states the claim in type.
 */
export default function EudrHero() {
  return (
    <>
      <div className="border-t border-paper-line">
        <div className="mx-auto flex h-10 max-w-6xl items-center px-6">
          <span className="voice-label">EUDR LAND EVIDENCE</span>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-16 pt-8 sm:pb-20 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-9">
          <h1 className="font-display max-w-[16ch] text-[36px] text-ink sm:text-[44px] lg:text-[56px]">
            Assess the land behind your supply chain.
          </h1>
          <p className="voice-lede mt-6 max-w-[40ch] text-[20px] text-paper-muted md:text-[24px]">
            Plot-level satellite and geospatial intelligence to support EUDR due
            diligence.
          </p>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            KliSus analyses production-plot locations and historical land-use
            indicators to provide structured evidence for supply-chain review
            and due-diligence workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/plot-check" size="lg">
              Request a Plot Assessment →
            </Button>
            <Button href="/plot-check/r/e12fe13023e0" variant="secondary" size="lg">
              View Sample Report →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
