import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus Intelligence";

export default function Image() {
  return ogCard({
    title: "KliSus Intelligence",
    subtitle: "Intelligence at the intersection of climate, land, nature, and economics.",
  });
}
