import { cn } from "@/lib/utils";

/**
 * Oversized watermark numeral referencing "Seven"Skys — a recurring brand
 * device used in place of decorative blobs or stock iconography.
 */
export function GhostNumeral({
  value = "07",
  className,
  tone = "ink",
}: {
  value?: string;
  className?: string;
  tone?: "ink" | "white" | "primary";
}) {
  const color = tone === "white" ? "text-white" : tone === "primary" ? "text-primary" : "text-ink";
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none select-none font-display font-bold leading-none opacity-[0.05]",
        color,
        className
      )}
      style={{ fontSize: "clamp(8rem, 24vw, 22rem)" }}
    >
      {value}
    </span>
  );
}
