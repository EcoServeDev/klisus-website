import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "About KliSus — Climate Intelligence & Economics";

export default function Image() {
  return ogCard({
    title: "About KliSus",
    subtitle: "Climate Intelligence & Economics",
  });
}
