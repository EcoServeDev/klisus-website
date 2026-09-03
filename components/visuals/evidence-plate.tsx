/**
 * EvidencePlate — soft media card for real satellite imagery. Rounded card,
 * layered shadow, image untouched (no filters/tints), optional thin vector
 * annotations, and a compact caption ending in the Copernicus line.
 *
 * Server component. `children` replaces the <Image> for interactive embeds
 * (CompareSlider) while keeping the card + caption grammar.
 */

import Image from "next/image";
import type { ReactNode } from "react";
import type { PlateDef } from "@/lib/plates";

export interface Annotation {
  /** rect in % of the image well */
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone?: "rust" | "green";
}

export default function EvidencePlate({
  plate,
  n: _n, // retained for API compatibility; the card no longer shows a plate number
  annotations = [],
  priority = false,
  bleed = false,
  hideCaption = false,
  sizes = "(min-width: 1280px) 1152px, 100vw",
  children,
  className = "",
}: {
  plate: PlateDef;
  n: string;
  annotations?: Annotation[];
  priority?: boolean;
  /** lets the plate run to the viewport's right edge from a centered column */
  bleed?: boolean;
  hideCaption?: boolean;
  sizes?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`${bleed ? "lg:mr-[calc(50%-50vw)]" : ""} overflow-hidden rounded-2xl bg-paper shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] ${className}`}
    >
      {/* image well */}
      <div className="relative overflow-hidden">
        {children ?? (
          <Image
            src={plate.src}
            width={plate.width}
            height={plate.height}
            alt={`${plate.composite} satellite composite, ${plate.place}`}
            priority={priority}
            sizes={sizes}
            draggable={false}
            className="w-full select-none"
          />
        )}

        {/* annotations — thin rects + soft label chips, closed vocabulary */}
        {annotations.map((a) => {
          const border = a.tone === "green" ? "border-ndvi-green" : "border-risk-rust-text";
          const dot = a.tone === "green" ? "bg-ndvi-green" : "bg-risk-rust-text";
          return (
            <span key={a.label} aria-hidden="true">
              <span
                className={`absolute rounded-sm border-[1.5px] ${border}`}
                style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%` }}
              />
              <span
                className="absolute mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-forest-black/70 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm"
                style={{ left: `${a.x}%`, top: `${a.y + a.h}%` }}
              >
                <span className={`h-1.5 w-1.5 flex-none rounded-full ${dot}`} />
                {a.label}
              </span>
            </span>
          );
        })}
      </div>

      {!hideCaption ? (
        <figcaption className="p-6">
          {plate.finding ? (
            <p className="text-[15px] font-medium leading-relaxed text-ink">{plate.finding}</p>
          ) : null}
          <p className="mt-2 font-mono text-[11px] text-paper-muted">
            {plate.place} · {plate.coords} · {plate.dates}
          </p>
          {plate.caveat ? (
            <p className="mt-1.5 text-[12px] leading-relaxed text-paper-muted">{plate.caveat}</p>
          ) : null}
          <p className="mt-1.5 font-mono text-[10px] text-paper-muted/80">
            Contains modified Copernicus Sentinel data ({plate.copernicusYears}), processed by
            KliSus
          </p>
        </figcaption>
      ) : null}
    </figure>
  );
}
