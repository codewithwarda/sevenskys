import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BlueprintGrid } from "@/components/graphics/BlueprintGrid";
import { GhostNumeral } from "@/components/graphics/GhostNumeral";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper pb-16 pt-14 lg:pb-20 lg:pt-16">
      <BlueprintGrid />
      <GhostNumeral value="07" className="absolute -right-10 -top-16 hidden lg:block" />
      <span className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-silver" />}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-primary">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-[clamp(2.25rem,4.8vw,3.5rem)] font-semibold leading-[1.03] tracking-tight text-ink">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-xl text-balance text-[15px] leading-relaxed text-slate">{description}</p>}
      </Container>
    </section>
  );
}
