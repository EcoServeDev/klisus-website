import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/coming-soon/Footer";

/* the living hero carries three.js and two WebGL2 shader buttons — keep all
   of that in its own chunk, off the critical path */
const LivingHero = lazy(() => import("@/components/living-hero/LivingHero"));

const DESCRIPTION =
  "Enter a plot's coordinates. Get its satellite evidence history — free for any single plot.";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Klisus — Satellite Proof for Every Land Claim</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="satellite land verification, EUDR reports, independent verification"
        />
        <link rel="canonical" href="https://klisus.com" />

        <meta property="og:title" content="Klisus — Satellite Proof for Every Land Claim" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klisus.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Klisus — Satellite Proof for Every Land Claim" />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      <main className="relative min-h-screen overflow-x-hidden bg-[#0F0F0F] text-white antialiased">
        <Suspense fallback={<div className="min-h-screen bg-[#131512]" aria-hidden="true" />}>
          <LivingHero />
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default Index;
