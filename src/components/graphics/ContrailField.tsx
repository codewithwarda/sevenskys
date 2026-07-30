"use client";

import { cn } from "@/lib/utils";

/**
 * Original "flight corridor" graphic: diagonal streaks that reference both
 * the SevenSkys name and the sense of continuous motion across the Emirates
 * road network. Rendered purely in brand-indigo tints, no foreign hues.
 */
export function ContrailField({ className }: { className?: string }) {
  const lines = [
    { y: 40, w: 620, o: 0.5, dur: "22s" },
    { y: 96, w: 900, o: 0.32, dur: "28s" },
    { y: 150, w: 460, o: 0.4, dur: "18s" },
    { y: 206, w: 760, o: 0.22, dur: "34s" },
    { y: 258, w: 340, o: 0.3, dur: "16s" },
  ];

  return (
    <svg
      viewBox="0 0 1200 300"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#30248A" stopOpacity="0" />
          <stop offset="45%" stopColor="#30248A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#30248A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <g
          key={i}
          style={{
            transformOrigin: "600px 150px",
            animation: `driftLine ${l.dur} ease-in-out infinite alternate`,
          }}
        >
          <rect
            x={-200}
            y={l.y}
            width={l.w}
            height={i % 2 === 0 ? 2.5 : 1.5}
            fill="url(#streak)"
            opacity={l.o}
            transform="skewY(-6)"
          />
        </g>
      ))}
      <style>{`
        @keyframes driftLine {
          from { transform: translateX(-40px); }
          to { transform: translateX(40px); }
        }
        @media (prefers-reduced-motion: reduce) {
          g { animation: none !important; }
        }
      `}</style>
    </svg>
  );
}
