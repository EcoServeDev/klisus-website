import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "EUDR Land Evidence — KliSus";

export default function Image() {
  return ogCard({
    title: "EUDR Land Evidence",
    subtitle: "Assess the land behind your supply chain.",
  });
}
