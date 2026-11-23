import { gridFor } from "@/lib/tools/factors/grid";
import { fmt, fmtFactor, fmtPct } from "@/lib/tools/format";
import type { CalcResult, Step } from "@/lib/tools/types";

export type CloudInput = {
  country: string;
  /** IT energy in kWh, or derived from servers × watts × hours. */
  itKwh: number;
  pue: number;
  /** Renewable share the provider reports for this region / contract, 0–1. */
  renewableShare: number;
};

export type CloudOutput = CalcResult & {
  facilityKwh: number;
  locationKg: number;
  marketKg: number;
};

export function serversToKwh(servers: number, avgWatts: number, hours: number): number {
  return (Math.max(0, servers) * Math.max(0, avgWatts) * Math.max(0, hours)) / 1000;
}

export function calcCloud(input: CloudInput): CloudOutput | null {
  const grid = gridFor(input.country);
  if (!grid || !(input.itKwh >= 0) || !(input.pue >= 1)) return null;
  const share = Math.min(Math.max(input.renewableShare, 0), 1);
  const facilityKwh = input.itKwh * input.pue;
  const f = grid.factor.value;
  const locationKg = facilityKwh * f;
  const marketKg = locationKg * (1 - share);

  const steps: Step[] = [
    { label: "Facility energy", expr: `${fmt(input.itKwh)} kWh IT × PUE ${fmt(input.pue, 2)}`, value: `${fmt(facilityKwh)} kWh` },
    {
      label: "Location-based",
      expr: `${fmt(facilityKwh)} kWh × ${fmtFactor(f)} kgCO2e/kWh (${grid.name}, ${grid.factor.year})`,
      value: `${fmt(locationKg, 1)} kgCO2e`,
    },
  ];
  if (share > 0) {
    steps.push({ label: "Market-based (approx.)", expr: `${fmt(locationKg, 1)} × (1 − ${fmtPct(share)})`, value: `${fmt(marketKg, 1)} kgCO2e` });
  }

  return {
    facilityKwh,
    locationKg,
    marketKg,
    steps,
    sourceIds: ["ember", "uptime"],
    caveats: [
      "Operational electricity only. Excludes embodied emissions of hardware and buildings.",
      "Uses the national grid average for the region's country. Some regions sit on grids that differ markedly from the national average (notably US states).",
      "Prefer your provider's own carbon report (AWS, Azure and Google Cloud each publish one) when you have it.",
    ],
  };
}
