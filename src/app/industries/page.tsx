import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/home/CTABand";
import { industries } from "@/lib/data/industries";
import { getServiceBySlug } from "@/lib/data/services";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "SevenSkys supports construction, banking, retail, education, security, telecom and events clients across the UAE with tailored transport solutions.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries"
        title="Different sectors. The same standard."
        description="Construction sites, financial institutions, schools and event organisers all rely on SevenSkys for the same reason: routes that run without surprises."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="flex flex-col justify-between gap-6 bg-paper p-8">
                <div>
                  <span className="font-mono text-xs text-silver">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 font-display text-lg font-semibold text-ink">
                    <Link href={`/industries/${industry.slug}`} className="transition-colors hover:text-primary">
                      {industry.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate">{industry.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {industry.relevantServices.map((slug) => {
                    const service = getServiceBySlug(slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="border border-ink/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-slate transition-colors hover:border-primary hover:text-primary"
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
