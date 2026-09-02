import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";

/**
 * 04 — CONTACT. The page's working CTA, given presence as a split bordered
 * card: invitation left, data-voice contact rows + button right.
 */

const BODY =
  "Whether you are exploring a strategic partnership, institutional " +
  "collaboration, research opportunity, or KliSus solution, we'd like to " +
  "hear from you.";

export default function Contact() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="animate-fade-up rounded-sm border border-line bg-surface-1">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow n="04" className="mb-4">
                CONTACT
              </Eyebrow>
              <p className="max-w-[52ch] text-[16px] leading-relaxed text-cream">{BODY}</p>
            </div>
            <div className="lg:border-l lg:border-line lg:pl-16">
              <dl className="space-y-4">
                <div>
                  <dt className="eyebrow mb-1.5">Email</dt>
                  <dd className="font-mono text-[13px] text-cream">
                    <a
                      href="mailto:teams@klisus.com"
                      className="transition-colors hover:text-ndvi-green"
                    >
                      teams@klisus.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1.5">Location</dt>
                  <dd className="font-mono text-[13px] text-cream">Dubai, UAE</dd>
                </div>
              </dl>
              <div className="mt-8">
                <Button href="mailto:teams@klisus.com">Start a Conversation →</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
