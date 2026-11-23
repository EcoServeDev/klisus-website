"use client";

import { useState } from "react";
import { CalcLayout, Checkbox, InputCard, NumberField } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcCarbonPricing } from "@/lib/tools/calc/carbon-pricing";
import { PRICE_SCENARIOS, type ScenarioKey } from "@/lib/tools/factors/cbam";
import { fmtMoney, parseNum } from "@/lib/tools/format";

const KEYS: ScenarioKey[] = ["low", "base", "high"];

export default function CarbonPricingCalculator() {
  const [emissions, setEmissions] = useState("5000");
  const [share, setShare] = useState("40");
  const [reduction, setReduction] = useState("3");
  const [phaseOut, setPhaseOut] = useState(true);
  const [domestic, setDomestic] = useState("");
  const [prices, setPrices] = useState(() =>
    Object.fromEntries(KEYS.map((k) => [k, { start: String(PRICE_SCENARIOS[k].start), growth: String(PRICE_SCENARIOS[k].growth) }])) as Record<
      ScenarioKey,
      { start: string; growth: string }
    >,
  );

  const e = parseNum(emissions);
  const scen = Object.fromEntries(
    KEYS.map((k) => [k, { start: parseNum(prices[k].start) ?? 0, growth: parseNum(prices[k].growth) ?? 0 }]),
  ) as Record<ScenarioKey, { start: number; growth: number }>;
  const res =
    e !== null
      ? calcCarbonPricing({
          emissions: e,
          exposedShare: (parseNum(share) ?? 100) / 100,
          annualReduction: (parseNum(reduction) ?? 0) / 100,
          applyPhaseOut: phaseOut,
          domesticPrice: parseNum(domestic) ?? 0,
          scenarios: scen,
        })
      : null;

  return (
    <CalcLayout
      inputs={
        <div className="space-y-5">
          <InputCard title="Your emissions">
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField
                label="Annual emissions"
                unit="tCO2e"
                value={emissions}
                onChange={setEmissions}
                help="Scope 1 + 2, or the emissions embedded in your EU-bound goods."
              />
              <NumberField label="Share exposed to an EU carbon price" unit="%" value={share} onChange={setShare} help="e.g. the share of output sold into the EU." />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Planned reduction per year" unit="%" value={reduction} onChange={setReduction} />
              <NumberField label="Carbon price paid at home (optional)" unit="€/tCO2e" value={domestic} onChange={setDomestic} placeholder="0" />
            </div>
            <Checkbox
              label="Apply the CBAM free-allocation phase-out"
              checked={phaseOut}
              onChange={setPhaseOut}
              help="Tick for CBAM goods (steel, aluminium, cement, fertilisers, hydrogen). Exposure then ramps from 2.5% in 2026 to 100% in 2034. Untick to price all exposed emissions from day one."
            />
          </InputCard>
          <InputCard title="Price scenarios (€ per tCO2e)">
            {KEYS.map((k) => (
              <div key={k} className="grid gap-4 sm:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)] sm:items-end">
                <p className="text-[14px] font-semibold text-ink sm:pb-3">{PRICE_SCENARIOS[k].label}</p>
                <NumberField
                  label="2026 price"
                  unit="€"
                  value={prices[k].start}
                  onChange={(v) => setPrices((p) => ({ ...p, [k]: { ...p[k], start: v } }))}
                />
                <NumberField
                  label="Change per year"
                  unit="€/yr"
                  min={-1000}
                  value={prices[k].growth}
                  onChange={(v) => setPrices((p) => ({ ...p, [k]: { ...p[k], growth: v } }))}
                />
              </div>
            ))}
          </InputCard>
        </div>
      }
      result={
        <ResultPanel
          label="Base-case exposure, 2026–2034"
          value={res ? fmtMoney(res.totals.base) : null}
          sub={res ? <>Low {fmtMoney(res.totals.low)} · High {fmtMoney(res.totals.high)}</> : null}
          empty={res ? null : "Enter your annual emissions."}
          steps={res?.steps ?? []}
          sourceIds={res?.sourceIds ?? ["etsDirective", "klisusAssumption"]}
          caveats={res?.caveats ?? []}
          copyText={res ? resultText("Carbon price exposure 2026–2034 (base)", fmtMoney(res.totals.base), res.steps, res.sourceIds) : undefined}
        >
          {res ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] text-right font-mono text-[12px]">
                <thead>
                  <tr className="text-muted">
                    <th className="pb-2 text-left font-normal">Year</th>
                    {KEYS.map((k) => (
                      <th key={k} className="pb-2 font-normal">
                        {PRICE_SCENARIOS[k].label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-cream">
                  {res.rows.map((r) => (
                    <tr key={r.year} className="border-t border-line">
                      <td className="py-1.5 text-left text-muted">{r.year}</td>
                      {KEYS.map((k) => (
                        <td key={k} className={`py-1.5 ${k === "base" ? "text-ndvi-green" : ""}`}>
                          {fmtMoney(r.cost[k])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </ResultPanel>
      }
    />
  );
}
