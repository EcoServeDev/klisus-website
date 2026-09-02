import type { Metadata } from "next";
import { Archivo, Fragment_Mono } from "next/font/google";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

// The dossier voices: Archivo variable (the width axis carries the display
// voice — Expanded ~125 for headlines, normal width for body) and Fragment
// Mono for everything measured (coordinates, numerals, labels, wordmark).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klisus.com"),
  // Self-referencing canonical per route (resolved against metadataBase).
  alternates: { canonical: "./" },
  title: {
    default: "KliSus — Climate Intelligence & Economics",
    template: "%s — KliSus",
  },
  description:
    "Evidence for decisions in a changing climate. KliSus combines Earth observation, geospatial intelligence, and environmental analysis for environmental risk and due-diligence decisions.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KliSus",
  url: "https://klisus.com",
  logo: "https://klisus.com/klisus-logo.png",
  email: "teams@klisus.com",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  sameAs: ["https://x.com/Klisus_io", "https://www.linkedin.com/company/klisus/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ndvi-green focus:px-4 focus:py-2 focus:text-forest-black"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
