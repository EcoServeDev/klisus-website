import type { Metadata } from "next";
import PartnershipsHero from "@/components/partnerships/hero";
import WhyPartner from "@/components/partnerships/why-partner";
import WhomWeServe from "@/components/partnerships/whom-we-serve";
import Ecosystem from "@/components/partnerships/ecosystem";
import Contact from "@/components/partnerships/contact";
import Closing from "@/components/partnerships/closing";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "KliSus partners with businesses, institutions, and research organisations to build decision-ready environmental intelligence.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <WhyPartner />
      <WhomWeServe />
      <Ecosystem />
      <Contact />
      <Closing />
    </>
  );
}
