/**
 * The Ahya-style pill: rounded-full with a trailing circular arrow chip.
 * API unchanged (variant / size / onDark). Renders a Next <Link> when `href`
 * is given, a <button> otherwise.
 */

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const BASE =
  "group inline-flex items-center rounded-full font-medium " +
  "transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const SIZES: Record<Size, string> = {
  md: "gap-2.5 py-1.5 pl-5 pr-1.5 text-[15px]",
  lg: "gap-3 py-2 pl-6 pr-2 text-[16px]",
};

const CHIP_SIZE: Record<Size, string> = {
  md: "h-8 w-8",
  lg: "h-9 w-9",
};

const LIGHT: Record<Variant, { pill: string; chip: string }> = {
  primary: {
    pill: "bg-forest-black text-cream hover:bg-surface-2",
    chip: "bg-ndvi-green text-forest-black",
  },
  secondary: {
    pill: "border border-ink/20 bg-transparent text-ink hover:border-ink/45",
    chip: "bg-ink/10 text-ink group-hover:bg-ink/15",
  },
  ghost: {
    pill: "pl-1 text-green-ink hover:text-ink",
    chip: "bg-green-wash text-green-ink",
  },
};

const DARK: Record<Variant, { pill: string; chip: string }> = {
  primary: {
    pill: "bg-cream text-forest-black hover:bg-paper",
    chip: "bg-ndvi-green text-forest-black",
  },
  secondary: {
    pill: "border border-cream/30 bg-cream/5 text-cream backdrop-blur-sm hover:border-cream/60",
    chip: "bg-cream/15 text-cream",
  },
  ghost: {
    pill: "pl-1 text-ndvi-green hover:text-cream",
    chip: "bg-cream/10 text-ndvi-green",
  },
};

function Chip({ size, className }: { size: Size; className: string }) {
  return (
    <span
      className={`grid ${CHIP_SIZE[size]} flex-none place-items-center rounded-full transition-colors ${className}`}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2.5 7h9m0 0L7.75 3.25M11.5 7l-3.75 3.75"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function content(children: ReactNode, size: Size, chip: string) {
  return (
    <>
      <span>{children}</span>
      <Chip size={size} className={chip} />
    </>
  );
}

type Common = { variant?: Variant; size?: Size; onDark?: boolean };
type ButtonAsButton = { href?: undefined } & Common & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = { href: string } & Common & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { href, variant = "primary", size = "md", onDark = false, className = "", children, ...rest } = props;
    const s = (onDark ? DARK : LIGHT)[variant];
    return (
      <Link href={href as never} className={`${BASE} ${SIZES[size]} ${s.pill} ${className}`} {...rest}>
        {content(children, size, s.chip)}
      </Link>
    );
  }
  const { variant = "primary", size = "md", onDark = false, className = "", type = "button", children, ...rest } = props;
  const s = (onDark ? DARK : LIGHT)[variant];
  return (
    <button type={type} className={`${BASE} ${SIZES[size]} ${s.pill} ${className}`} {...rest}>
      {content(children, size, s.chip)}
    </button>
  );
}
