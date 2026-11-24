import CTABand from "@/components/ui/cta-band";
import ExploreCards from "@/components/home/explore-cards";
import Hero from "@/components/home/hero";
import WhatWeDo from "@/components/home/what-we-do";
import EudrSolution from "@/components/home/eudr-solution";
import IntelligenceBanner from "@/components/home/intelligence-banner";

// Title falls through to the layout default ("KliSus — Climate Intelligence
// & Economics"); Home deliberately exports no metadata of its own.

export default function HomePage() {
  return (
    <>
      {/* Sticky stack: each panel holds while the next slides over it. */}
      <Hero />
      <WhatWeDo />
      <EudrSolution />
      <IntelligenceBanner />

      {/* Final section flows normally over the last panel. */}
      <div className="relative bg-paper-surface">
        <ExploreCards />
        <CTABand
          title="Know the land. Make the decision."
          lede="Start with KliSus EUDR Land Evidence."
          primary={{ label: "Request a Plot Assessment", href: "/request" }}
          secondary={{ label: "Contact KliSus", href: "mailto:teams@klisus.com" }}
        />
      </div>
    </>
  );
}
