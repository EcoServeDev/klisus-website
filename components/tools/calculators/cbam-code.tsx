"use client";

import Link from "next/link";
import { useState } from "react";
import { CalcLayout, InputCard, TextField } from "@/components/tools/fields";
import { ResultPanel } from "@/components/tools/result-panel";
import { checkCbamCode, cbamCodeCaveats } from "@/lib/tools/calc/cbam";
import { CBAM_SUPPLIER_ASKS } from "@/lib/tools/factors/cbam";

const EXAMPLES = ["7208 51 20", "7604 29 10", "3102 10 10", "6109 10 00", "7202"];

const BADGE = {
  in: { text: "In scope", cls: "bg-risk-rust/20 text-risk-rust-text" },
  excluded: { text: "Not in scope", cls: "bg-ndvi-green/15 text-ndvi-green" },
  out: { text: "Not in scope", cls: "bg-ndvi-green/15 text-ndvi-green" },
  check: { text: "Check further", cls: "bg-review-amber/20 text-review-amber" },
} as const;

export default function CbamCodeChecker() {
  const [code, setCode] = useState("7208 51 20");
  const r = checkCbamCode(code);

  let headline: React.ReactNode = null;
  let body: React.ReactNode = null;

  if (r.status === "in") {
    headline = BADGE.in.text;
    body = (
      <>
        <p className="text-[15px] text-cream">
          <span className="font-semibold">{r.entry.sector}</span>: {r.entry.desc}{" "}
          <span className="font-mono text-[12px] text-muted">(listed under {spaced(r.entry.prefix)})</span>
        </p>
        <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">What your EU buyer will ask you for</p>
        <ul className="mt-2 space-y-1.5">
          {CBAM_SUPPLIER_ASKS[r.entry.sector].map((a) => (
            <li key={a} className="flex gap-2 text-[14px] leading-relaxed text-cream/90">
              <span aria-hidden="true" className="mt-[9px] h-1 w-1 flex-none bg-ndvi-green" />
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[14px] text-muted">
          Next:{" "}
          <Link href="/tools/cbam-cost" className="text-cream underline underline-offset-2 hover:decoration-ndvi-green">
            estimate the CBAM cost on these goods →
          </Link>
        </p>
      </>
    );
  } else if (r.status === "excluded") {
    headline = BADGE.excluded.text;
    body = (
      <p className="text-[15px] leading-relaxed text-cream">
        Chapter/heading {spaced(r.entry.prefix)} ({r.entry.sector}) is covered, but {spaced(r.exception)} is specifically excluded from Annex I.
      </p>
    );
  } else if (r.status === "check") {
    headline = BADGE.check.text;
    body = (
      <>
        <p className="text-[15px] leading-relaxed text-cream">{r.reason}</p>
        <ul className="mt-4 space-y-1">
          {r.candidates.slice(0, 8).map((c) => (
            <li key={c.prefix} className="font-mono text-[12px] text-muted">
              {spaced(c.prefix)} · {c.sector} · {c.desc}
            </li>
          ))}
          {r.candidates.length > 8 ? <li className="font-mono text-[12px] text-muted">…and {r.candidates.length - 8} more</li> : null}
        </ul>
      </>
    );
  } else if (r.status === "out") {
    headline = BADGE.out.text;
    body = (
      <p className="text-[15px] leading-relaxed text-cream">
        {spaced(r.digits)} is not listed in CBAM Annex I. Your EU buyer should not need embedded-emissions data for CBAM on these goods.
        They may still ask for carbon data for their own reporting.
      </p>
    );
  }

  const badge = r.status !== "invalid" ? BADGE[r.status] : null;

  return (
    <CalcLayout
      inputs={
        <InputCard>
          <TextField
            label="CN or HS code"
            value={code}
            onChange={setCode}
            mono
            placeholder="e.g. 7208 51 20"
            help="Copy it from your shipping bill, invoice or export declaration. Spaces and dots are fine. The first 6 digits are the international HS code; the EU's CN code adds 2 more."
          />
          <div>
            <p className="mb-2 text-[12px] text-paper-muted">Try:</p>
            <div className="flex flex-wrap gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setCode(ex)}
                  className="rounded-full border border-paper-line bg-paper-surface px-3 py-1 font-mono text-[12px] text-paper-muted transition-colors hover:border-ink/30 hover:text-ink"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </InputCard>
      }
      result={
        <ResultPanel
          label="CBAM scope"
          value={
            badge ? (
              <span className={`inline-block rounded-full px-4 py-1 text-[22px] font-medium sm:text-[26px] ${badge.cls}`}>{headline}</span>
            ) : null
          }
          empty={r.status === "invalid" ? r.reason : null}
          steps={[]}
          sourceIds={["cbamReg"]}
          caveats={cbamCodeCaveats(r.status)}
        >
          {body}
        </ResultPanel>
      }
    />
  );
}

function spaced(d: string): string {
  return d.replace(/^(\d{4})(\d{2})?(\d{2})?(\d+)?$/, (_, a, b, c, e) => [a, b, c, e].filter(Boolean).join(" "));
}
