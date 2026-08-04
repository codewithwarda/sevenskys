import { cn } from "@/lib/utils";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "outline" | "ghost" | "inverted";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold uppercase tracking-[0.08em] text-[13px] transition-colors duration-300 ease-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "btn-sweep bg-primary text-white px-7 py-4",
  outline: "border-2 border-ink text-ink px-7 py-4 hover:border-primary hover:text-primary",
  ghost: "text-ink px-1 py-2 hover:text-primary",
  /** Solid white button with primary-coloured text, for use on primary/dark-coloured sections. */
  inverted: "btn-sweep bg-white text-primary px-7 py-4",
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  showArrow = true,
  onClick,
  type = "button",
  sweepColor,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Overrides the sweep-fill colour on hover for solid buttons placed on non-default backgrounds. */
  sweepColor?: string;
}) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);
  const style = sweepColor ? ({ "--btn-sweep-color": sweepColor } as CSSProperties) : undefined;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {content}
    </button>
  );
}
