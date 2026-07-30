import { cn } from "@/lib/utils";

const variants = [
  (
    <g key="a">
      <circle cx="60" cy="60" r="44" stroke="#30248A" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
      <path d="M20 100 L100 20" stroke="#30248A" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 7" />
      <circle cx="60" cy="60" r="6" fill="#30248A" />
    </g>
  ),
  (
    <g key="b">
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={-20} y1={20 + i * 26} x2={140} y2={20 + i * 26 - 18} stroke="#30248A" strokeOpacity={0.18 + i * 0.1} strokeWidth="2" />
      ))}
    </g>
  ),
  (
    <g key="c">
      <rect x="30" y="30" width="60" height="60" stroke="#5F5A59" strokeWidth="1.5" fill="none" transform="rotate(12 60 60)" />
      <circle cx="60" cy="60" r="26" stroke="#30248A" strokeWidth="1.5" fill="none" />
    </g>
  ),
  (
    <g key="d">
      <path d="M10 90 Q60 10 110 90" stroke="#30248A" strokeOpacity="0.45" strokeWidth="1.5" fill="none" strokeDasharray="2 8" />
      <circle cx="60" cy="52" r="4" fill="#30248A" />
    </g>
  ),
];

export function GalleryPlate({ index, className }: { index: number; className?: string }) {
  const variant = variants[index % variants.length];
  return (
    <svg viewBox="0 0 120 120" className={cn("h-full w-full", className)} preserveAspectRatio="xMidYMid meet" aria-hidden>
      {variant}
    </svg>
  );
}
