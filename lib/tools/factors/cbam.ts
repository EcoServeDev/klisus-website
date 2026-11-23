/**
 * CBAM reference data.
 *
 * Scope: CN codes of Annex I to Regulation (EU) 2023/956. Entries are code
 * prefixes (spaces removed). `except` lists deeper prefixes that are NOT in
 * scope. A code shorter than the listed prefix (or one that has exceptions
 * beneath it) cannot be decided and returns "check further".
 *
 * Phase-out: share of EU ETS free allocation still granted to CBAM sectors
 * (Directive 2003/87/EC Art. 10a(1a)). CBAM certificates are reduced by the
 * same share, so exposure grows as this falls.
 */

export type CbamSector =
  | "Cement"
  | "Electricity"
  | "Fertilisers"
  | "Iron and steel"
  | "Aluminium"
  | "Hydrogen";

export type CbamEntry = { prefix: string; sector: CbamSector; desc: string; except?: string[] };

export const CBAM_ANNEX_I: CbamEntry[] = [
  // Cement
  { prefix: "25070080", sector: "Cement", desc: "Other kaolinic clays" },
  { prefix: "25231000", sector: "Cement", desc: "Cement clinkers" },
  { prefix: "25232100", sector: "Cement", desc: "White Portland cement" },
  { prefix: "25232900", sector: "Cement", desc: "Other Portland cement" },
  { prefix: "25233000", sector: "Cement", desc: "Aluminous cement" },
  { prefix: "25239000", sector: "Cement", desc: "Other hydraulic cements" },
  // Electricity
  { prefix: "27160000", sector: "Electricity", desc: "Electrical energy" },
  // Fertilisers
  { prefix: "28080000", sector: "Fertilisers", desc: "Nitric acid; sulphonitric acids" },
  { prefix: "2814", sector: "Fertilisers", desc: "Ammonia, anhydrous or in aqueous solution" },
  { prefix: "28342100", sector: "Fertilisers", desc: "Nitrates of potassium" },
  { prefix: "3102", sector: "Fertilisers", desc: "Mineral or chemical fertilisers, nitrogenous" },
  {
    prefix: "3105",
    sector: "Fertilisers",
    desc: "Mineral or chemical fertilisers containing two or three of N, P, K",
    except: ["31056000"],
  },
  // Iron and steel
  { prefix: "26011200", sector: "Iron and steel", desc: "Agglomerated iron ores and concentrates" },
  {
    prefix: "72",
    sector: "Iron and steel",
    desc: "Iron and steel",
    except: [
      "72022",
      "72023000",
      "72025000",
      "72027000",
      "72028000",
      "72029100",
      "72029200",
      "72029300",
      "72029910",
      "72029930",
      "72029980",
      "7204",
    ],
  },
  { prefix: "7301", sector: "Iron and steel", desc: "Sheet piling of iron or steel" },
  { prefix: "7302", sector: "Iron and steel", desc: "Railway or tramway track construction material" },
  { prefix: "730300", sector: "Iron and steel", desc: "Tubes, pipes and hollow profiles, of cast iron" },
  { prefix: "7304", sector: "Iron and steel", desc: "Tubes, pipes and hollow profiles, seamless" },
  { prefix: "7305", sector: "Iron and steel", desc: "Other tubes and pipes, external diameter > 406.4 mm" },
  { prefix: "7306", sector: "Iron and steel", desc: "Other tubes, pipes and hollow profiles" },
  { prefix: "7307", sector: "Iron and steel", desc: "Tube or pipe fittings" },
  { prefix: "7308", sector: "Iron and steel", desc: "Structures and parts of structures" },
  { prefix: "730900", sector: "Iron and steel", desc: "Reservoirs, tanks, vats (> 300 l)" },
  { prefix: "7310", sector: "Iron and steel", desc: "Tanks, casks, drums, cans, boxes (≤ 300 l)" },
  { prefix: "731100", sector: "Iron and steel", desc: "Containers for compressed or liquefied gas" },
  { prefix: "7318", sector: "Iron and steel", desc: "Screws, bolts, nuts, rivets, washers and similar" },
  { prefix: "7326", sector: "Iron and steel", desc: "Other articles of iron or steel" },
  // Aluminium
  { prefix: "7601", sector: "Aluminium", desc: "Unwrought aluminium" },
  { prefix: "7603", sector: "Aluminium", desc: "Aluminium powders and flakes" },
  { prefix: "7604", sector: "Aluminium", desc: "Aluminium bars, rods and profiles" },
  { prefix: "7605", sector: "Aluminium", desc: "Aluminium wire" },
  { prefix: "7606", sector: "Aluminium", desc: "Aluminium plates, sheets and strip (> 0.2 mm)" },
  { prefix: "7607", sector: "Aluminium", desc: "Aluminium foil (≤ 0.2 mm)" },
  { prefix: "7608", sector: "Aluminium", desc: "Aluminium tubes and pipes" },
  { prefix: "76090000", sector: "Aluminium", desc: "Aluminium tube or pipe fittings" },
  { prefix: "7610", sector: "Aluminium", desc: "Aluminium structures and parts" },
  { prefix: "76110000", sector: "Aluminium", desc: "Aluminium reservoirs, tanks, vats (> 300 l)" },
  { prefix: "7612", sector: "Aluminium", desc: "Aluminium casks, drums, cans, boxes (≤ 300 l)" },
  { prefix: "76130000", sector: "Aluminium", desc: "Aluminium containers for compressed or liquefied gas" },
  { prefix: "7614", sector: "Aluminium", desc: "Stranded wire, cables, of aluminium (not insulated)" },
  { prefix: "7616", sector: "Aluminium", desc: "Other articles of aluminium" },
  // Hydrogen
  { prefix: "28041000", sector: "Hydrogen", desc: "Hydrogen" },
];

/** What an EU importer (authorised CBAM declarant) will typically ask a supplier for. */
export const CBAM_SUPPLIER_ASKS: Record<CbamSector, string[]> = {
  Cement: [
    "Specific direct and indirect embedded emissions (tCO2e per tonne) per installation",
    "Clinker content and clinker production route",
    "Electricity consumed and its emission factor",
    "Any carbon price effectively paid in the country of production",
  ],
  Electricity: [
    "Emission factor of the generating installation or grid",
    "Evidence for any power purchase agreement used",
  ],
  Fertilisers: [
    "Specific direct and indirect embedded emissions per tonne, per product",
    "Nitrogen content and N2O emissions from nitric acid production",
    "Precursor emissions (e.g. ammonia, nitric acid) where purchased",
    "Any carbon price effectively paid in the country of production",
  ],
  "Iron and steel": [
    "Specific direct embedded emissions (tCO2e per tonne) per installation and production route (BF-BOF, DRI-EAF, scrap-EAF)",
    "Precursor emissions (pig iron, DRI, crude steel) where purchased",
    "Carbon content and alloy content of the product",
    "Any carbon price effectively paid in the country of production",
  ],
  Aluminium: [
    "Specific direct embedded emissions per tonne, including PFC emissions from smelting",
    "Share of primary vs. recycled (scrap) input",
    "Electricity consumed in smelting (reported for information)",
    "Any carbon price effectively paid in the country of production",
  ],
  Hydrogen: [
    "Specific direct and indirect embedded emissions per tonne of hydrogen",
    "Production route (SMR, electrolysis, other) and electricity source",
  ],
};

/** Year → share of free allocation still granted (1 = 100%). */
export const FREE_ALLOCATION_REMAINING: Record<number, number> = {
  2026: 0.975,
  2027: 0.95,
  2028: 0.9,
  2029: 0.775,
  2030: 0.515,
  2031: 0.39,
  2032: 0.265,
  2033: 0.14,
  2034: 0,
};

export const CBAM_YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034];

/**
 * EU ETS product benchmarks 2021–2025 (tCO2e per tonne of product), used as a
 * PROXY for the CBAM benchmark when the user has not entered the value for
 * their CN code. The CBAM benchmarks for the definitive period differ.
 */
export type BenchmarkPreset = { id: string; sector?: CbamSector; name: string; value: number | null };

export const BENCHMARK_PRESETS: BenchmarkPreset[] = [
  { id: "hot-metal", sector: "Iron and steel", name: "Steel via blast furnace (hot metal benchmark)", value: 1.288 },
  { id: "eaf-carbon", sector: "Iron and steel", name: "Steel via EAF, carbon steel", value: 0.215 },
  { id: "eaf-alloy", sector: "Iron and steel", name: "Steel via EAF, high-alloy steel", value: 0.268 },
  { id: "aluminium", sector: "Aluminium", name: "Primary aluminium", value: 1.464 },
  { id: "clinker-grey", sector: "Cement", name: "Grey cement clinker", value: 0.693 },
  { id: "clinker-white", sector: "Cement", name: "White cement clinker", value: 0.957 },
  { id: "ammonia", sector: "Fertilisers", name: "Ammonia", value: 1.57 },
  { id: "nitric-acid", sector: "Fertilisers", name: "Nitric acid", value: 0.23 },
  { id: "hydrogen", sector: "Hydrogen", name: "Hydrogen", value: 6.84 },
  { id: "electricity", sector: "Electricity", name: "Electricity (no free allocation)", value: 0 },
  { id: "custom", name: "Enter my CN code's CBAM benchmark", value: null },
];

/** Illustrative EUA price paths, € per tCO2e. Editable in the tools. */
export const PRICE_SCENARIOS = {
  low: { label: "Low", start: 65, growth: 0 },
  base: { label: "Base", start: 80, growth: 5 },
  high: { label: "High", start: 100, growth: 10 },
} as const;

export type ScenarioKey = keyof typeof PRICE_SCENARIOS;
