/**
 * 05 — CLOSING. Quiet left-aligned close: display line + wordmark. No
 * buttons — the working CTA lives in the contact spread above.
 */
export default function Closing() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-x-6 px-6 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h2 className="font-display max-w-[18ch] text-[32px] text-cream md:text-[44px]">
            Better intelligence is built together.
          </h2>
          <p className="mt-12 font-mono text-[13px] uppercase tracking-[0.28em] text-cream">
            KliSus
          </p>
          <p className="voice-label mt-2">Climate Intelligence &amp; Economics</p>
        </div>
      </div>
    </section>
  );
}
