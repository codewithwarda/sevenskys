import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export interface LedgerItem {
  title: string;
  detail: string;
}

export function LedgerList({ items, className }: { items: LedgerItem[]; className?: string }) {
  return (
    <dl className={cn("grid sm:grid-cols-2", className)}>
      {items.map((r, i) => (
        <Reveal key={r.title} delay={Math.min(i * 0.04, 0.3)}>
          <div className="group relative border-t-2 border-ink/10 py-6 pr-6 transition-colors duration-300 hover:border-primary">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-silver transition-colors duration-300 group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-display text-[16px] font-semibold text-ink">{r.title}</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-slate">{r.detail}</dd>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
