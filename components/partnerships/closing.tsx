/**
 * 05 — CLOSING. Quiet centered close: editorial line + wordmark. No buttons —
 * the working CTA lives in the contact card above.
 */
export default function Closing() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h2 className="font-display text-[28px] leading-[1.15] text-cream sm:text-[40px]">
          Better intelligence is built together.
        </h2>
        <p className="mt-10 font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-cream">
          KliSus
        </p>
        <p className="eyebrow mt-2">Climate Intelligence &amp; Economics</p>
      </div>
    </section>
  );
}
