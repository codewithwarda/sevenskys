import Link from "next/link";
import { ArrowUpRight, Bus, TowerControl } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BlueprintGrid } from "@/components/graphics/BlueprintGrid";
import { divisionMeta, servicesByDivision } from "@/lib/data/services";

const panels = [
  { key: "passenger" as const, icon: Bus, index: "01" },
  { key: "towing" as const, icon: TowerControl, index: "02" },
];

export function Divisions() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-24 lg:py-32">
      <BlueprintGrid className="opacity-30" />
      <Container className="relative">
        <Eyebrow>What We Run</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-white">
          Two divisions. One accountable operator.
        </h2>
      </Container>

      <Container className="relative mt-14 grid gap-8 lg:grid-cols-2">
        {panels.map(({ key, icon: Icon, index }, i) => {
          const meta = divisionMeta[key];
          const items = servicesByDivision(key);
          return (
            <Reveal key={key} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-signature hover:-translate-y-1.5 lg:p-10">
                <span className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[8rem] font-bold leading-none text-ink/[0.04]">
                  {index}
                </span>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-xs text-silver">Division {index}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{meta.label}</h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-slate">{meta.description}</p>

                  <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                    {items.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-[13px] text-ink/70 underline-offset-fine transition-colors hover:text-primary hover:underline"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services#${key}`}
                  className="group/link relative mt-10 flex w-fit items-center gap-2 border-t border-ink/10 pt-4 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-primary"
                >
                  View all {meta.label.toLowerCase()}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-signature group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </section>
  );
}
