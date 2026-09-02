import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus — Climate Intelligence & Economics";

export default function Image() {
  return ogCard({
    title: "Evidence for decisions in a changing climate.",
    subtitle:
      "Earth observation, geospatial intelligence, and environmental analysis for better-informed decisions.",
  });
}
