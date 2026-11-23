/** Single list of free tools — drives the /tools index, sitemap and metadata. */

export type ToolCategory = "Measure" | "Export to the EU" | "Plan and finance" | "Reference";

export type ToolMeta = {
  slug: string;
  title: string;
  /** One line for cards and meta descriptions. */
  blurb: string;
  category: ToolCategory;
  method: string;
};

export const TOOLS: ToolMeta[] = [
  {
    slug: "electricity-to-co2",
    title: "Electricity to CO2",
    blurb: "Turn the kWh on a power bill into location-based Scope 2 emissions for 60+ countries.",
    category: "Measure",
    method: "Ember grid factors",
  },
  {
    slug: "fuel-to-co2",
    title: "Fuel to CO2",
    blurb: "Diesel, petrol, LPG, natural gas, fuel oil and coal into Scope 1 emissions, with the arithmetic shown.",
    category: "Measure",
    method: "DESNZ 2025",
  },
  {
    slug: "freight-emissions",
    title: "Freight emissions",
    blurb: "Add road, rail, sea and air legs to estimate the emissions of a shipment.",
    category: "Measure",
    method: "GLEC / ISO 14083 structure",
  },
  {
    slug: "product-footprint",
    title: "Product footprint",
    blurb: "A cradle-to-gate screening estimate per product unit from materials, process power and transport.",
    category: "Measure",
    method: "ISO 14067 structure",
  },
  {
    slug: "cloud-emissions",
    title: "Cloud and data-centre emissions",
    blurb: "Estimate electricity emissions of servers or cloud workloads by provider region.",
    category: "Measure",
    method: "Grid factor × PUE",
  },
  {
    slug: "cbam-code-checker",
    title: "CBAM code checker",
    blurb: "Paste a CN or HS code and see whether the goods fall under the EU's carbon border adjustment.",
    category: "Export to the EU",
    method: "Regulation (EU) 2023/956 Annex I",
  },
  {
    slug: "cbam-cost",
    title: "CBAM cost calculator",
    blurb: "Year-by-year CBAM certificate cost for your goods from 2026 to 2034 as free allocation phases out.",
    category: "Export to the EU",
    method: "CBAM + EU ETS phase-out",
  },
  {
    slug: "carbon-pricing-impact",
    title: "Carbon price exposure",
    blurb: "Low, base and high carbon-price scenarios for your emissions to 2034, for planning and disclosure.",
    category: "Plan and finance",
    method: "Scenario analysis",
  },
  {
    slug: "solar-savings",
    title: "Solar savings",
    blurb: "Payback, NPV, IRR and CO2 avoided for a rooftop or ground-mount solar system.",
    category: "Plan and finance",
    method: "Discounted cash flow",
  },
  {
    slug: "emission-factors",
    title: "Emission factor library",
    blurb: "Every factor these tools use: searchable, sourced and downloadable as CSV.",
    category: "Reference",
    method: "Ember · DESNZ · EU",
  },
];

export const CATEGORIES: ToolCategory[] = ["Measure", "Export to the EU", "Plan and finance", "Reference"];

export function toolBySlug(slug: string): ToolMeta {
  const t = TOOLS.find((x) => x.slug === slug);
  if (!t) throw new Error(`Unknown tool: ${slug}`);
  return t;
}
