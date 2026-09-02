/**
 * EvidencePlate — the site's one image language. Every satellite image is a
 * framed, dated, annotated exhibit: plate number, hairline frame with corner
 * ticks, graticule edge ticks with computed coordinate labels, scale bar,
 * north glyph, and a fixed two-deck caption ending in the Copernicus line.
 *
 * The pixels are never touched: no filters, tints, or gradients over the
 * image — annotations are thin vector overlays only.
 *
 * Server component. `children` replaces the <Image> for interactive embeds
 * (CompareSlider) while keeping the plate frame + caption grammar.
 */

import Image from "next/image";
import type { ReactNode } from "react";
import CornerTicks from "@/components/ui/corner-ticks";
import { graticule, scaleBar, type PlateDef } from "@/lib/plates";

export interface Annotation {
  /** rect in % of the image well */
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone?: "rust" | "green";
}

const TICK_POSITIONS = [25, 50, 75];

export default function EvidencePlate({
  plate,
  n,
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
  const ticks = graticule(plate.bounds);
  const bar = scaleBar(plate.groundWidthKm);

  return (
    <figure className={`${bleed ? "lg:mr-[calc(50%-50vw)]" : ""} ${className}`}>
      <p className="voice-label mb-3">PLATE {n}</p>

      {/* the plate frame */}
      <div className="relative border border-paper-line p-2 sm:p-3">
        <CornerTicks />

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

          {/* graticule ticks — edges only, never over the subject */}
          <span aria-hidden="true">
            {TICK_POSITIONS.map((p) => (
              <span key={`t${p}`}>
                <span
                  className="absolute top-0 h-[6px] w-px -translate-x-1/2 bg-paper-line"
                  style={{ left: `${p}%` }}
                />
                <span
                  className="absolute bottom-0 h-[6px] w-px -translate-x-1/2 bg-paper-line"
                  style={{ left: `${p}%` }}
                />
                <span
                  className="absolute left-0 h-px w-[6px] -translate-y-1/2 bg-paper-line"
                  style={{ top: `${p}%` }}
                />
                <span
                  className="absolute right-0 h-px w-[6px] -translate-y-1/2 bg-paper-line"
                  style={{ top: `${p}%` }}
                />
              </span>
            ))}
            {ticks.lons.map((t) => (
              <span
                key={t.label}
                className="absolute top-1 -translate-x-1/2 bg-paper/80 px-1 font-mono text-[10px] leading-relaxed text-paper-muted"
                style={{ left: `${t.pos}%` }}
              >
                {t.label}
              </span>
            ))}
            <span
              className="absolute left-1 -translate-y-1/2 bg-paper/80 px-1 font-mono text-[10px] leading-relaxed text-paper-muted"
              style={{ top: `${ticks.lat.pos}%` }}
            >
              {ticks.lat.label}
            </span>
          </span>

          {/* annotations — thin rects + mono label chips, closed vocabulary */}
          {annotations.map((a) => {
            const border = a.tone === "green" ? "border-green-ink" : "border-risk-rust";
            const text = a.tone === "green" ? "text-green-ink" : "text-risk-rust";
            return (
              <span key={a.label} aria-hidden="true">
                <span
                  className={`absolute border-[1.5px] ${border}`}
                  style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%` }}
                />
                <span
                  className={`absolute mt-1 bg-paper/85 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${text}`}
                  style={{ left: `${a.x}%`, top: `${a.y + a.h}%` }}
                >
                  {a.label}
                </span>
              </span>
            );
          })}

          {/* scale bar — length computed from the export bounds */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-2 block bg-paper/80 pb-0.5"
            style={{ width: `${bar.frac * 100}%` }}
          >
            <span className="block h-[5px] border-b border-l border-r border-ink/70" />
            <span className="flex justify-between px-0.5 font-mono text-[10px] leading-relaxed text-ink">
              <span>0</span>
              <span>{bar.km} KM</span>
            </span>
          </span>

          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 bg-paper/80 px-1.5 py-0.5 font-mono text-[10px] text-ink"
          >
            N ↑
          </span>
        </div>
      </div>

      {!hideCaption ? (
        <figcaption className="mt-4 max-w-[70ch]">
          {plate.finding ? (
            <p className="text-[16px] leading-relaxed text-ink">{plate.finding}</p>
          ) : null}
          {/* metadata deck — fixed order, never reordered */}
          <p className="voice-label mt-2 normal-case tracking-[0.02em]">
            {plate.place} · {plate.coords} · SENTINEL-2 L2A · {plate.composite} · {plate.dates} ·
            10 M/PX
          </p>
          {plate.caveat ? (
            <p className="mt-1 font-mono text-[11px] text-paper-muted">{plate.caveat}</p>
          ) : null}
          <p className="mt-1 font-mono text-[10px] text-paper-muted/90">
            Contains modified Copernicus Sentinel data ({plate.copernicusYears}), processed by
            KliSus
          </p>
        </figcaption>
      ) : null}
    </figure>
  );
}
