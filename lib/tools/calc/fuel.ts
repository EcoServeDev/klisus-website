import { FUELS, type FuelUnit } from "@/lib/tools/factors/fuels";
import { fmt, fmtFactor } from "@/lib/tools/format";
import type { CalcResult, Step } from "@/lib/tools/types";

export type FuelLine = { fuelId: string; unit: FuelUnit; quantity: number };

export type FuelOutput = CalcResult & {
  totalKg: number;
  lines: { fuelId: string; kg: number | null }[];
};

export function calcFuel(lines: FuelLine[]): FuelOutput {
  const steps: Step[] = [];
  const out: FuelOutput["lines"] = [];
  let total = 0;
  for (const line of lines) {
    const fuel = FUELS.find((f) => f.id === line.fuelId);
    const factor = fuel?.perUnit[line.unit];
    if (!fuel || factor === undefined || !(line.quantity >= 0)) {
      out.push({ fuelId: line.fuelId, kg: null });
      continue;
    }
    const kg = line.quantity * factor;
    total += kg;
    out.push({ fuelId: line.fuelId, kg });
    steps.push({
      label: fuel.name,
      expr: `${fmt(line.quantity)} ${line.unit} × ${fmtFactor(factor)} kgCO2e/${unitSingular(line.unit)}`,
      value: `${fmt(kg, 1)} kgCO2e`,
    });
  }
  if (steps.length > 1) steps.push({ label: "Total", expr: "sum of lines", value: `${fmt(total, 1)} kgCO2e` });

  return {
    totalKg: total,
    lines: out,
    steps,
    sourceIds: ["desnz"],
    caveats: [
      "Scope 1 combustion emissions (CO2, CH4, N2O) using UK DESNZ 2025 fuel properties. Local fuel specifications vary slightly.",
      "Excludes well-to-tank (upstream) emissions, which are Scope 3.",
    ],
  };
}

function unitSingular(u: FuelUnit): string {
  return u === "litres" ? "litre" : u === "tonnes" ? "tonne" : u === "cubic metres" ? "m³" : "kWh";
}
