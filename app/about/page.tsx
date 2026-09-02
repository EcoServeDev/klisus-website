import type { Metadata } from "next";
import AboutHero from "@/components/about/hero";
import WhyWeExist from "@/components/about/why-we-exist";
import Team from "@/components/about/team";
import CTABand from "@/components/ui/cta-band";

export const metadata: Metadata = {
  title: "About",
  description: "KliSus turns environmental information into intelligence, evidence, and economic insight for businesses, institutions, and investors.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <Team />
      <CTABand
        title="Better intelligence. Better decisions."
        lede="KliSus is building the intelligence layer for a world where environmental change increasingly shapes economic decisions."
        primary={{ label: "Explore Our Solutions →", href: "/solutions" }}
        secondary={{ label: "Explore KliSus Intelligence →", href: "/intelligence" }}
      />
    </>
  );
}
