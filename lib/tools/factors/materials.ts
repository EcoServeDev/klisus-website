/**
 * Cradle-to-gate material factors, kgCO2e per tonne of material,
 * "Primary material production" from the DESNZ 2025 flat file ("Material use").
 * Note DESNZ's metal categories are product-specific (e.g. steel cans);
 * use a custom factor for raw steel/aluminium/cement where you have an EPD.
 */

export type Material = { id: string; group: string; name: string; kgPerTonne: number };

export const MATERIALS: Material[] = [
  { id: "plastic-avg", group: "Plastics", name: "Plastics, average", kgPerTonne: 3172.49932 },
  { id: "plastic-film", group: "Plastics", name: "Plastic film, average", kgPerTonne: 2916.50513 },
  { id: "plastic-rigid", group: "Plastics", name: "Rigid plastic, average", kgPerTonne: 3354.28062 },
  { id: "hdpe", group: "Plastics", name: "HDPE (incl. forming)", kgPerTonne: 3095.15524 },
  { id: "ldpe", group: "Plastics", name: "LDPE / LLDPE (incl. forming)", kgPerTonne: 2965.0779 },
  { id: "pet", group: "Plastics", name: "PET (incl. forming)", kgPerTonne: 3863.90131 },
  { id: "pp", group: "Plastics", name: "PP (incl. forming)", kgPerTonne: 2577.57172 },
  { id: "ps", group: "Plastics", name: "PS (incl. forming)", kgPerTonne: 4376.80391 },
  { id: "pvc", group: "Plastics", name: "PVC (incl. forming)", kgPerTonne: 2944.75615 },
  { id: "paper", group: "Paper", name: "Paper", kgPerTonne: 1345.0779 },
  { id: "board", group: "Paper", name: "Board (cardboard)", kgPerTonne: 1199.72542 },
  { id: "paper-mixed", group: "Paper", name: "Paper and board, mixed", kgPerTonne: 1288.50358 },
  { id: "glass", group: "Other", name: "Glass", kgPerTonne: 1402.76667 },
  { id: "textiles", group: "Other", name: "Clothing / textiles", kgPerTonne: 22310 },
  { id: "food", group: "Other", name: "Food and drink, average", kgPerTonne: 3701.40359 },
  { id: "aluminium-cans", group: "Metals", name: "Aluminium cans and foil (excl. forming)", kgPerTonne: 9115.90131 },
  { id: "steel-cans", group: "Metals", name: "Steel cans", kgPerTonne: 2863.90131 },
  { id: "metals-construction", group: "Metals", name: "Metals, construction average", kgPerTonne: 3824.09335 },
  { id: "concrete", group: "Construction", name: "Concrete", kgPerTonne: 118.79306 },
  { id: "bricks", group: "Construction", name: "Bricks", kgPerTonne: 241.79306 },
  { id: "aggregates", group: "Construction", name: "Aggregates", kgPerTonne: 7.79306 },
  { id: "asphalt", group: "Construction", name: "Asphalt", kgPerTonne: 39.21249 },
  { id: "insulation", group: "Construction", name: "Insulation", kgPerTonne: 1861.79306 },
  { id: "wood", group: "Construction", name: "Wood", kgPerTonne: 269.50416 },
  { id: "plasterboard", group: "Construction", name: "Plasterboard", kgPerTonne: 120.05 },
  { id: "tyres", group: "Other", name: "Tyres", kgPerTonne: 3335.5719 },
  { id: "li-ion", group: "Electrical", name: "Batteries, Li-ion", kgPerTonne: 6308 },
  { id: "electrical-small", group: "Electrical", name: "Electrical items, small", kgPerTonne: 5647.94563 },
  { id: "electrical-it", group: "Electrical", name: "Electrical items, IT", kgPerTonne: 24865.47556 },
];
