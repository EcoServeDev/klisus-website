import Button from "@/components/ui/button";

/**
 * HERO — ruled page-title. No plate: the partnerships page leads with the
 * invitation, not a visual. One primary CTA straight to the inbox.
 */
export default function PartnershipsHero() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-10 items-center">
          <span className="voice-label">Partnerships</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-20 pt-10 sm:pb-24 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-10">
          <h1 className="font-display max-w-[16ch] text-[44px] text-cream md:text-[56px] lg:text-[72px]">
            Build better environmental intelligence together.
          </h1>
          <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-muted">
            KliSus partners with businesses, institutions, and research
            organisations to turn environmental data, technology, and expertise
            into practical solutions and decision-ready intelligence.
          </p>
          <div className="mt-10">
            <Button href="mailto:teams@klisus.com" size="lg">
              Start a Conversation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
