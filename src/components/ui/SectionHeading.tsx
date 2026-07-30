import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary", className)}>
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-4 text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink")}>
        {title}
      </h2>
      {description && <p className="mt-4 text-balance text-[15px] leading-relaxed text-slate">{description}</p>}
    </div>
  );
}
