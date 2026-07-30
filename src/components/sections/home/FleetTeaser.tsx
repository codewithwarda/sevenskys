import Link from "next/link";
import { Bus, GraduationCap, Truck, LifeBuoy, Construction } from "lucide-react";
import { fleet, type FleetCategory } from "@/lib/data/fleet";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const categoryIcon: Record<FleetCategory, typeof Bus> = {
  "passenger-bus": Bus,
  "mini-bus": Bus,
  "school-bus": GraduationCap,
  pickup: Truck,
  recovery: LifeBuoy,
  "heavy-equipment": Construction,
};

export function FleetTeaser() {
  return (
    <section className="border-y border-ink/10 bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The Fleet</Eyebrow>
            <h2 className="mt-4 max-w-lg text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink">
              Nine vehicle classes, dispatched daily.
            </h2>
          </div>
          <Button href="/fleet" variant="ghost">See full fleet</Button>
        </div>
      </Container>

      <Container className="mt-14">
        <div className="flex gap-5 overflow-x-auto pb-6 [scrollbar-width:thin] snap-x snap-mandatory">
          {fleet.map((v, i) => {
            const Icon = categoryIcon[v.category];
            return (
              <Reveal
                key={v.slug}
                delay={Math.min(i * 0.05, 0.3)}
                y={16}
                className="w-[268px] shrink-0 snap-start"
              >
                <Link
                  href={`/fleet#${v.slug}`}
                  className="group relative block h-full overflow-hidden border border-ink/10 bg-paper p-6 transition-all duration-400 ease-signature hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_50px_-20px_rgba(20,16,70,0.35)]"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-400 ease-signature group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5 text-primary group-hover:text-white" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono text-[11px] text-silver">{v.code}</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-primary/70">{v.capacity}</p>
                  <p className="mt-4 line-clamp-3 text-[13px] leading-relaxed text-slate">{v.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
