import Button from "@/components/ui/button";

/** 04 — Beyond verification: gradient product strip (Ahya AI panel analog). */
export default function IntelligenceBanner() {
  return (
    <section className="dark-band bg-[linear-gradient(100deg,#123a34_0%,#12314c_55%,#0c1e3e_100%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:py-24">
        <div>
          <p className="kicker">Beyond verification</p>
          <h2 className="font-display mt-4 text-[36px] font-medium text-paper sm:text-[46px]">
            KliSus <span className="text-[#7fd6c2]">Intelligence</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-cream/85">
            Research and intelligence at the intersection of climate, land,
            nature, and economics.
          </p>
        </div>
        <Button href="/intelligence" variant="secondary" size="lg" onDark>
          Explore KliSus Intelligence
        </Button>
      </div>
    </section>
  );
}
