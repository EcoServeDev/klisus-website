import type { Metadata } from "next";
import CTABand from "@/components/ui/cta-band";
import EudrHero from "@/components/eudr/hero";
import ProblemSection from "@/components/eudr/problem";
import ApproachSection from "@/components/eudr/approach";
import ChangeEvidenceSection from "@/components/eudr/change-evidence";
import ReceiveSection from "@/components/eudr/receive";
import OutputsSection from "@/components/eudr/outputs";
import WhySection from "@/components/eudr/why";
import ResponsibleUseSection from "@/components/eudr/responsible-use";

export const metadata: Metadata = {
  title: "EUDR Land Evidence",
  description: "Plot-level satellite and geospatial intelligence to support EUDR due diligence. From coordinates to structured, traceable land evidence.",
};

export default function EUDRLandEvidencePage() {
  return (
    <>
      <EudrHero />
      <ProblemSection />
      <ApproachSection />
      <ChangeEvidenceSection />
      <ReceiveSection />
      <OutputsSection />
      <WhySection />
      <ResponsibleUseSection />
      <CTABand
        title="Know the land behind your supply chain."
        lede="Start your EUDR land evidence assessment with KliSus."
        primary={{ label: "Request a Plot Assessment", href: "/plot-check" }}
        secondary={{ label: "Contact KliSus", href: "mailto:teams@klisus.com" }}
      />
    </>
  );
}
