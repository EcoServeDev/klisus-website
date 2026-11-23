import { FREIGHT_MODES } from "@/lib/tools/factors/freight";
import { fmt, fmtFactor } from "@/lib/tools/format";
import type { CalcResult, Step } from "@/lib/tools/types";

export type FreightLeg = { modeId: string; tonnes: number; km: number };

export type FreightOutput = CalcResult & {
  totalKg: number;
  totalTkm: number;
  legs: { kg: number | null; tkm: number }[];
};

export function calcFreight(legs: FreightLeg[]): FreightOutput {
  const steps: Step[] = [];
  let totalKg = 0;
  let totalTkm = 0;
  const out: FreightOutput["legs"] = legs.map((leg, i) => {
    const mode = FREIGHT_MODES.find((m) => m.id === leg.modeId);
    const tkm = Math.max(0, leg.tonnes) * Math.max(0, leg.km);
    if (!mode) return { kg: null, tkm };
    const kg = tkm * mode.kgPerTkm;
    totalKg += kg;
    totalTkm += tkm;
    steps.push({
      label: `Leg ${i + 1}: ${mode.name}`,
      expr: `${fmt(leg.tonnes)} t × ${fmt(leg.km)} km × ${fmtFactor(mode.kgPerTkm)} kgCO2e/t·km`,
      value: `${fmt(kg, 1)} kgCO2e`,
    });
    return { kg, tkm };
  });
  if (steps.length > 1) {
    steps.push({ label: "Total", expr: `${fmt(totalTkm)} t·km across ${steps.length} legs`, value: `${fmt(totalKg, 1)} kgCO2e` });
  }

  return {
    totalKg,
    totalTkm,
    legs: out,
    steps,
    sourceIds: ["desnz"],
    caveats: [
      "Activity-based estimate (tonne × distance × mode intensity) in the GLEC / ISO 14083 structure, using DESNZ 2025 default intensities.",
      "Default intensities are tank-to-wheel. A full ISO 14083 well-to-wheel figure adds upstream (well-to-tank) fuel emissions on top.",
      "Use the actual routed distance, not straight-line distance. Carrier-specific data will be more accurate than defaults.",
    ],
  };
}
