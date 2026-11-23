"use client";

import { useState } from "react";
import CountrySelect, { useCountry } from "@/components/tools/country-select";
import { CalcLayout, InputCard, NumberField, Segmented, SelectField } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcCloud, serversToKwh } from "@/lib/tools/calc/cloud";
import { CLOUD_REGIONS, DEFAULT_PUE } from "@/lib/tools/factors/cloud";
import { fmt, fmtMass, parseNum } from "@/lib/tools/format";

const REGION_OPTIONS = [
  ...CLOUD_REGIONS.map((r) => ({ value: r.id, label: r.name, group: r.provider })),
  { value: "own", label: "My own server room / colocation", group: "Other" },
];

export default function CloudCalculator() {
  const [ownCountry, setOwnCountry] = useCountry();
  const [region, setRegion] = useState("aws-me-central-1");
  const [mode, setMode] = useState<"servers" | "kwh">("servers");
  const [servers, setServers] = useState("10");
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("8760");
  const [kwh, setKwh] = useState("");
  const [pue, setPue] = useState(String(DEFAULT_PUE));
  const [re, setRe] = useState("");

  const country = region === "own" ? ownCountry : (CLOUD_REGIONS.find((r) => r.id === region)?.country ?? ownCountry);
  const s = parseNum(servers);
  const w = parseNum(watts);
  const h = parseNum(hours);
  const itKwh = mode === "kwh" ? parseNum(kwh) : s !== null && w !== null && h !== null ? serversToKwh(s, w, h) : null;
  const pueN = parseNum(pue);
  const res = itKwh !== null && pueN !== null ? calcCloud({ country, itKwh, pue: pueN, renewableShare: (parseNum(re) ?? 0) / 100 }) : null;
  const m = res ? fmtMass(res.locationKg) : null;

  return (
    <CalcLayout
      inputs={
        <InputCard>
          <SelectField label="Where the workload runs" value={region} onChange={setRegion} options={REGION_OPTIONS} />
          {region === "own" ? <CountrySelect value={ownCountry} onChange={setOwnCountry} /> : null}
          <Segmented
            label="I know"
            value={mode}
            onChange={setMode}
            options={[
              { value: "servers", label: "Servers and power draw" },
              { value: "kwh", label: "Energy used (kWh)" },
            ]}
          />
          {mode === "servers" ? (
            <div className="grid gap-4 sm:grid-cols-3">
              <NumberField label="Servers / instances" value={servers} onChange={setServers} />
              <NumberField
                label="Average power each"
                unit="W"
                value={watts}
                onChange={setWatts}
                help="Measured or from the vendor's power calculator."
              />
              <NumberField label="Hours running" unit="h" value={hours} onChange={setHours} help="8,760 = one year, always on." />
            </div>
          ) : (
            <NumberField label="IT energy" unit="kWh" value={kwh} onChange={setKwh} help="From your provider's dashboard or your server room's meter." />
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              label="PUE (power usage effectiveness)"
              value={pue}
              onChange={setPue}
              min={1}
              help="Default 1.56 is the industry average. Hyperscale clouds publish lower figures. Use your provider's."
            />
            <NumberField
              label="Renewable share reported (optional)"
              unit="%"
              value={re}
              onChange={setRe}
              placeholder="0"
              help="Use the share your provider reports for this region."
            />
          </div>
        </InputCard>
      }
      result={
        <ResultPanel
          label="Electricity emissions, location-based"
          value={m?.value}
          unit={m?.unit}
          sub={
            res ? (
              <>
                {fmt(res.facilityKwh)} kWh at the facility
                {res.marketKg !== res.locationKg ? (
                  <>
                    <br />
                    Market-based (approx.): {fmtMass(res.marketKg).value} {fmtMass(res.marketKg).unit}
                  </>
                ) : null}
              </>
            ) : null
          }
          empty={res ? null : "Enter power draw or energy use to see emissions."}
          steps={res?.steps ?? []}
          sourceIds={res?.sourceIds ?? ["ember", "uptime"]}
          caveats={res?.caveats ?? []}
          copyText={res && m ? resultText("Cloud / data-centre emissions", `${m.value} ${m.unit}`, res.steps, res.sourceIds) : undefined}
        />
      }
    />
  );
}
