import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/home/CTABand";
import { divisionMeta, servicesByDivision, type Division } from "@/lib/data/services";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Passenger transportation, towing & recovery, and heavy equipment services offered by SevenSkys Group of Companies across the UAE.",
  path: "/services",
});

const order: Division[] = ["passenger", "towing", "equipment"];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title="Every service, one accountable operator."
        description="From daily staff shuttles to emergency heavy recovery, each SevenSkys service is run under the same fleet, drivers and safety standard."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {order.map((division, di) => {
        const meta = divisionMeta[division];
        const items = servicesByDivision(division);
        return (
          <section key={division} id={division} className={di % 2 === 1 ? "bg-white" : "bg-paper"}>
            <Container className="py-20 lg:py-24">
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
                <div>
                  <Eyebrow>{`Division 0${di + 1}`}</Eyebrow>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink lg:text-3xl">{meta.label}</h2>
                  <p className="mt-2 max-w-lg text-[14px] text-slate">{meta.description}</p>
                </div>
              </div>

              <div className="mt-2 grid divide-y divide-ink/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {items.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col justify-between gap-6 py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">{s.name}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate">{s.shortDescription}</p>
                    </div>
                    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
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
