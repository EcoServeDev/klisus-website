import type { CSSProperties } from "react";
import Button from "@/components/ui/button";
import Reveal from "@/components/visuals/reveal";

/** The page's working CTA: a green-washed rounded panel. */
const BODY =
  "Whether you are exploring a strategic partnership, institutional " +
  "collaboration, research opportunity, or KliSus solution, we'd like to " +
  "hear from you.";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <h2 className="sr-only">Contact</h2>
      <div className="rounded-2xl bg-green-wash p-8 sm:p-12">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div style={{ "--i": 0 } as CSSProperties}>
            <p className="voice-lede max-w-[44ch] text-[20px] text-ink md:text-[24px]">{BODY}</p>
          </div>
          <div style={{ "--i": 1 } as CSSProperties}>
            <p className="text-[16px] font-medium text-ink">
              <a href="mailto:teams@klisus.com" className="transition-colors hover:text-green-ink">
                teams@klisus.com
              </a>
            </p>
            <p className="mt-1 text-[15px] text-paper-muted">Dubai, UAE</p>
            <div className="mt-6">
              <Button href="mailto:teams@klisus.com">Start a Conversation</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
