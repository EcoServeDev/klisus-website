import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KliSus Intelligence",
  description: "Research and analysis at the intersection of climate, land, nature, and economics.",
};

export default function IntelligencePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-[40px] text-cream">KliSus Intelligence</h1>
      <p className="mt-4 text-muted">Placeholder — built in Phase B.</p>
    </section>
  );
}
