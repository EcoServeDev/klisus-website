import { gridFor } from "@/lib/tools/factors/grid";
import { fmt, fmtFactor, fmtMoney, fmtPct } from "@/lib/tools/format";
import type { CalcResult, Step } from "@/lib/tools/types";

export type SolarInput = {
  kwp: number;
  /** Specific yield, kWh per kWp per year (from Global Solar Atlas). */
  yieldKwhPerKwp: number;
  capex: number;
  /** Tariff avoided per kWh, in the user's currency. */
  tariff: number;
  /** Annual tariff escalation, 0–1. */
  escalation: number;
  /** Annual output degradation, 0–1. */
  degradation: number;
  /** Annual O&M as a share of capex, 0–1. */
  omShare: number;
  discountRate: number;
  years: number;
  country: string;
};

export type SolarYear = { year: number; kwh: number; savings: number; cashflow: number; cumulative: number };

export type SolarOutput = CalcResult & {
  rows: SolarYear[];
  paybackYears: number | null;
  npv: number;
  irr: number | null;
  firstYearKwh: number;
  co2FirstYearKg: number | null;
  co2LifetimeKg: number | null;
};

export function npvOf(rate: number, cashflows: number[]): number {
  return cashflows.reduce((s, cf, t) => s + cf / Math.pow(1 + rate, t), 0);
}

/** IRR by bisection on [-0.99, 1]. Returns null when no sign change. */
export function irrOf(cashflows: number[]): number | null {
  let lo = -0.99;
  let hi = 1;
  let fLo = npvOf(lo, cashflows);
  const fHi = npvOf(hi, cashflows);
  if (fLo * fHi > 0) return null;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    const fMid = npvOf(mid, cashflows);
    if (Math.abs(fMid) < 1e-7) return mid;
    if (fLo * fMid < 0) hi = mid;
    else {
      lo = mid;
      fLo = fMid;
    }
  }
  return (lo + hi) / 2;
}

export function calcSolar(i: SolarInput): SolarOutput | null {
  if (!(i.kwp > 0) || !(i.yieldKwhPerKwp > 0) || !(i.capex >= 0) || !(i.tariff >= 0) || !(i.years >= 1)) return null;

  const rows: SolarYear[] = [];
  const cashflows = [-i.capex];
  let cumulative = -i.capex;
  let payback: number | null = null;
  let totalKwh = 0;
  const om = i.capex * i.omShare;

  for (let y = 1; y <= i.years; y++) {
    const kwh = i.kwp * i.yieldKwhPerKwp * Math.pow(1 - i.degradation, y - 1);
    const savings = kwh * i.tariff * Math.pow(1 + i.escalation, y - 1);
    const cashflow = savings - om;
    const prev = cumulative;
    cumulative += cashflow;
    if (payback === null && cumulative >= 0 && cashflow > 0) {
      payback = y - 1 + -prev / cashflow;
    }
    totalKwh += kwh;
    cashflows.push(cashflow);
    rows.push({ year: y, kwh, savings, cashflow, cumulative });
  }

  const npv = npvOf(i.discountRate, cashflows);
  const irr = irrOf(cashflows);
  const firstYearKwh = rows[0].kwh;
  const grid = gridFor(i.country);
  const co2FirstYearKg = grid ? firstYearKwh * grid.factor.value : null;
  const co2LifetimeKg = grid ? totalKwh * grid.factor.value : null;

  const steps: Step[] = [
    { label: "Year-1 generation", expr: `${fmt(i.kwp)} kWp × ${fmt(i.yieldKwhPerKwp)} kWh/kWp`, value: `${fmt(firstYearKwh)} kWh` },
    { label: "Year-1 savings", expr: `${fmt(firstYearKwh)} kWh × ${fmt(i.tariff, 4)}/kWh`, value: fmtMoney(rows[0].savings, "") },
    { label: "Annual O&M", expr: `${fmtMoney(i.capex, "")} × ${fmtPct(i.omShare)}`, value: fmtMoney(om, "") },
    {
      label: `NPV at ${fmtPct(i.discountRate)}`,
      expr: `−capex + Σ cashflowₜ ÷ (1 + r)ᵗ over ${i.years} years`,
      value: fmtMoney(npv, ""),
    },
  ];
  if (grid && co2FirstYearKg !== null) {
    steps.push({
      label: "CO2 avoided, year 1",
      expr: `${fmt(firstYearKwh)} kWh × ${fmtFactor(grid.factor.value)} kgCO2e/kWh (${grid.name})`,
      value: `${fmt(co2FirstYearKg / 1000, 2)} tCO2e`,
    });
  }

  return {
    rows,
    paybackYears: payback,
    npv,
    irr,
    firstYearKwh,
    co2FirstYearKg,
    co2LifetimeKg,
    steps,
    sourceIds: ["globalSolarAtlas", "ember", "userInput"],
    caveats: [
      "Assumes all generation offsets grid purchases at your tariff (self-consumption). Exported power is usually paid less.",
      "CO2 avoided uses today's average grid factor for every year. As grids decarbonise, real avoided emissions fall. Avoided emissions are not a reduction in your Scope 2 unless you consume the power.",
      "Excludes financing costs, inverter replacement, tax and incentives.",
    ],
  };
}
