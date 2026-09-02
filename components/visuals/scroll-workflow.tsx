"use client";

/**
 * EUDR scroll-linked workflow: four steps on the left, one sticky scene
 * panel on the right crossfading between states as the reader scrolls.
 * Reduced motion / narrow screens: every scene renders inline, statically —
 * all content is in the DOM in every mode.
 */

import { useEffect, useRef, useState } from "react";
import Tag from "@/components/ui/tag";
import WorkflowStep from "@/components/ui/workflow-step";

const STEPS = [
  {
    n: "01",
    title: "Submit Plot Boundary",
    body: "Provide coordinates or a plot boundary file. The submitted geometry defines the analysis area for assessment.",
  },
  {
    n: "02",
    title: "Assess Historical Observations",
    body: "Public satellite archives are assessed across the analysis period, from the 31 December 2020 baseline to the present.",
  },
  {
    n: "03",
    title: "Identify Relevant Change Indicators",
    body: "Independent datasets are compared for indications of land-use change. Agreement and disagreement are both recorded.",
  },
  {
    n: "04",
    title: "Receive Structured Land Evidence",
    body: "The assessment is compiled into a structured evidence record, with sources, methods, and limitations documented.",
  },
];

const GRID = [12.5, 25, 37.5, 50, 62.5, 75, 87.5];
const YEARS = ["2020", "2022", "2024", "2026"];

/** Dashed plot boundary on a gridded forest-black field. */
function PlotField({ amber = false }: { amber?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-44 w-44 sm:h-56 sm:w-56"
      aria-hidden="true"
    >
      {GRID.map((p) => (
        <line
          key={`v${p}`}
          x1={p}
          y1="0"
          x2={p}
          y2="100"
          stroke="var(--cream)"
          strokeOpacity="0.05"
          strokeWidth="0.4"
        />
      ))}
      {GRID.map((p) => (
        <line
          key={`h${p}`}
          x1="0"
          y1={p}
          x2="100"
          y2={p}
          stroke="var(--cream)"
          strokeOpacity="0.05"
          strokeWidth="0.4"
        />
      ))}
      <polygon
        points="28,30 72,24 80,62 55,78 22,64"
        fill="var(--ndvi-green)"
        fillOpacity="0.05"
        stroke="var(--ndvi-green)"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      {amber ? (
        <polygon
          points="56,40 73,37 76,57 59,61"
          fill="var(--review-amber)"
          fillOpacity="0.12"
          stroke="var(--review-amber)"
          strokeWidth="0.8"
        />
      ) : null}
    </svg>
  );
}

function YearTicker() {
  return (
    <p className="font-mono text-[12px]">
      {YEARS.map((y, i) => (
        <span key={y}>
          {i > 0 ? <span className="text-muted"> → </span> : null}
          <span className={i === YEARS.length - 1 ? "text-cream" : "text-muted"}>
            {y}
          </span>
        </span>
      ))}
    </p>
  );
}

/** Simplified miniature of the evidence record for scene four. */
function MiniRecord() {
  const rows = [
    ["Production plot", "17.4521° N, 78.3845° E"],
    ["Analysis period", "31 Dec 2020 → 01 Sep 2026"],
    ["Change indicators", "Assessed & documented"],
    ["Sources & limitations", "Stated"],
  ];
  return (
    <div className="w-64 rounded-sm border border-paper-line bg-paper p-4 text-ink shadow-2xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-muted">
        KliSus Land Evidence Record
      </p>
      <div className="mt-3 divide-y divide-paper-line">
        {rows.map(([term, def]) => (
          <div key={term} className="py-2">
            <p className="font-mono text-[10px] text-ink">{term}</p>
            <p className="mt-0.5 font-mono text-[10px] text-paper-muted">{def}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-paper-muted">
        Illustrative sample
      </p>
    </div>
  );
}

function Scene({ step }: { step: number }) {
  return (
    <div className="flex h-full min-h-[20rem] w-full flex-col items-center justify-center gap-5 bg-forest-black p-6">
      {step === 3 ? (
        <MiniRecord />
      ) : (
        <>
          <PlotField amber={step === 2} />
          {step === 1 ? (
            <>
              <YearTicker />
              <div className="flex gap-2" aria-hidden="true">
                <div className="h-10 w-14 rounded-sm border border-line bg-ndvi-green/20" />
                <div className="h-10 w-14 rounded-sm border border-line bg-ndvi-green/40" />
                <div className="h-10 w-14 rounded-sm border border-line bg-ndvi-green/70" />
              </div>
            </>
          ) : null}
          {step === 2 ? <Tag tone="amber">CHANGE INDICATOR IDENTIFIED</Tag> : null}
        </>
      )}
    </div>
  );
}

function SceneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line bg-surface-1">
      {children}
    </div>
  );
}

export default function ScrollWorkflow() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const intersecting = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const i = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (i === -1) continue;
          if (entry.isIntersecting) intersecting.add(i);
          else intersecting.delete(i);
        }
        if (intersecting.size > 0) setActive(Math.max(...intersecting));
      },
      { threshold: 0.5 },
    );
    for (const el of stepRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        {STEPS.map((step, i) => (
          <div
            key={step.n}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`flex flex-col justify-center py-8 ${
              reduced ? "" : "lg:min-h-[45vh]"
            }`}
          >
            <WorkflowStep n={step.n} title={step.title} active={i === active}>
              {step.body}
            </WorkflowStep>
            {/* Inline scene: always on mobile; on desktop only when motion
                is reduced (the sticky panel is not rendered then). */}
            <div className={`mt-6 ${reduced ? "" : "lg:hidden"}`}>
              <SceneFrame>
                <Scene step={i} />
              </SceneFrame>
            </div>
          </div>
        ))}
      </div>

      {!reduced ? (
        <div className="hidden lg:block">
          <div
            className="sticky top-24 h-[70vh] overflow-hidden rounded-sm border border-line bg-surface-1"
            aria-hidden="true"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`absolute inset-0 transition-opacity duration-[400ms] ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Scene step={i} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
