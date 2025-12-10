import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyItMattersSection } from "@/components/home/WhyItMattersSection";
import { WhatWeOfferSection } from "@/components/home/WhatWeOfferSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Klisus | Blockchain Carbon Credits & ESG Consulting for Climate Action</title>
        <meta 
          name="description" 
          content="Klisus is a blockchain-powered platform for carbon credits, sustainable forestation MRV, farmer incentives, and expert ESG consulting. Drive climate impact with verified solutions." 
        />
        <meta name="keywords" content="blockchain carbon credits, sustainable forestation MRV, climate farmer incentives, ESG consulting, carbon marketplace, sustainability platform" />
        <link rel="canonical" href="https://klisus.io" />
        
        <meta property="og:title" content="Klisus | Blockchain Powerhouse for Climate Action" />
        <meta property="og:description" content="Empowering sustainable futures through carbon credits, farmer plantations, forestation MRV, and expert ESG consulting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klisus.io" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Klisus | Blockchain Powerhouse for Climate Action" />
        <meta name="twitter:description" content="Empowering sustainable futures through carbon credits, farmer plantations, forestation MRV, and expert ESG consulting." />
      </Helmet>

      <Layout>
        <HeroSection />
        <WhyItMattersSection />
        <WhatWeOfferSection />
        <ApproachSection />
        <WhyChooseSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
