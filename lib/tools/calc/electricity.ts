import { gridFor } from "@/lib/tools/factors/grid";
import { fmt, fmtFactor, fmtPct } from "@/lib/tools/format";
import type { CalcResult } from "@/lib/tools/types";

export type ElectricityInput = {
  kwh: number;
  period: "month" | "year";
  country: string;
  /** Share of consumption covered by renewable certificates / PPAs, 0–1. */
  renewableShare: number;
};

export type ElectricityOutput = CalcResult & {
  annualKwh: number;
  factor: number;
  locationKg: number;
  marketKg: number;
};

export function calcElectricity(input: ElectricityInput): ElectricityOutput | null {
  const grid = gridFor(input.country);
  if (!grid || input.kwh < 0) return null;
  const share = Math.min(Math.max(input.renewableShare, 0), 1);
  const annualKwh = input.period === "month" ? input.kwh * 12 : input.kwh;
  const f = grid.factor.value;
  const locationKg = annualKwh * f;
  const marketKg = annualKwh * (1 - share) * f;

  const steps = [];
  if (input.period === "month") {
    steps.push({ label: "Annualise", expr: `${fmt(input.kwh)} kWh × 12 months`, value: `${fmt(annualKwh)} kWh` });
  }
  steps.push({
    label: "Location-based",
    expr: `${fmt(annualKwh)} kWh × ${fmtFactor(f)} kgCO2e/kWh (${grid.name}, ${grid.factor.year})`,
    value: `${fmt(locationKg, 1)} kgCO2e`,
  });
  if (share > 0) {
    steps.push({
      label: "Market-based (approx.)",
      expr: `${fmt(annualKwh)} kWh × (1 − ${fmtPct(share)}) × ${fmtFactor(f)}`,
      value: `${fmt(marketKg, 1)} kgCO2e`,
    });
  }

  const caveats = [
    "Location-based Scope 2 estimate using the national average grid. Not a verified inventory.",
    "Ember factors are generation-side; grid losses and sub-national grids are not reflected.",
  ];
  if (share > 0) {
    caveats.push(
      "The market-based figure uses the grid average for the uncovered share. A GHG Protocol market-based figure should use your supplier's or the residual-mix factor, and only certificates you can evidence.",
    );
  }

  return { annualKwh, factor: f, locationKg, marketKg, steps, sourceIds: ["ember"], caveats };
}
