import { cn } from "@/lib/utils";

/**
 * Vector recreation of the SevenSkys mark: a double-ring compass badge
 * housing the angular "7" glyph, crowned by three signal chevrons.
 * Rebuilt as clean geometry so it scales losslessly at any size and can
 * inherit currentColor for light/dark contexts.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 132"
      fill="none"
      className={cn("h-9 w-auto", className)}
      role="img"
      aria-label="SevenSkys badge mark"
    >
      <path d="M32 4 L44 20 L20 20 Z" fill="#30248A" />
      <path d="M88 4 L100 20 L76 20 Z" fill="#30248A" />
      <path d="M60 106 L72 122 L48 122 Z" fill="#30248A" />
      <circle cx="60" cy="63" r="45" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="63" r="38" fill="currentColor" />
      <path
        d="M40 34 H80 L60 63 H78 L54 100 L60 68 H40 Z"
        fill="#FBFBFA"
      />
    </svg>
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 48" className={cn("h-6 w-auto", className)} role="img" aria-label="SevenSkys">
      <text x="0" y="34" fontFamily="var(--font-display)" fontWeight={700} fontSize="34" letterSpacing="0.5" fill="currentColor">
        SEVEN<tspan fill="#30248A">SKYS</tspan>
      </text>
    </svg>
  );
}
