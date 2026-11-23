/**
 * Cloud regions → country of the hosting grid. The factor itself comes from
 * GRID (Ember). Sub-national grids (e.g. US states) can differ markedly from
 * the national average — noted as a caveat in the tool.
 */

export type CloudRegion = { id: string; provider: "AWS" | "Azure" | "Google Cloud"; name: string; country: string };

export const CLOUD_REGIONS: CloudRegion[] = [
  { id: "aws-me-central-1", provider: "AWS", name: "me-central-1 (UAE)", country: "ARE" },
  { id: "aws-me-south-1", provider: "AWS", name: "me-south-1 (Bahrain)", country: "BHR" },
  { id: "aws-ap-south-1", provider: "AWS", name: "ap-south-1 (Mumbai)", country: "IND" },
  { id: "aws-af-south-1", provider: "AWS", name: "af-south-1 (Cape Town)", country: "ZAF" },
  { id: "aws-eu-west-1", provider: "AWS", name: "eu-west-1 (Ireland)", country: "IRL" },
  { id: "aws-eu-west-2", provider: "AWS", name: "eu-west-2 (London)", country: "GBR" },
  { id: "aws-eu-central-1", provider: "AWS", name: "eu-central-1 (Frankfurt)", country: "DEU" },
  { id: "aws-eu-north-1", provider: "AWS", name: "eu-north-1 (Stockholm)", country: "SWE" },
  { id: "aws-us-east-1", provider: "AWS", name: "us-east-1 (N. Virginia)", country: "USA" },
  { id: "aws-us-west-2", provider: "AWS", name: "us-west-2 (Oregon)", country: "USA" },
  { id: "aws-ca-central-1", provider: "AWS", name: "ca-central-1 (Canada)", country: "CAN" },
  { id: "aws-sa-east-1", provider: "AWS", name: "sa-east-1 (São Paulo)", country: "BRA" },
  { id: "aws-ap-southeast-1", provider: "AWS", name: "ap-southeast-1 (Singapore)", country: "SGP" },
  { id: "aws-ap-southeast-2", provider: "AWS", name: "ap-southeast-2 (Sydney)", country: "AUS" },
  { id: "aws-ap-northeast-1", provider: "AWS", name: "ap-northeast-1 (Tokyo)", country: "JPN" },
  { id: "az-uaenorth", provider: "Azure", name: "UAE North (Dubai)", country: "ARE" },
  { id: "az-qatarcentral", provider: "Azure", name: "Qatar Central", country: "QAT" },
  { id: "az-centralindia", provider: "Azure", name: "Central India (Pune)", country: "IND" },
  { id: "az-southafricanorth", provider: "Azure", name: "South Africa North", country: "ZAF" },
  { id: "az-westeurope", provider: "Azure", name: "West Europe (Netherlands)", country: "NLD" },
  { id: "az-northeurope", provider: "Azure", name: "North Europe (Ireland)", country: "IRL" },
  { id: "az-uksouth", provider: "Azure", name: "UK South", country: "GBR" },
  { id: "az-eastus", provider: "Azure", name: "East US", country: "USA" },
  { id: "az-southeastasia", provider: "Azure", name: "Southeast Asia (Singapore)", country: "SGP" },
  { id: "gcp-me-central1", provider: "Google Cloud", name: "me-central1 (Doha)", country: "QAT" },
  { id: "gcp-me-central2", provider: "Google Cloud", name: "me-central2 (Dammam)", country: "SAU" },
  { id: "gcp-asia-south1", provider: "Google Cloud", name: "asia-south1 (Mumbai)", country: "IND" },
  { id: "gcp-africa-south1", provider: "Google Cloud", name: "africa-south1 (Johannesburg)", country: "ZAF" },
  { id: "gcp-europe-west1", provider: "Google Cloud", name: "europe-west1 (Belgium)", country: "BEL" },
  { id: "gcp-europe-north1", provider: "Google Cloud", name: "europe-north1 (Finland)", country: "FIN" },
  { id: "gcp-us-central1", provider: "Google Cloud", name: "us-central1 (Iowa)", country: "USA" },
  { id: "gcp-asia-southeast1", provider: "Google Cloud", name: "asia-southeast1 (Singapore)", country: "SGP" },
];

/** Industry-average annual PUE (Uptime Institute, 2024 survey). Editable in the tool. */
export const DEFAULT_PUE = 1.56;
