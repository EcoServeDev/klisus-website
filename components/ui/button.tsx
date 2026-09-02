/**
 * The dossier button: squared corners, plain verbs, quiet until hovered.
 * Light-context styling by default; `onDark` swaps secondary/ghost for the
 * dark plate bands (heroes, footer). Renders a Next <Link> when `href` is
 * given, a <button> otherwise.
 */

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-[2px] " +
  "transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const SIZES: Record<Size, string> = {
  md: "text-[15px]",
  lg: "h-12 px-6 text-[16px]",
};

const LIGHT: Record<Variant, string> = {
  primary:
    "bg-ndvi-green px-4 py-2.5 font-medium text-forest-black " +
    "hover:bg-ndvi-green/85 active:bg-ndvi-green/75",
  secondary:
    "border border-ink/30 bg-transparent px-4 py-2.5 text-ink " +
    "hover:border-green-ink hover:text-green-ink",
  ghost:
    "px-2 py-1 font-mono text-[13px] text-ink underline underline-offset-4 " +
    "decoration-paper-line hover:decoration-green-ink",
};

const DARK: Record<Variant, string> = {
  primary: LIGHT.primary,
  secondary:
    "border border-cream/25 bg-transparent px-4 py-2.5 text-cream " +
    "hover:border-ndvi-green hover:text-ndvi-green",
  ghost:
    "px-2 py-1 font-mono text-[13px] text-cream underline underline-offset-4 " +
    "decoration-line hover:decoration-ndvi-green",
};

type Common = { variant?: Variant; size?: Size; onDark?: boolean };
type ButtonAsButton = { href?: undefined } & Common & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = { href: string } & Common & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { href, variant = "primary", size = "md", onDark = false, className = "", ...rest } = props;
    const styles = onDark ? DARK : LIGHT;
    return (
      <Link
        href={href as never}
        className={`${BASE} ${SIZES[size]} ${styles[variant]} ${className}`}
        {...rest}
      />
    );
  }
  const { variant = "primary", size = "md", onDark = false, className = "", type = "button", ...rest } = props;
  const styles = onDark ? DARK : LIGHT;
  return (
    <button
      type={type}
      className={`${BASE} ${SIZES[size]} ${styles[variant]} ${className}`}
      {...rest}
    />
  );
}
