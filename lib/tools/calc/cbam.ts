import {
  CBAM_ANNEX_I,
  CBAM_YEARS,
  FREE_ALLOCATION_REMAINING,
  type CbamEntry,
} from "@/lib/tools/factors/cbam";
import { fmt, fmtMoney, fmtPct } from "@/lib/tools/format";
import type { CalcResult } from "@/lib/tools/types";

/* ------------------------------------------------------------------ */
/* CN code checker                                                     */
/* ------------------------------------------------------------------ */

export type CodeCheck =
  | { status: "invalid"; reason: string }
  | { status: "in"; entry: CbamEntry; digits: string }
  | { status: "excluded"; entry: CbamEntry; digits: string; exception: string }
  | { status: "check"; digits: string; candidates: CbamEntry[]; reason: string }
  | { status: "out"; digits: string };

export function checkCbamCode(raw: string): CodeCheck {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 4) {
    return { status: "invalid", reason: "Enter at least the 4-digit heading (e.g. 7208), ideally the full 8-digit CN code." };
  }
  if (digits.length > 10) {
    return { status: "invalid", reason: "CN codes have 8 digits (10 with TARIC). Check the code." };
  }

  // 1. Code sits under a listed prefix.
  for (const entry of CBAM_ANNEX_I) {
    if (!digits.startsWith(entry.prefix)) continue;
    const exception = entry.except?.find((ex) => digits.startsWith(ex));
    if (exception) return { status: "excluded", entry, digits, exception };
    const ambiguous = entry.except?.some((ex) => ex.startsWith(digits) && ex !== digits);
    if (ambiguous) {
      return {
        status: "check",
        digits,
        candidates: [entry],
        reason: "Some subheadings under this code are in scope and some are excluded. Enter the full 8-digit CN code.",
      };
    }
    return { status: "in", entry, digits };
  }

  // 2. Code is shorter than one or more listed prefixes.
  const candidates = CBAM_ANNEX_I.filter((e) => e.prefix.startsWith(digits));
  if (candidates.length) {
    return {
      status: "check",
      digits,
      candidates,
      reason: "Only some subheadings under this code are covered. Enter the full 8-digit CN code.",
    };
  }

  return { status: "out", digits };
}

/* ------------------------------------------------------------------ */
/* Cost projection                                                     */
/* ------------------------------------------------------------------ */

export type PricePath = { start: number; growth: number };

export function priceIn(year: number, path: PricePath): number {
  return path.start + path.growth * (year - CBAM_YEARS[0]);
}

export type CbamCostInput = {
  tonnes: number;
  /** Specific embedded emissions of the goods, tCO2e per tonne. */
  intensity: number;
  /** CBAM benchmark for the CN code, tCO2e per tonne (0 if none). */
  benchmark: number;
  price: PricePath;
  /** Carbon price effectively paid in the country of production, € per tCO2e. */
  paidAbroad: number;
};

export type CbamYearRow = {
  year: number;
  price: number;
  embedded: number;
  freeShare: number;
  adjustment: number;
  certificates: number;
  cost: number;
  costPerTonne: number;
};

export type CbamCostOutput = CalcResult & { rows: CbamYearRow[]; total: number };

export function calcCbamCost(input: CbamCostInput): CbamCostOutput | null {
  const { tonnes, intensity, benchmark, price, paidAbroad } = input;
  if (!(tonnes > 0) || !(intensity >= 0) || !(benchmark >= 0)) return null;

  const embedded = tonnes * intensity;
  const rows: CbamYearRow[] = CBAM_YEARS.map((year) => {
    const p = priceIn(year, price);
    const freeShare = FREE_ALLOCATION_REMAINING[year];
    const adjustment = Math.min(embedded, tonnes * benchmark * freeShare);
    const certificates = embedded - adjustment;
    const cost = certificates * Math.max(0, p - Math.max(0, paidAbroad));
    return { year, price: p, embedded, freeShare, adjustment, certificates, cost, costPerTonne: cost / tonnes };
  });
  const total = rows.reduce((s, r) => s + r.cost, 0);

  const r0 = rows[0];
  const steps = [
    { label: "Embedded emissions", expr: `${fmt(tonnes)} t × ${fmt(intensity, 3)} tCO2e/t`, value: `${fmt(embedded, 1)} tCO2e` },
    {
      label: `Free-allocation adjustment ${r0.year}`,
      expr: `${fmt(tonnes)} t × ${fmt(benchmark, 3)} tCO2e/t × ${fmtPct(r0.freeShare)}`,
      value: `${fmt(r0.adjustment, 1)} tCO2e`,
    },
    { label: `Certificates ${r0.year}`, expr: `${fmt(embedded, 1)} − ${fmt(r0.adjustment, 1)}`, value: `${fmt(r0.certificates, 1)}` },
    {
      label: `Cost ${r0.year}`,
      expr: `${fmt(r0.certificates, 1)} × (€${fmt(r0.price)} − €${fmt(paidAbroad)} paid abroad)`,
      value: fmtMoney(r0.cost),
    },
    { label: "Total 2026–2034", expr: "sum of yearly costs", value: fmtMoney(total) },
  ];

  return {
    rows,
    total,
    steps,
    sourceIds: ["cbamReg", "etsDirective", "etsBenchmarks", "klisusAssumption", "userInput"],
    caveats: [
      "Estimate of CBAM certificate cost borne by the EU importer, usually passed through in price. Not a legal determination.",
      "Certificates for 2026 imports are surrendered in 2027. The 2026 certificate price is the quarterly average EUA price; later years use weekly averages.",
      "Importers bringing in less than 50 tonnes of CBAM goods a year (excluding electricity and hydrogen) are exempt under the 2025 simplification.",
      "If you leave intensity unverified, the importer may have to use EU default values, which carry a mark-up and are usually higher.",
    ],
  };
}
