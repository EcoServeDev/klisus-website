import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "KliSus turns environmental information into intelligence, evidence, and economic insight for businesses, institutions, and investors.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-[40px] text-cream">About</h1>
      <p className="mt-4 text-muted">Placeholder — built in Phase B.</p>
    </section>
  );
}
