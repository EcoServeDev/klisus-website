"use client";

/**
 * The Change Timeline — six real annual Sentinel-2 composites of the Apuí
 * clearing (2020–2025), presented per the evidence-plate grammar.
 *
 * Desktop + motion-allowed: a sticky year-scrub — boundary draw-on, year
 * scrub, change annotation, evidence-record rows — driven by one scroll
 * progress scalar (passive scroll → rAF, IO-gated; the only layout read per
 * tick is the track's bounding rect; writes are CSS vars + data attributes,
 * skipped when unchanged).
 *
 * Reduced-motion or <1024px: the SAME DOM lays out as a film strip — every
 * dated frame in flow with its caption, record rows visible. The film strip
 * is the credible base; the scrub is an enhancement of it.
 *
 * NOTE for integrators: no ancestor of this section may set overflow:hidden,
 * or position:sticky breaks.
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PLATES } from "@/lib/plates";

const YEARS = [2020, 2021, 2022, 2023, 2024, 2025] as const;

/** Central-clearing outline, % coords of the frame — identical every year. */
const AOI_POINTS = "46,33 62,36 66,58 57,81 37,73 33,50";

const RECORD_ROWS = [
  { term: "Analysis extent", value: "DEFINED" },
  { term: "Archive 2020–2025", value: "ASSESSED" },
  { term: "Change indicator", value: "IDENTIFIED" },
  { term: "Evidence record", value: "STRUCTURED" },
] as const;

function AoiOutline({
  className = "",
  drawn,
}: {
  className?: string;
  drawn: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <polygon
        points={AOI_POINTS}
        fill="none"
        stroke="var(--risk-rust)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        pathLength={100}
        style={
          drawn
            ? undefined
            : {
                strokeDasharray: 100,
                strokeDashoffset: "calc(100 - var(--draw, 0) * 100)",
              }
        }
      />
    </svg>
  );
}

export default function ChangeTimeline() {
  const trackRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLParagraphElement>(null);
  const [scrub, setScrub] = useState(false);

  // Keep the JS engine in sync with the CSS mode media query.
  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const mqWidth = window.matchMedia("(min-width: 1024px)");
    const update = () => setScrub(mqMotion.matches && mqWidth.matches);
    update();
    mqMotion.addEventListener("change", update);
    mqWidth.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqWidth.removeEventListener("change", update);
    };
  }, []);

  // The progress engine — scrub mode only; static mode attaches nothing.
  useEffect(() => {
    if (!scrub) return;
    const track = trackRef.current;
    const root = rootRef.current;
    const yearNode = yearRef.current;
    if (!track || !root || !yearNode) return;

    let vh = window.innerHeight;
    let trackH = track.offsetHeight;
    let dirty = true;
    let raf = 0;
    let running = false;
    let warmed = false;
    let lastYear = "";
    let lastPhase = "";

    const warmUp = () => {
      if (warmed) return;
      warmed = true;
      root
        .querySelectorAll("img")
        .forEach((img) => (img as HTMLImageElement).decode?.().catch(() => {}));
    };
    const measure = () => {
      vh = window.innerHeight;
      trackH = track.offsetHeight;
      dirty = true;
    };
    const onScroll = () => {
      dirty = true;
    };
    const tick = () => {
      if (dirty) {
        dirty = false;
        const top = track.getBoundingClientRect().top; // only layout read
        const denom = trackH - vh;
        const p = denom > 0 ? Math.min(1, Math.max(0, -top / denom)) : 0;
        root.style.setProperty("--draw", String(Math.min(1, p / 0.12)));
        const scrubP = Math.min(1, Math.max(0, (p - 0.12) / 0.6));
        const year = String(
          YEARS[Math.min(YEARS.length - 1, Math.floor(scrubP * YEARS.length))],
        );
        if (year !== lastYear) {
          lastYear = year;
          root.dataset.year = year;
          yearNode.textContent = year;
        }
        const phase = p < 0.12 ? "1" : p < 0.72 ? "2" : p < 0.86 ? "3" : "4";
        if (phase !== lastPhase) {
          lastPhase = phase;
          root.dataset.phase = phase;
        }
      }
      if (running) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        const was = running;
        running = entry.isIntersecting;
        if (running && !was) {
          warmUp();
          dirty = true;
          raf = requestAnimationFrame(tick);
        } else if (!running) {
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, [scrub]);

  const base = PLATES["apui-2020"];

  return (
    <section
      ref={trackRef}
      aria-label="Change timeline — Apuí, Amazonas, 2020 to 2025"
      className="ct-track relative"
    >
      <div className="ct-stage">
        <div
          ref={rootRef}
          data-year="2020"
          data-phase="0"
          className="ct-root grid gap-8 lg:grid-cols-[1fr_minmax(18rem,24rem)] lg:gap-12"
          style={{ "--draw": 0 } as React.CSSProperties}
        >
          {/* frames */}
          <div className="ct-frames relative rounded-2xl bg-paper p-2 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_10px_28px_rgba(13,21,18,0.07)] sm:p-3">
            <div className="ct-well relative">
              {YEARS.map((y) => {
                const plate = PLATES[`apui-${y}`];
                return (
                  <figure key={y} data-frame={y} className="ct-frame m-0">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={plate.src}
                        width={plate.width}
                        height={plate.height}
                        draggable={false}
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        alt={`True-color Sentinel-2 composite of the Apuí clearing, median June–September ${y}`}
                        className="w-full select-none"
                      />
                      {/* film-strip mode: the identical outline on every frame */}
                      <AoiOutline className="ct-aoi-static" drawn />
                    </div>
                    <figcaption className="ct-frame-caption mb-5 mt-2.5 text-[12px] font-medium text-paper-muted">
                      Median Jun–Sep {y}
                      {y === 2020 ? " · EUDR cutoff baseline · 31 Dec 2020" : ""}
                    </figcaption>
                  </figure>
                );
              })}
              {/* scrub mode: one outline drawing on over the stacked frames */}
              <AoiOutline className="ct-aoi-scrub hidden" drawn={false} />
              <div
                className="ct-annotation pointer-events-none absolute hidden items-center gap-1.5 rounded-md bg-forest-black/70 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm"
                style={{ left: "33%", top: "84%" }}
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-risk-rust-text" />
                Change indicator identified
              </div>
            </div>
          </div>

          {/* rail */}
          <div>
            <p
              ref={yearRef}
              className="ct-year stat-num hidden text-[64px] leading-none text-ink"
              aria-hidden="true"
            >
              2020
            </p>
            <p className="ct-baseline mt-2 hidden text-[12px] font-medium text-paper-muted">
              EUDR cutoff baseline · 31 Dec 2020
            </p>
            <ul className="ct-record mt-8 list-none space-y-3">
              {RECORD_ROWS.map((row) => (
                <li
                  key={row.term}
                  className="ct-record-row flex items-baseline justify-between gap-4 rounded-xl bg-paper p-4 shadow-[0_1px_2px_rgba(13,21,18,0.05),0_6px_18px_rgba(13,21,18,0.06)]"
                >
                  <span className="text-[15px] font-semibold text-ink">{row.term}</span>
                  <span
                    className={`text-[13px] font-semibold ${
                      row.value === "IDENTIFIED" ? "text-amber-ink" : "text-green-ink"
                    }`}
                  >
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* caption deck — the timeline participates in the plate language */}
        <figure className="m-0 mt-6 max-w-[70ch]">
          <p className="text-[15px] font-medium leading-relaxed text-ink">
            Recent clearing east of the Transamazônica, Apuí frontier.
          </p>
          <p className="mt-2 font-mono text-[11px] text-paper-muted">
            {base.place} · {base.coords} · Median Jun–Sep 2020–2025
          </p>
          <p className="mt-1.5 font-mono text-[10px] text-paper-muted/80">
            Contains modified Copernicus Sentinel data (2020–2025), processed by
            KliSus
          </p>
        </figure>
      </div>

      {/* Scrub-mode layout — stable class names; static film strip is the
          default. Only opacity/stroke-dashoffset animate. */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) and (min-width: 1024px) {
          .ct-track { height: 420dvh; }
          .ct-stage {
            position: sticky;
            top: 0;
            height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .ct-frames { max-width: calc((100dvh - 16rem) * 4 / 3); }
          .ct-well { aspect-ratio: 4 / 3; }
          .ct-frame { position: absolute; inset: 0; opacity: 0; transition: opacity 120ms linear; }
          .ct-frame > div { height: 100%; }
          .ct-frame img { height: 100%; object-fit: cover; }
          .ct-frame-caption { display: none; }
          .ct-aoi-static { display: none; }
          .ct-aoi-scrub { display: block; }
          .ct-year { display: block; }
          .ct-root[data-year="2020"] .ct-frame[data-frame="2020"],
          .ct-root[data-year="2021"] .ct-frame[data-frame="2021"],
          .ct-root[data-year="2022"] .ct-frame[data-frame="2022"],
          .ct-root[data-year="2023"] .ct-frame[data-frame="2023"],
          .ct-root[data-year="2024"] .ct-frame[data-frame="2024"],
          .ct-root[data-year="2025"] .ct-frame[data-frame="2025"] { opacity: 1; }
          .ct-baseline { display: block; opacity: 0; transition: opacity 120ms linear; }
          .ct-root[data-year="2020"] .ct-baseline { opacity: 1; }
          .ct-annotation { display: inline-flex; opacity: 0; transition: opacity 200ms ease-out; }
          .ct-root[data-phase="3"] .ct-annotation,
          .ct-root[data-phase="4"] .ct-annotation { opacity: 1; }
          .ct-record-row { opacity: 0; transform: translateY(8px); transition: opacity 300ms ease-out, transform 300ms ease-out; }
          .ct-record-row:nth-child(2) { transition-delay: 60ms; }
          .ct-record-row:nth-child(3) { transition-delay: 120ms; }
          .ct-record-row:nth-child(4) { transition-delay: 180ms; }
          .ct-root[data-phase="4"] .ct-record-row { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
