"use client";

import { useEffect, useState } from "react";
import { SelectField } from "@/components/tools/fields";
import { DEFAULT_COUNTRY, GRID } from "@/lib/tools/factors/grid";
import { fmtFactor } from "@/lib/tools/format";

const KEY = "klisus.tools.country";

const OPTIONS = GRID.map((g) => ({
  value: g.code,
  label: `${g.name} · ${fmtFactor(g.factor.value)} kg/kWh`,
  group: g.code === "EU27" || g.code === "WLD" ? "Averages" : "Countries",
}));

/** Country chosen on any tool is remembered for the others (per browser). */
export function useCountry(): [string, (c: string) => void] {
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      // Hydrate from storage after mount (keeps SSR markup deterministic).
      if (saved && GRID.some((g) => g.code === saved)) setCountry(saved);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);
  const set = (c: string) => {
    setCountry(c);
    try {
      window.localStorage.setItem(KEY, c);
    } catch {
      /* ignore */
    }
  };
  return [country, set];
}

export default function CountrySelect({
  value,
  onChange,
  label = "Country of the grid",
  help,
}: {
  value: string;
  onChange: (c: string) => void;
  label?: string;
  help?: React.ReactNode;
}) {
  return <SelectField label={label} value={value} onChange={onChange} options={OPTIONS} help={help} />;
}
