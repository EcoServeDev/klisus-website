import type { Factor } from "@/lib/tools/types";

/**
 * Location-based grid emission factors (kgCO2e per kWh generated), from Ember's
 * yearly electricity dataset: "Emissions intensity (gCO2e/kWh)" for
 * "Total generation", latest year available per country, ÷ 1000.
 * Generated from the Ember CSV — do not hand-edit values; regenerate instead.
 * Lifecycle basis, generation-side (excludes transmission & distribution losses).
 */

export type GridCountry = { code: string; name: string; factor: Factor };

export const GRID: GridCountry[] = [
  { code: "ARG", name: "Argentina", factor: { value: 0.3449, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "AUS", name: "Australia", factor: { value: 0.518, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "AUT", name: "Austria", factor: { value: 0.1166, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "BHR", name: "Bahrain", factor: { value: 0.9025, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "BGD", name: "Bangladesh", factor: { value: 0.6903, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "BEL", name: "Belgium", factor: { value: 0.1513, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "BRA", name: "Brazil", factor: { value: 0.1092, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "CMR", name: "Cameroon", factor: { value: 0.2199, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "CAN", name: "Canada", factor: { value: 0.1916, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "CHL", name: "Chile", factor: { value: 0.2906, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "CHN", name: "China", factor: { value: 0.5283, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "COL", name: "Colombia", factor: { value: 0.1848, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "CIV", name: "Côte d'Ivoire", factor: { value: 0.3984, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "DNK", name: "Denmark", factor: { value: 0.1196, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "EGY", name: "Egypt", factor: { value: 0.5589, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "ETH", name: "Ethiopia", factor: { value: 0.0235, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "FIN", name: "Finland", factor: { value: 0.0588, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "FRA", name: "France", factor: { value: 0.0412, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "DEU", name: "Germany", factor: { value: 0.3341, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "GHA", name: "Ghana", factor: { value: 0.4611, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "HKG", name: "Hong Kong", factor: { value: 0.6729, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "IND", name: "India", factor: { value: 0.6657, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "IDN", name: "Indonesia", factor: { value: 0.7053, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "IRL", name: "Ireland", factor: { value: 0.2614, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "ISR", name: "Israel", factor: { value: 0.4929, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "ITA", name: "Italy", factor: { value: 0.2849, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "JPN", name: "Japan", factor: { value: 0.4737, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "KEN", name: "Kenya", factor: { value: 0.0919, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "KWT", name: "Kuwait", factor: { value: 0.6345, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "MYS", name: "Malaysia", factor: { value: 0.6013, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "MEX", name: "Mexico", factor: { value: 0.4814, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "MAR", name: "Morocco", factor: { value: 0.577, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "NLD", name: "Netherlands", factor: { value: 0.2536, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "NZL", name: "New Zealand", factor: { value: 0.0962, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "NGA", name: "Nigeria", factor: { value: 0.4247, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "NOR", name: "Norway", factor: { value: 0.0281, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "OMN", name: "Oman", factor: { value: 0.5061, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "PAK", name: "Pakistan", factor: { value: 0.3087, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "PER", name: "Peru", factor: { value: 0.2354, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "PHL", name: "Philippines", factor: { value: 0.5691, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "POL", name: "Poland", factor: { value: 0.5908, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "PRT", name: "Portugal", factor: { value: 0.1278, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "QAT", name: "Qatar", factor: { value: 0.5817, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "RWA", name: "Rwanda", factor: { value: 0.3619, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "SAU", name: "Saudi Arabia", factor: { value: 0.6756, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "SGP", name: "Singapore", factor: { value: 0.497, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "ZAF", name: "South Africa", factor: { value: 0.6989, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "KOR", name: "South Korea", factor: { value: 0.4177, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "ESP", name: "Spain", factor: { value: 0.1541, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "LKA", name: "Sri Lanka", factor: { value: 0.3522, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "SWE", name: "Sweden", factor: { value: 0.0356, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "CHE", name: "Switzerland", factor: { value: 0.039, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "TWN", name: "Taiwan", factor: { value: 0.6336, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "TZA", name: "Tanzania", factor: { value: 0.3264, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "THA", name: "Thailand", factor: { value: 0.5259, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "TUR", name: "Türkiye", factor: { value: 0.4758, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "UGA", name: "Uganda", factor: { value: 0.0582, unit: "kgCO2e/kWh", sourceId: "ember", year: "2024" } },
  { code: "ARE", name: "United Arab Emirates", factor: { value: 0.4697, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "GBR", name: "United Kingdom", factor: { value: 0.218, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "USA", name: "United States", factor: { value: 0.3844, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "VNM", name: "Vietnam", factor: { value: 0.4589, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "EU27", name: "European Union (EU-27 average)", factor: { value: 0.2109, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
  { code: "WLD", name: "World average", factor: { value: 0.4589, unit: "kgCO2e/kWh", sourceId: "ember", year: "2025" } },
];

export const DEFAULT_COUNTRY = "ARE";

export function gridFor(code: string): GridCountry | undefined {
  return GRID.find((g) => g.code === code);
}
