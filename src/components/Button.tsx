import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SmartLink } from "./SmartLink";

type Variant = "primary" | "secondary" | "light" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-moss-600 text-white hover:bg-moss-700 focus-visible:outline-moss-600",
  secondary: "bg-forest-900 text-white hover:bg-forest-800 focus-visible:outline-forest-900",
  light: "bg-white text-forest-900 hover:bg-steel-100 focus-visible:outline-white",
  outline: "border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white focus-visible:outline-forest-900",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/5 focus-visible:outline-white",
  ghost: "text-forest-800 hover:text-moss-700 px-0! focus-visible:outline-moss-600",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

function classes(variant: Variant, size: Size, className = "") {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

function Arrow() {
  return (
    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  );
}

/** Link styled as a button. Accepts routes, "/#section" anchors and external URLs. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  onClick,
}: CommonProps & { href: string; onClick?: () => void }) {
  return (
    <SmartLink href={href} className={classes(variant, size, className)} onClick={onClick}>
      {children}
      {arrow && <Arrow />}
    </SmartLink>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
