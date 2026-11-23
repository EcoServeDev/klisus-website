/**
 * Scope 1 combustion factors, kgCO2e per unit (CO2 + CH4 + N2O, AR5 GWPs),
 * from the DESNZ 2025 flat file ("Fuels"). kWh values are on a Net CV basis.
 * Values are unrounded from the source; display rounding happens in the UI.
 */

export type FuelUnit = "litres" | "tonnes" | "kWh (Net CV)" | "cubic metres";

export type Fuel = {
  id: string;
  name: string;
  /** kgCO2e per unit, keyed by unit. Only units DESNZ publishes are present. */
  perUnit: Partial<Record<FuelUnit, number>>;
};

export const FUELS: Fuel[] = [
  {
    id: "diesel",
    name: "Diesel (100% mineral)",
    perUnit: { litres: 2.66155, tonnes: 3203.91143, "kWh (Net CV)": 0.26808 },
  },
  {
    id: "petrol",
    name: "Petrol (100% mineral)",
    perUnit: { litres: 2.33984, tonnes: 3154.08213, "kWh (Net CV)": 0.25431 },
  },
  {
    id: "gas-oil",
    name: "Gas oil (red diesel, generators)",
    perUnit: { litres: 2.75541, tonnes: 3226.57859, "kWh (Net CV)": 0.27288 },
  },
  {
    id: "fuel-oil",
    name: "Fuel oil (furnace oil)",
    perUnit: { litres: 3.17492, tonnes: 3228.89019, "kWh (Net CV)": 0.28523 },
  },
  {
    id: "kerosene",
    name: "Burning oil (kerosene)",
    perUnit: { litres: 2.54016, tonnes: 3165.04181, "kWh (Net CV)": 0.25975 },
  },
  {
    id: "lpg",
    name: "LPG",
    perUnit: { litres: 1.55713, tonnes: 2939.36095, "kWh (Net CV)": 0.23032 },
  },
  {
    id: "natural-gas",
    name: "Natural gas / PNG",
    perUnit: { "cubic metres": 2.06672, tonnes: 2575.46441, "kWh (Net CV)": 0.2027 },
  },
  {
    id: "cng",
    name: "CNG",
    perUnit: { litres: 0.4507, tonnes: 2575.46441, "kWh (Net CV)": 0.2027 },
  },
  {
    id: "coal-industrial",
    name: "Coal (industrial)",
    perUnit: { tonnes: 2395.28994, "kWh (Net CV)": 0.33944 },
  },
  {
    id: "jet",
    name: "Aviation turbine fuel",
    perUnit: { litres: 2.54269, tonnes: 3178.3652, "kWh (Net CV)": 0.26061 },
  },
];
