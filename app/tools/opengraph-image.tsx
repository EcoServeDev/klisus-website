import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus free climate tools";

export default function Image() {
  return ogCard({ title: "Free climate tools", subtitle: "Sourced carbon calculators · KliSus" });
}
