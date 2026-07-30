import { cn } from "@/lib/utils";

/** Faint engineering-grid backdrop, nods to the blueprint motif used across SevenSkys' printed materials. */
export function BlueprintGrid({ className, fine = false }: { className?: string; fine?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", fine ? "bp-grid-fine" : "bp-grid", className)}
      style={{
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }}
    />
  );
}
