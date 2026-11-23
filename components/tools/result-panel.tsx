"use client";

/**
 * The dark result column: headline figure, the arithmetic, the sources and
 * the caveats — in that order, always. Sticky beside the inputs on desktop.
 */

import { useState, type ReactNode } from "react";
import { SOURCES } from "@/lib/tools/factors/sources";
import type { Step } from "@/lib/tools/types";

export function ResultPanel({
  label,
  value,
  unit,
  sub,
  steps,
  sourceIds,
  caveats,
  copyText,
  empty,
  children,
}: {
  label: string;
  value: ReactNode;
  unit?: string;
  sub?: ReactNode;
  steps: Step[];
  sourceIds: string[];
  caveats: string[];
  copyText?: string;
  /** Shown instead of the figure when inputs are incomplete. */
  empty?: string | null;
  children?: ReactNode;
}) {
  return (
    <aside
      aria-live="polite"
      className="dark-band rounded-2xl bg-forest-black p-5 text-cream shadow-[var(--shadow-lift)] sm:p-7 lg:sticky lg:top-24"
    >
      <p className="kicker">{label}</p>
      {empty ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{empty}</p>
      ) : (
        <>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span className="stat-num break-all text-[44px] text-cream sm:text-[52px]">{value}</span>
            {unit ? <span className="font-mono text-[14px] text-muted">{unit}</span> : null}
          </p>
          {sub ? <div className="mt-2 text-[14px] leading-relaxed text-muted">{sub}</div> : null}
          {children ? <div className="mt-6">{children}</div> : null}

          {steps.length ? (
            <div className="mt-7">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">How this is calculated</p>
              <ol className="divide-y divide-line border-y border-line">
                {steps.map((s, i) => (
                  <li key={i} className="py-2.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[13px] text-cream">{s.label}</span>
                      <span className="shrink-0 font-mono text-[13px] text-ndvi-green">{s.value}</span>
                    </div>
                    <p className="mt-0.5 break-words font-mono text-[11.5px] leading-relaxed text-muted">{s.expr}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {copyText ? <CopyButton text={copyText} /> : null}
        </>
      )}

      <Sources ids={sourceIds} />

      {caveats.length ? (
        <ul className="mt-6 space-y-2 border-t border-line pt-5">
          {caveats.map((c, i) => (
            <li key={i} className="flex gap-2 text-[12px] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-[7px] h-1 w-1 flex-none bg-review-amber" />
              {c}
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}

function Sources({ ids }: { ids: string[] }) {
  const list = ids.map((id) => SOURCES[id]).filter(Boolean);
  if (!list.length) return null;
  return (
    <div className="mt-6">
      <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Sources</p>
      <ul className="space-y-1.5">
        {list.map((s) => (
          <li key={s.id} className="text-[12px] leading-relaxed text-muted">
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-cream underline decoration-line underline-offset-2 hover:decoration-ndvi-green">
                {s.publisher}
              </a>
            ) : (
              <span className="text-cream">{s.publisher}</span>
            )}{" "}
            — {s.name} <span className="font-mono">({s.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setState("done");
        } catch {
          setState("fail");
        }
        setTimeout(() => setState("idle"), 2000);
      }}
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-1.5 text-[13px] font-medium text-cream transition-colors hover:border-cream/60"
    >
      {state === "done" ? "Copied" : state === "fail" ? "Copy failed" : "Copy result with workings"}
    </button>
  );
}

/** Plain-text export of a result, for pasting into emails or spreadsheets. */
export function resultText(title: string, headline: string, steps: Step[], sourceIds: string[]): string {
  const lines = [`${title}: ${headline}`, "", ...steps.map((s) => `${s.label}: ${s.expr} = ${s.value}`), "", "Sources:"];
  for (const id of sourceIds) {
    const s = SOURCES[id];
    if (s) lines.push(`- ${s.publisher}, ${s.name} (${s.year})${s.url ? ` ${s.url}` : ""}`);
  }
  lines.push("", "Estimate from KliSus free tools — klisus.com/tools. Not a verified inventory.");
  return lines.join("\n");
}

/** Horizontal bars for year-by-year series (CBAM, pricing). */
export function YearBars({ rows, format }: { rows: { label: string; value: number }[]; format: (n: number) => string }) {
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <ul className="space-y-1.5">
      {rows.map((r) => (
        <li key={r.label} className="grid grid-cols-[3rem_1fr_auto] items-center gap-3">
          <span className="font-mono text-[12px] text-muted">{r.label}</span>
          <span className="h-2 overflow-hidden rounded-full bg-surface-2">
            <span className="block h-full rounded-full bg-ndvi-green" style={{ width: `${(r.value / max) * 100}%` }} />
          </span>
          <span className="font-mono text-[12px] text-cream">{format(r.value)}</span>
        </li>
      ))}
    </ul>
  );
}
