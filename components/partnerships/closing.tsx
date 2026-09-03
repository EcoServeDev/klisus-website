import type { CSSProperties } from "react";
import Image from "next/image";
import Reveal from "@/components/visuals/reveal";

/** Quiet centered close: display line + logo lockup. */
export default function Closing() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 text-center lg:pb-28">
      <Reveal>
        <h2
          className="font-display mx-auto max-w-[18ch] text-[30px] font-medium text-ink md:text-[40px]"
          style={{ "--i": 0 } as CSSProperties}
        >
          Better intelligence is built together.
        </h2>
        <p
          className="mt-10 flex items-center justify-center gap-2.5 text-[19px] font-bold tracking-[-0.01em] text-ink"
          style={{ "--i": 1 } as CSSProperties}
        >
          <Image src="/klisus-logo.png" alt="" width={26} height={26} />
          KliSus
        </p>
        <p
          className="mt-2 text-[14px] text-paper-muted"
          style={{ "--i": 2 } as CSSProperties}
        >
          Climate Intelligence &amp; Economics
        </p>
      </Reveal>
    </section>
  );
}
