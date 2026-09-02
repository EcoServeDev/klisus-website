/**
 * Enterprise button: rounded, confident. Filled green primary; quiet
 * bordered secondary; `onDark` variants for dark bands and imagery.
 * Renders a Next <Link> when `href` is given, a <button> otherwise.
 */

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold " +
  "transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-[15px]",
  lg: "h-13 px-7 py-3.5 text-[16px]",
};

const LIGHT: Record<Variant, string> = {
  primary: "bg-green-ink text-paper hover:bg-[#245538] active:bg-[#1d472f]",
  secondary:
    "border border-ink/15 bg-paper text-ink shadow-[0_1px_2px_rgba(13,21,18,0.05)] " +
    "hover:border-ink/30 hover:bg-paper-surface",
  ghost: "px-2 py-1 text-green-ink underline-offset-4 hover:underline",
};

const DARK: Record<Variant, string> = {
  primary: "bg-ndvi-green text-forest-black hover:bg-[#5fb37c] active:bg-[#449760]",
  secondary:
    "border border-cream/30 bg-cream/5 text-cream backdrop-blur-sm " +
    "hover:border-cream/60 hover:bg-cream/10",
  ghost: "px-2 py-1 text-ndvi-green underline-offset-4 hover:underline",
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
