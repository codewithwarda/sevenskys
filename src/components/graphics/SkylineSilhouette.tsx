import { cn } from "@/lib/utils";

/** Original low-poly silhouette referencing Dubai's skyline (Burj Khalifa centred), drawn from scratch as flat vector geometry. */
export function SkylineSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 260" className={cn("h-auto w-full", className)} preserveAspectRatio="none" aria-hidden>
      <path
        fill="currentColor"
        d="M0 260V190l40-4V150l24-6V120l18 4v66l30-10V130l22 8v56l26-6v-90l16 6v84l34-8V96l14-10 14 10v78l40 8v-58l20-10 20 10v50l24-4V60l16-16 16 16v100l30 6v-70l18-8 18 8v70l28-4V110l14-8 14 8v66l40 6v-40l16-8 16 8v42l26 4V96l10-8 10 8v90l36 6v-30l14-6 14 6v34l24 2V70l10-14 10 14v112l6 1v-1h1V260Z"
      />
      {/* Burj Khalifa centrepiece */}
      <path
        fill="currentColor"
        d="M598 260V64l4-10 3 6 3-6 4 10v14l3-3 3 6v20l3-2 2 5v146Z"
      />
    </svg>
  );
}
