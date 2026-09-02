import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus Partnerships";

export default function Image() {
  return ogCard({
    title: "Partnerships",
    subtitle: "Build better environmental intelligence together.",
  });
}
