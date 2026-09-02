/**
 * Evidence-plate manifest + plate geometry helpers.
 *
 * Every image the site shows is a "plate": a real, dated, framed Sentinel-2
 * export with its acquisition metadata. The files live in /public/plates and
 * are produced by the GEE export script (see repo history); bounds here are
 * the exact export rectangles, so graticule labels and scale bars are
 * computed, never guessed.
 *
 * Pure TypeScript — no React. Consumed by <EvidencePlate>, <ChangeTimeline>,
 * <CompareSlider>.
 */

export type Composite =
  | "TRUE COLOR"
  | "NEAR-INFRARED (NIR-R-G)"
  | "NDVI (EARTH RAMP)"
  | "NDVI CHANGE";

export interface PlateDef {
  id: string;
  src: string;
  /** export pixel size */
  width: number;
  height: number;
  /** [W, S, E, N] in degrees */
  bounds: [number, number, number, number];
  groundWidthKm: number;
  place: string;
  coords: string;
  composite: Composite;
  dates: string;
  /** for the Copernicus attribution line, e.g. "2025" or "2020–2025" */
  copernicusYears: string;
  /** plain-language finding line (Archivo voice) */
  finding?: string;
  /** honesty caveat rendered with the caption, verbatim from the copy bank */
  caveat?: string;
}

const APUI_FINDING = "Recent clearing east of the Transamazônica, Apuí frontier.";
const NDVI_CAVEAT =
  "NDVI measures vegetation greenness. It cannot measure carbon, biomass, or tonnes.";

const APUI_BOUNDS: [number, number, number, number] = [-59.6608, -7.3505, -59.5792, -7.2895];
const APUI_PLACE = "APUÍ, AMAZONAS, BRAZIL";
const APUI_COORDS = "7.3200° S, 59.6200° W";

function apuiFrame(year: number): PlateDef {
  return {
    id: `apui-${year}`,
    src: `/plates/apui-tc-${year}.jpg`,
    width: 1800,
    height: 1350,
    bounds: APUI_BOUNDS,
    groundWidthKm: 9.0,
    place: APUI_PLACE,
    coords: APUI_COORDS,
    composite: "TRUE COLOR",
    dates: `MEDIAN JUN–SEP ${year}`,
    copernicusYears: String(year),
    finding: APUI_FINDING,
  };
}

function apuiNir(year: number): PlateDef {
  return {
    id: `apui-nir-${year}`,
    src: `/plates/apui-nir-${year}.jpg`,
    width: 1800,
    height: 1350,
    bounds: APUI_BOUNDS,
    groundWidthKm: 9.0,
    place: APUI_PLACE,
    coords: APUI_COORDS,
    composite: "NEAR-INFRARED (NIR-R-G)",
    dates: `MEDIAN JUN–SEP ${year}`,
    copernicusYears: String(year),
    finding:
      "The same frames in near-infrared — healthy vegetation reflects NIR and renders red; cleared ground does not.",
  };
}

export const PLATES: Record<string, PlateDef> = {
  "apui-hero": {
    id: "apui-hero",
    src: "/plates/apui-hero-2025.jpg",
    width: 2400,
    height: 923,
    bounds: [-59.7287, -7.3617, -59.5113, -7.2783],
    groundWidthKm: 24.0,
    place: APUI_PLACE,
    coords: APUI_COORDS,
    composite: "TRUE COLOR",
    dates: "MEDIAN JUN–SEP 2025",
    copernicusYears: "2025",
    finding: APUI_FINDING,
  },
  "apui-2020": apuiFrame(2020),
  "apui-2021": apuiFrame(2021),
  "apui-2022": apuiFrame(2022),
  "apui-2023": apuiFrame(2023),
  "apui-2024": apuiFrame(2024),
  "apui-2025": apuiFrame(2025),
  "apui-nir-2020": apuiNir(2020),
  "apui-nir-2025": apuiNir(2025),
  "apui-ndvi-delta": {
    id: "apui-ndvi-delta",
    src: "/plates/apui-ndvi-delta.jpg",
    width: 1800,
    height: 1350,
    bounds: APUI_BOUNDS,
    groundWidthKm: 9.0,
    place: APUI_PLACE,
    coords: APUI_COORDS,
    composite: "NDVI CHANGE",
    dates: "JUN–SEP 2020 → JUN–SEP 2025",
    copernicusYears: "2020–2025",
    finding: "Vegetation-index change, 2020 → 2025. Ink appears only where greenness changed.",
    caveat: NDVI_CAVEAT,
  },
  "nyeri-tc": {
    id: "nyeri-tc",
    src: "/plates/nyeri-tc-2025.jpg",
    width: 1600,
    height: 1200,
    bounds: [36.9151, -0.4544, 36.969, -0.4137],
    groundWidthKm: 6.0,
    place: "NYERI, KENYA",
    coords: "0.4341° S, 36.9421° E",
    composite: "TRUE COLOR",
    dates: "MEDIAN 2025",
    copernicusYears: "2025",
    finding:
      "Shade-grown coffee east of the Aberdare Range — canopy that 2020 baseline maps can misread as forest.",
  },
  "jharkhand-ndvi-delta": {
    id: "jharkhand-ndvi-delta",
    src: "/plates/jharkhand-ndvi-delta.jpg",
    width: 1600,
    height: 1200,
    bounds: [84.9936, 23.4288, 85.072, 23.483],
    groundWidthKm: 8.0,
    place: "JHARKHAND, INDIA",
    coords: "23.4559° N, 85.0328° E",
    composite: "NDVI CHANGE",
    dates: "OCT–DEC 2020 → OCT–DEC 2025",
    copernicusYears: "2020–2025",
    finding: "Vegetation-index gain across the assessed period.",
    caveat: NDVI_CAVEAT,
  },
};

/* ---------------------------------------------------------------------------
   Geometry helpers
--------------------------------------------------------------------------- */

function dmLabel(deg: number, positive: string, negative: string): string {
  const hemi = deg < 0 ? negative : positive;
  const abs = Math.abs(deg);
  let d = Math.floor(abs);
  let m = Math.round((abs - d) * 60);
  if (m === 60) {
    d += 1;
    m = 0;
  }
  return `${d}°${String(m).padStart(2, "0")}'${hemi}`;
}

/** e.g. -59.6208 → "59°37'W" */
export function lonLabel(deg: number): string {
  return dmLabel(deg, "E", "W");
}

/** e.g. -7.32 → "7°19'S" */
export function latLabel(deg: number): string {
  return dmLabel(deg, "N", "S");
}

export interface GraticuleTick {
  /** formatted degree–minute label */
  label: string;
  /** position along the axis, % of frame (left→right / top→bottom) */
  pos: number;
}

/**
 * Tick set for a plate frame: two longitude ticks at 25% / 75% of the width
 * (labelled along the top edge) and one latitude tick at 50% of the height
 * (labelled on the left edge).
 */
export function graticule(bounds: [number, number, number, number]): {
  lons: [GraticuleTick, GraticuleTick];
  lat: GraticuleTick;
} {
  const [w, s, e, n] = bounds;
  const lonAt = (f: number) => w + f * (e - w);
  return {
    lons: [
      { label: lonLabel(lonAt(0.25)), pos: 25 },
      { label: lonLabel(lonAt(0.75)), pos: 75 },
    ],
    lat: { label: latLabel((s + n) / 2), pos: 50 },
  };
}

/**
 * Nice scale-bar value ≈25% of the frame's ground width.
 * Returns the bar length in km and as a fraction of the frame width.
 */
export function scaleBar(groundWidthKm: number): { km: 1 | 2 | 5; frac: number } {
  const target = groundWidthKm * 0.25;
  const candidates: (1 | 2 | 5)[] = [1, 2, 5];
  let km: 1 | 2 | 5 = 1;
  let best = Infinity;
  for (const c of candidates) {
    const d = Math.abs(c - target);
    if (d < best || (d === best && c > km)) {
      best = d;
      km = c;
    }
  }
  return { km, frac: km / groundWidthKm };
}
