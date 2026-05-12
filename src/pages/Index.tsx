import { Helmet } from "react-helmet-async";
import { BackgroundNetwork } from "@/components/coming-soon/BackgroundNetwork";
import { Hero } from "@/components/coming-soon/Hero";
import { Footer } from "@/components/coming-soon/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Klisus — Blockchain for Climate Action | Coming Soon</title>
        <meta
          name="description"
          content="Klisus is a high-performance blockchain unifying carbon credit tokenization, farmer plantation incentives, and forestation MRV. Launching Q2 2026."
        />
        <meta
          name="keywords"
          content="blockchain carbon credits, sustainable forestation MRV, climate farmer incentives, ESG consulting, carbon marketplace, sustainability platform"
        />
        <link rel="canonical" href="https://klisus.io" />

        <meta property="og:title" content="Klisus — Blockchain for Climate Action" />
        <meta
          property="og:description"
          content="Tokenize carbon credits, incentivize farmers, and verify forestation on one transparent, high-performance chain."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klisus.io" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Klisus — Blockchain for Climate Action" />
        <meta
          name="twitter:description"
          content="Tokenize carbon credits, incentivize farmers, and verify forestation on one transparent, high-performance chain."
        />
      </Helmet>

      <main className="relative min-h-screen overflow-x-hidden bg-[#0F0F0F] text-white antialiased">
        <BackgroundNetwork />
        <Hero />
        <Footer />
      </main>
    </>
  );
};

export default Index;
