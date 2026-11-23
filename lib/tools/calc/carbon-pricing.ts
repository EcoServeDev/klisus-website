import { CBAM_YEARS, FREE_ALLOCATION_REMAINING, type ScenarioKey } from "@/lib/tools/factors/cbam";
import { priceIn, type PricePath } from "@/lib/tools/calc/cbam";
import { fmt, fmtMoney, fmtPct } from "@/lib/tools/format";
import type { CalcResult } from "@/lib/tools/types";

export type CarbonPricingInput = {
  /** Annual emissions in tCO2e (embedded in EU-bound goods or own Scope 1+2). */
  emissions: number;
  /** Share of those emissions exposed to the EU price, 0–1. */
  exposedShare: number;
  /** Planned annual emissions-intensity reduction, 0–1. */
  annualReduction: number;
  /** Apply the CBAM free-allocation phase-out (CBAM sectors only). */
  applyPhaseOut: boolean;
  /** Carbon price already paid at home, € per tCO2e (deducted). */
  domesticPrice: number;
  scenarios: Record<ScenarioKey, PricePath>;
};

export type PricingRow = {
  year: number;
  exposed: number;
  payableShare: number;
  cost: Record<ScenarioKey, number>;
  price: Record<ScenarioKey, number>;
};

export type CarbonPricingOutput = CalcResult & { rows: PricingRow[]; totals: Record<ScenarioKey, number> };

const KEYS: ScenarioKey[] = ["low", "base", "high"];

export function calcCarbonPricing(i: CarbonPricingInput): CarbonPricingOutput | null {
  if (!(i.emissions > 0)) return null;
  const share = Math.min(Math.max(i.exposedShare, 0), 1);
  const red = Math.min(Math.max(i.annualReduction, 0), 1);
  const totals = { low: 0, base: 0, high: 0 };

  const rows: PricingRow[] = CBAM_YEARS.map((year) => {
    const t = year - CBAM_YEARS[0];
    const exposed = i.emissions * Math.pow(1 - red, t) * share;
    const payableShare = i.applyPhaseOut ? 1 - FREE_ALLOCATION_REMAINING[year] : 1;
    const price = {} as Record<ScenarioKey, number>;
    const cost = {} as Record<ScenarioKey, number>;
    for (const k of KEYS) {
      price[k] = priceIn(year, i.scenarios[k]);
      cost[k] = exposed * payableShare * Math.max(0, price[k] - Math.max(0, i.domesticPrice));
      totals[k] += cost[k];
    }
    return { year, exposed, payableShare, cost, price };
  });

  const last = rows[rows.length - 1];
  return {
    rows,
    totals,
    steps: [
      { label: "Exposed emissions 2026", expr: `${fmt(i.emissions)} tCO2e × ${fmtPct(share)}`, value: `${fmt(rows[0].exposed, 1)} tCO2e` },
      {
        label: "Exposed emissions 2034",
        expr: `after ${fmtPct(red)} a year reduction`,
        value: `${fmt(last.exposed, 1)} tCO2e`,
      },
      {
        label: "Base case 2034",
        expr: `${fmt(last.exposed, 1)} × ${fmtPct(last.payableShare)} payable × (€${fmt(last.price.base)} − €${fmt(i.domesticPrice)})`,
        value: fmtMoney(last.cost.base),
      },
      { label: "Base case total 2026–2034", expr: "sum of yearly exposure", value: fmtMoney(totals.base) },
    ],
    sourceIds: ["etsDirective", "klisusAssumption", "userInput"],
    caveats: [
      "Scenario analysis for planning and disclosure (e.g. TCFD / IFRS S2 transition risk). The price paths are illustrative assumptions, not forecasts.",
      "Exposure is shown as a cost whoever pays it first. Under CBAM the EU importer pays and usually passes the cost through in price.",
    ],
  };
}
