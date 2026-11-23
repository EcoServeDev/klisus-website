"use client";

import { useState } from "react";
import CountrySelect, { useCountry } from "@/components/tools/country-select";
import { CalcLayout, InputCard, NumberField, Segmented } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcElectricity } from "@/lib/tools/calc/electricity";
import { fmtMass, parseNum } from "@/lib/tools/format";

export default function ElectricityCalculator() {
  const [country, setCountry] = useCountry();
  const [kwh, setKwh] = useState("1000");
  const [period, setPeriod] = useState<"month" | "year">("month");
  const [re, setRe] = useState("");

  const kwhN = parseNum(kwh);
  const res = kwhN === null ? null : calcElectricity({ kwh: kwhN, period, country, renewableShare: (parseNum(re) ?? 0) / 100 });
  const m = res ? fmtMass(res.locationKg) : null;

  return (
    <CalcLayout
      inputs={
        <InputCard>
          <CountrySelect value={country} onChange={setCountry} />
          <Segmented
            label="The units cover"
            value={period}
            onChange={setPeriod}
            options={[
              { value: "month", label: "One month" },
              { value: "year", label: "A full year" },
            ]}
          />
          <NumberField
            label="Electricity used"
            unit="kWh"
            value={kwh}
            onChange={setKwh}
            help="Use the units consumed (kWh) on your bill, not the amount charged. If your bill shows kVAh, use the kWh reading."
          />
          <NumberField
            label="Covered by renewable certificates or a PPA (optional)"
            unit="%"
            value={re}
            onChange={setRe}
            placeholder="0"
            help="Only count renewable energy you can evidence: I-RECs, guarantees of origin, or a power purchase agreement."
          />
        </InputCard>
      }
      result={
        <ResultPanel
          label="Annual Scope 2, location-based"
          value={m?.value}
          unit={m?.unit}
          empty={res ? null : "Enter the kWh from your bill to see emissions."}
          sub={
            res && res.marketKg !== res.locationKg ? (
              <>Market-based (approx.): {fmtMass(res.marketKg).value} {fmtMass(res.marketKg).unit}</>
            ) : null
          }
          steps={res?.steps ?? []}
          sourceIds={res?.sourceIds ?? ["ember"]}
          caveats={res?.caveats ?? []}
          copyText={res && m ? resultText("Electricity emissions (annual, location-based)", `${m.value} ${m.unit}`, res.steps, res.sourceIds) : undefined}
        />
      }
    />
  );
}
