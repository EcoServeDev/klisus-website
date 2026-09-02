import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";

/**
 * HERO — quiet editorial opener. No plate: the partnerships page leads with
 * the invitation, not a visual. One primary CTA straight to the inbox.
 */
export default function PartnershipsHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow className="mb-5">PARTNERSHIPS</Eyebrow>
          <h1 className="font-display text-[40px] leading-[1.08] text-cream lg:text-[56px]">
            Build better environmental intelligence together.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted">
            KliSus partners with businesses, institutions, and research
            organisations to turn environmental data, technology, and expertise
            into practical solutions and decision-ready intelligence.
          </p>
          <div className="mt-8">
            <Button href="mailto:teams@klisus.com" size="lg">
              Start a Conversation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
