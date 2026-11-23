/**
 * Freight intensities, kgCO2e per tonne.km, from the DESNZ 2025 flat file
 * ("Freighting goods"). Tank-to-wheel basis as published by DESNZ; GLEC /
 * ISO 14083 reporting adds well-to-tank on top (see caveat in the tool).
 */

export type FreightMode = {
  id: string;
  group: "Road" | "Rail" | "Sea" | "Air";
  name: string;
  kgPerTkm: number;
};

export const FREIGHT_MODES: FreightMode[] = [
  { id: "van-diesel", group: "Road", name: "Van, diesel (up to 3.5 t)", kgPerTkm: 0.6313 },
  { id: "van-bev", group: "Road", name: "Van, battery electric (up to 3.5 t)", kgPerTkm: 0.21992 },
  { id: "hgv-rigid", group: "Road", name: "Truck, rigid, average laden", kgPerTkm: 0.19748 },
  { id: "hgv-artic", group: "Road", name: "Truck, articulated, average laden", kgPerTkm: 0.078 },
  { id: "hgv-all", group: "Road", name: "Truck, all HGVs, average laden", kgPerTkm: 0.10163 },
  { id: "hgv-reefer-rigid", group: "Road", name: "Truck, refrigerated rigid, average laden", kgPerTkm: 0.23514 },
  { id: "rail", group: "Rail", name: "Freight train", kgPerTkm: 0.02779 },
  { id: "sea-container", group: "Sea", name: "Container ship, average", kgPerTkm: 0.01612 },
  { id: "sea-container-large", group: "Sea", name: "Container ship, 8000+ TEU", kgPerTkm: 0.01266 },
  { id: "sea-bulk", group: "Sea", name: "Bulk carrier, average", kgPerTkm: 0.00353 },
  { id: "sea-general", group: "Sea", name: "General cargo, average", kgPerTkm: 0.01321 },
  { id: "sea-reefer", group: "Sea", name: "Refrigerated cargo ship", kgPerTkm: 0.01306 },
  { id: "sea-roro", group: "Sea", name: "RoRo ferry, average", kgPerTkm: 0.05158 },
  { id: "sea-products-tanker", group: "Sea", name: "Products tanker, average", kgPerTkm: 0.00902 },
  { id: "air-long", group: "Air", name: "Air freight, long-haul (without RF)", kgPerTkm: 0.5313 },
  { id: "air-long-rf", group: "Air", name: "Air freight, long-haul (with radiative forcing)", kgPerTkm: 0.89939 },
  { id: "air-short", group: "Air", name: "Air freight, short-haul (without RF)", kgPerTkm: 0.75539 },
];
