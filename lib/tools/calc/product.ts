import { FREIGHT_MODES } from "@/lib/tools/factors/freight";
import { gridFor } from "@/lib/tools/factors/grid";
import { MATERIALS } from "@/lib/tools/factors/materials";
import { fmt, fmtFactor } from "@/lib/tools/format";
import type { CalcResult, Step } from "@/lib/tools/types";

export type MaterialLine = {
  /** A MATERIALS id, or "custom" with customKgPerKg set. */
  materialId: string;
  kg: number;
  customName?: string;
  customKgPerKg?: number;
};

export type ProductInput = {
  materials: MaterialLine[];
  /** Electricity used in your own process, per product unit. */
  processKwh: number;
  country: string;
  /** Inbound transport of all materials: one mode and distance. */
  transportModeId: string;
  transportKm: number;
};

export type ProductOutput = CalcResult & {
  totalKg: number;
  materialsKg: number;
  energyKg: number;
  transportKg: number;
  massKg: number;
};

export function calcProduct(input: ProductInput): ProductOutput {
  const steps: Step[] = [];
  const sourceIds = new Set<string>();
  let materialsKg = 0;
  let massKg = 0;

  for (const line of input.materials) {
    if (!(line.kg > 0)) continue;
    let perKg: number | undefined;
    let name: string;
    if (line.materialId === "custom") {
      perKg = line.customKgPerKg;
      name = line.customName?.trim() || "Custom material";
      if (perKg !== undefined) sourceIds.add("userInput");
    } else {
      const m = MATERIALS.find((x) => x.id === line.materialId);
      perKg = m ? m.kgPerTonne / 1000 : undefined;
      name = m?.name ?? "Unknown";
      if (m) sourceIds.add("desnz");
    }
    if (perKg === undefined || !(perKg >= 0)) continue;
    const kg = line.kg * perKg;
    materialsKg += kg;
    massKg += line.kg;
    steps.push({ label: name, expr: `${fmt(line.kg, 3)} kg × ${fmtFactor(perKg)} kgCO2e/kg`, value: `${fmt(kg, 3)} kgCO2e` });
  }

  let energyKg = 0;
  const grid = gridFor(input.country);
  if (input.processKwh > 0 && grid) {
    energyKg = input.processKwh * grid.factor.value;
    sourceIds.add("ember");
    steps.push({
      label: "Process electricity",
      expr: `${fmt(input.processKwh, 3)} kWh × ${fmtFactor(grid.factor.value)} kgCO2e/kWh (${grid.name})`,
      value: `${fmt(energyKg, 3)} kgCO2e`,
    });
  }

  let transportKg = 0;
  const mode = FREIGHT_MODES.find((m) => m.id === input.transportModeId);
  if (mode && input.transportKm > 0 && massKg > 0) {
    transportKg = (massKg / 1000) * input.transportKm * mode.kgPerTkm;
    sourceIds.add("desnz");
    steps.push({
      label: "Inbound transport",
      expr: `${fmt(massKg / 1000, 4)} t × ${fmt(input.transportKm)} km × ${fmtFactor(mode.kgPerTkm)} kgCO2e/t·km`,
      value: `${fmt(transportKg, 3)} kgCO2e`,
    });
  }

  const totalKg = materialsKg + energyKg + transportKg;
  if (steps.length > 1) steps.push({ label: "Cradle-to-gate total", expr: "materials + energy + transport", value: `${fmt(totalKg, 3)} kgCO2e` });

  return {
    totalKg,
    materialsKg,
    energyKg,
    transportKg,
    massKg,
    steps,
    sourceIds: [...sourceIds],
    caveats: [
      "Screening estimate in the structure of ISO 14067 (cradle-to-gate). Not a verified product carbon footprint or an EPD.",
      "Generic material factors are UK-based averages for primary production. Supplier-specific data or EPDs should replace them where available.",
      "Excludes process fuels other than electricity, packaging you did not list, waste and losses, and use/end-of-life stages.",
    ],
  };
}
