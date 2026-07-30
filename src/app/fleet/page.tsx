import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/home/CTABand";
import { fleetCategories, fleet } from "@/lib/data/fleet";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Fleet",
  description:
    "Explore the SevenSkys fleet: passenger buses, minibuses, school buses, pickup trucks, recovery vehicles and heavy equipment operating across the UAE.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Fleet", path: "/fleet" }])} />
      <PageHero
        eyebrow="Our Fleet"
        title="Nine vehicle classes. One dispatch line."
        description="Every vehicle in the SevenSkys fleet is maintained to a single standard, whatever the job: a school run, a labour camp shift, or a 3am recovery call."
        crumbs={[{ label: "Home", href: "/" }, { label: "Fleet" }]}
      />

      {fleetCategories.map((cat, ci) => {
        const items = fleet.filter((v) => v.category === cat.key);
        if (items.length === 0) return null;
        return (
          <section key={cat.key} className={ci % 2 === 1 ? "bg-white" : "bg-paper"}>
            <Container className="py-16 lg:py-20">
              <div className="flex items-baseline gap-4 border-b border-ink/10 pb-6">
                <span className="font-mono text-xs text-silver">{String(ci + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-xl font-semibold text-ink lg:text-2xl">{cat.label}</h2>
              </div>
              <div className="mt-2 grid divide-y divide-ink/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                {items.map((v) => (
                  <div key={v.slug} id={v.slug} className="scroll-mt-32 py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                    <div className="flex items-center justify-between font-mono text-[11px] text-silver">
                      <span>{v.code}</span>
                      <span>{v.categoryLabel}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{v.name}</h3>
                    <p className="mt-1 text-[13px] font-medium text-primary">{v.capacity}</p>
                    <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-slate">{v.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {v.bestFor.map((tag) => (
                        <li key={tag} className="border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTABand />
    </>
  );
}
