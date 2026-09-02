import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OG image routes read TTFs via process.cwd()/assets — static tracing can't
  // see through that, so include them for every route's function output.
  outputFileTracingIncludes: { "/**": ["./assets/**"] },
  // The product (Klisus Plot Check) lives on its own origin; these rewrites
  // put it under the primary domain at klisus.com/plot-check. Do not remove —
  // every "Request a Plot Assessment" CTA depends on them.
  async rewrites() {
    return [
      {
        source: "/plot-check",
        destination: "https://app.klisus.com/plot-check",
      },
      {
        source: "/plot-check/:path*",
        destination: "https://app.klisus.com/plot-check/:path*",
      },
    ];
  },
  // Legacy routes from the previous SPA — permanent so search engines follow.
  async redirects() {
    return [
      { source: "/insights", destination: "/intelligence", permanent: true },
      { source: "/research", destination: "/intelligence", permanent: true },
      { source: "/reports", destination: "/intelligence", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/land-checker", destination: "/plot-check", permanent: true },
      { source: "/methodology", destination: "/plot-check/methodology", permanent: true },
      { source: "/contact", destination: "/partnerships", permanent: true },
      { source: "/products", destination: "/solutions", permanent: true },
      { source: "/consulting", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
