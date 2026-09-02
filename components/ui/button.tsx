/**
 * Ported from the product (klisus/apps/web) so CTAs feel identical across
 * klisus.com and /plot-check. Marketing adds a `size` for hero CTAs.
 * Renders a Next <Link> when `href` is given, a <button> otherwise.
 */

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md " +
  "transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const SIZES: Record<Size, string> = {
  md: "text-[14px]",
  lg: "h-12 px-6 text-[16px]",
};

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-ndvi-green px-4 py-2.5 font-medium text-forest-black " +
    "hover:bg-ndvi-green/85 active:bg-ndvi-green/75",
  secondary:
    "border border-line bg-surface-2 px-4 py-2.5 text-cream " +
    "hover:border-ndvi-green active:bg-surface-1",
  ghost:
    "px-2 py-1 text-ndvi-green underline underline-offset-4 hover:text-cream",
};

type Common = { variant?: Variant; size?: Size };
type ButtonAsButton = { href?: undefined } & Common & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = { href: string } & Common & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { href, variant = "primary", size = "md", className = "", ...rest } = props;
    return (
      <Link
        href={href as never}
        className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
        {...rest}
      />
    );
  }
  const { variant = "primary", size = "md", className = "", type = "button", ...rest } = props;
  return (
    <button
      type={type}
      className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...rest}
    />
  );
}
