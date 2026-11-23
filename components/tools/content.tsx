import type { ComponentType, ReactNode } from "react";
import CarbonPricingCalculator from "@/components/tools/calculators/carbon-pricing";
import CbamCodeChecker from "@/components/tools/calculators/cbam-code";
import CbamCostCalculator from "@/components/tools/calculators/cbam-cost";
import CloudCalculator from "@/components/tools/calculators/cloud";
import ElectricityCalculator from "@/components/tools/calculators/electricity";
import FactorLibrary from "@/components/tools/calculators/factor-library";
import FreightCalculator from "@/components/tools/calculators/freight";
import FuelCalculator from "@/components/tools/calculators/fuel";
import ProductCalculator from "@/components/tools/calculators/product";
import SolarCalculator from "@/components/tools/calculators/solar";

type Content = { lede: ReactNode; Calculator: ComponentType; notes?: ReactNode };

/** Per-tool copy and calculator. Keyed by registry slug. */
export const TOOL_CONTENT: Record<string, Content> = {
  "electricity-to-co2": {
    lede: "Enter the units from your electricity bill and pick the country of the grid. You get annual Scope 2 emissions, the factor used and its source.",
    Calculator: ElectricityCalculator,
    notes: (
      <>
        <h2>Method</h2>
        <p>
          Emissions = electricity used (kWh) × grid emission factor (kgCO2e/kWh). This is the GHG Protocol&rsquo;s location-based method
          for Scope 2. Factors are Ember&rsquo;s emissions intensity of each country&rsquo;s total generation for the latest year
          available.
        </p>
        <h2>When to use a different factor</h2>
        <ul>
          <li>Your regulator publishes an official grid factor (e.g. a national CO2 baseline database). Use that for regulatory filings.</li>
          <li>You buy renewable power with certificates. Report a market-based figure alongside, using your supplier&rsquo;s factor.</li>
          <li>You are on a captive or regional grid that differs from the national average.</li>
        </ul>
      </>
    ),
  },
  "fuel-to-co2": {
    lede: "Add each fuel you burn: in generators, boilers, furnaces, kilns or vehicles. You get Scope 1 emissions with the conversion shown for every line.",
    Calculator: FuelCalculator,
    notes: (
      <>
        <h2>Method</h2>
        <p>
          Emissions = quantity × emission factor for that fuel and unit. Factors include CO2, methane and nitrous oxide on a 100-year GWP
          basis, from the UK government&rsquo;s 2025 conversion factors, one of the most widely used public datasets.
        </p>
        <h2>Tips</h2>
        <ul>
          <li>Use purchase records or meter readings for the reporting period, not estimates of hours run.</li>
          <li>For fuel billed by energy (kWh or therms), select the kWh unit. Factors use the net calorific value.</li>
        </ul>
      </>
    ),
  },
  "freight-emissions": {
    lede: "Build a shipment leg by leg: truck to port, sea crossing, rail inland. Emissions follow tonnes × distance × mode intensity.",
    Calculator: FreightCalculator,
    notes: (
      <>
        <h2>Method</h2>
        <p>
          Each leg: weight (t) × distance (km) × intensity (kgCO2e per tonne-km). This is the activity-based structure of the GLEC Framework and
          ISO 14083, using DESNZ 2025 default intensities by mode.
        </p>
        <p>For Scope 3 Category 4 (upstream transport) or 9 (downstream), sum the legs for every shipment in the year.</p>
      </>
    ),
  },
  "product-footprint": {
    lede: "List the materials in one unit of your product, the electricity your process uses and how materials arrive. You get a cradle-to-gate screening figure per unit.",
    Calculator: ProductCalculator,
    notes: (
      <>
        <h2>What this is and isn&rsquo;t</h2>
        <p>
          A screening estimate that follows the cradle-to-gate structure of ISO 14067: raw materials, your own energy use and inbound
          transport. It is useful for finding hotspots and answering early buyer questions. It is not a verified PCF or an Environmental
          Product Declaration.
        </p>
        <h2>Improve the estimate</h2>
        <ul>
          <li>Replace generic material factors with supplier data or EPDs using &ldquo;Custom material&rdquo;.</li>
          <li>Allocate factory electricity by product mass or machine hours rather than an even split.</li>
        </ul>
      </>
    ),
  },
  "cloud-emissions": {
    lede: "Estimate the electricity emissions of your servers or cloud workloads, by provider region or for your own server room.",
    Calculator: CloudCalculator,
    notes: (
      <>
        <h2>Method</h2>
        <p>
          IT energy × PUE gives the facility&rsquo;s total electricity. That is multiplied by the grid factor of the country the region
          sits in. PUE (power usage effectiveness) captures cooling and power losses. The default is the industry average reported by the
          Uptime Institute.
        </p>
      </>
    ),
  },
  "cbam-code-checker": {
    lede: "Paste the code from your shipping bill. See whether your goods fall under the EU Carbon Border Adjustment Mechanism, and what your EU buyer will ask you for if they do.",
    Calculator: CbamCodeChecker,
    notes: (
      <>
        <h2>What CBAM covers</h2>
        <p>
          CBAM&rsquo;s definitive period began on 1 January 2026. EU importers of cement, iron and steel, aluminium, fertilisers,
          hydrogen and electricity now owe CBAM certificates for the emissions embedded in those goods. Exporters are asked for verified installation data. Without it,
          importers fall back to EU default values, which are usually higher.
        </p>
      </>
    ),
  },
  "cbam-cost": {
    lede: "Estimate the CBAM cost on your goods each year from 2026 to 2034 as EU free allocation is phased out. Example values are filled in; replace them with yours.",
    Calculator: CbamCostCalculator,
    notes: (
      <>
        <h2>Method</h2>
        <p>
          Certificates due = embedded emissions − (benchmark × quantity × share of free allocation still granted that year). Cost =
          certificates × (EU allowance price − carbon price already paid at home). Free allocation falls from 97.5% in 2026 to zero in
          2034, so the cost ramps up over the decade.
        </p>
        <h2>Why your own data matters</h2>
        <p>
          The intensity you enter drives the result. Verified installation-specific data usually beats EU default values. Collecting it
          early is the most direct way to protect your price to EU customers.
        </p>
      </>
    ),
  },
  "carbon-pricing-impact": {
    lede: "Stress-test your business against low, base and high carbon-price paths to 2034, for planning, lender questions and climate-risk disclosure.",
    Calculator: CarbonPricingCalculator,
    notes: (
      <>
        <h2>Using this for disclosure</h2>
        <p>
          IFRS S2 and TCFD ask companies to describe transition risks under different scenarios. A carbon-price exposure table is a common
          starting point. State the price paths you used. They are assumptions, and the defaults here are illustrative.
        </p>
      </>
    ),
  },
  "solar-savings": {
    lede: "Check whether rooftop or ground-mount solar pays back at your site. You get payback, NPV, IRR and the emissions it avoids.",
    Calculator: SolarCalculator,
    notes: (
      <>
        <h2>Getting the inputs right</h2>
        <ul>
          <li>Specific yield is site-specific. Take it from the Global Solar Atlas for your exact location rather than a national average.</li>
          <li>Use your marginal tariff (the price of the last kWh you buy), including demand-related charges you avoid.</li>
          <li>Get at least two installer quotes for capex. Include inverters, mounting, cabling and grid connection.</li>
        </ul>
      </>
    ),
  },
  "emission-factors": {
    lede: "Every emission factor used across these tools, in one table, with the source and data year for each. Search, filter and download as CSV.",
    Calculator: FactorLibrary,
  },
};
