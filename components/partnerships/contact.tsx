import Button from "@/components/ui/button";
import SectionRule from "@/components/ui/section-rule";

/**
 * 04 — CONTACT. The page's working CTA as a full-bleed ruled spread:
 * invitation left, dot-leader contact ledger + button right.
 */

const BODY =
  "Whether you are exploring a strategic partnership, institutional " +
  "collaboration, research opportunity, or KliSus solution, we'd like to " +
  "hear from you.";

export default function Contact() {
  return (
    <section className="border-b border-paper-line">
      <SectionRule n="04" label="CONTACT" srTitle="Contact" />
      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-12 px-6 pb-20 pt-8 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-6">
          <p className="voice-lede max-w-[44ch] text-[20px] text-ink md:text-[24px]">
            {BODY}
          </p>
        </div>
        <div className="lg:col-start-8 lg:col-span-5">
          <dl className="divide-y divide-paper-line border-y border-paper-line">
            <div className="flex items-baseline py-3">
              <dt className="voice-label shrink-0">Email</dt>
              <span className="dot-leader" aria-hidden="true" />
              <dd className="shrink-0 font-mono text-[13px] text-ink">
                <a
                  href="mailto:teams@klisus.com"
                  className="transition-colors hover:text-ndvi-green"
                >
                  teams@klisus.com
                </a>
              </dd>
            </div>
            <div className="flex items-baseline py-3">
              <dt className="voice-label shrink-0">Location</dt>
              <span className="dot-leader" aria-hidden="true" />
              <dd className="shrink-0 font-mono text-[13px] text-ink">Dubai, UAE</dd>
            </div>
          </dl>
          <div className="mt-8">
            <Button href="mailto:teams@klisus.com">Start a Conversation →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
