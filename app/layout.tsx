import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  logo: "https://klisus.com/klisus-logo.jpeg",
  email: "teams@klisus.com",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  sameAs: ["https://x.com/Klisus_io", "https://www.linkedin.com/company/klisus/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
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
