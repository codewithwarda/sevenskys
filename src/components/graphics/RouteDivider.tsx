import { cn } from "@/lib/utils";

/** A dashed route line with a way-point marker, used in place of generic section dividers. */
export function RouteDivider({
  className,
  label,
  tone = "primary",
}: {
  className?: string;
  label?: string;
  tone?: "primary" | "white";
}) {
  const dot = tone === "white" ? "bg-white" : "bg-primary";
  const dotFaint = tone === "white" ? "bg-white/30" : "bg-primary/30";
  const line = tone === "white" ? "text-white/30" : "text-primary/30";
  const labelColor = tone === "white" ? "text-white/70" : "text-slate";

  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden>
      <span className={cn("h-2 w-2 shrink-0 rounded-full", dot)} />
      <svg viewBox="0 0 400 8" className={cn("h-2 flex-1", line)} preserveAspectRatio="none">
        <line x1="0" y1="4" x2="400" y2="4" stroke="currentColor" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
      </svg>
      {label ? (
        <span className={cn("shrink-0 font-mono text-[11px] uppercase tracking-[0.25em]", labelColor)}>{label}</span>
      ) : (
        <span className={cn("h-2 w-2 shrink-0 rounded-full", dotFaint)} />
      )}
    </div>
  );
}
