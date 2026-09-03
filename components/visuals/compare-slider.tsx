"use client";

/**
 * Before/after compare slider — the skeptic's tool. The control is a real
 * <input type="range"> stretched invisibly over the figure, so keyboard
 * (arrows/Home/End), touch, mouse, and screen-reader semantics come free;
 * it drives a clip-path inset via the --split custom property (compositor
 * only, no layout). User-initiated, so it is exempt from reduced-motion.
 */

import Image from "next/image";
import { useRef } from "react";
import type { PlateDef } from "@/lib/plates";

export default function CompareSlider({
  before,
  after,
  beforeChip,
  afterChip,
  className = "",
}: {
  before: PlateDef;
  after: PlateDef;
  beforeChip: string;
  afterChip: string;
  className?: string;
}) {
  const box = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={box}
      className={`relative select-none overflow-hidden rounded-2xl focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-ink ${className}`}
      style={
        {
          "--split": "50%",
          aspectRatio: `${before.width} / ${before.height}`,
        } as React.CSSProperties
      }
    >
      <Image
        src={before.src}
        width={before.width}
        height={before.height}
        alt={`${before.composite} satellite composite, ${before.place}, ${beforeChip}`}
        draggable={false}
        className="w-full [-webkit-user-drag:none]"
      />
      <Image
        src={after.src}
        width={after.width}
        height={after.height}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 w-full [-webkit-user-drag:none]"
        style={{ clipPath: "inset(0 calc(100% - var(--split)) 0 0)" }}
      />

      {/* divider + handle, drawn from --split */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 w-[2px] bg-paper"
        style={{ left: "var(--split)" }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center whitespace-nowrap rounded-full bg-paper text-[11px] text-ink shadow-[0_2px_8px_rgba(13,21,18,0.35)]">
          ◂ ▸
        </span>
      </div>

      {/* dated chips, both sides always labeled */}
      <span className="absolute left-3 top-3 rounded-md bg-forest-black/70 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
        {beforeChip}
      </span>
      <span className="absolute right-3 top-3 rounded-md bg-forest-black/70 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
        {afterChip}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        defaultValue={50}
        aria-label={`Compare ${beforeChip} baseline with ${afterChip} imagery`}
        aria-valuetext={`50% — ${afterChip} imagery revealed`}
        onInput={(e) => {
          const v = e.currentTarget.value;
          box.current?.style.setProperty("--split", `${v}%`);
          e.currentTarget.setAttribute(
            "aria-valuetext",
            `${v}% — ${afterChip} imagery revealed`,
          );
        }}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]"
      />
    </div>
  );
}
