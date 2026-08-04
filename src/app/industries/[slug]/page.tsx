import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/home/CTABand";
import { industries } from "@/lib/data/industries";
import { getServiceBySlug } from "@/lib/data/services";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    return buildMetadata({ title: "Industries", description: "Industries we serve.", path: "/industries", noIndex: true });
  }
  return buildMetadata({
    title: `Transport for ${industry.name}`,
    description: `${industry.description} SevenSkys serves ${industry.name.toLowerCase()} clients across Dubai and the UAE.`,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = industry.relevantServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: `Transportation for ${industry.name}`,
          name: `Transport for ${industry.name}`,
          description: industry.description,
          provider: {
            "@type": "MovingCompany",
            name: SITE.name,
            url: SITE.domain,
            telephone: SITE.phonePrimary,
          },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          url: `${SITE.domain}/industries/${industry.slug}`,
        }}
      />

      <PageHero
        eyebrow="Industries"
        title={`Transport built for ${industry.name.toLowerCase()}`}
        description={industry.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <Eyebrow>Services Typically Used</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                What {industry.name.toLowerCase()} clients run with SevenSkys
              </h2>
              <div className="mt-8 grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex flex-col justify-between gap-4 bg-white p-6 transition-colors hover:bg-paper"
                  >
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-ink">{service.name}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate">{service.shortDescription}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                      View service
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="h-fit border border-ink/10 bg-paper p-8">
              <Eyebrow>Request a Quote</Eyebrow>
              <p className="mt-4 text-[14px] leading-relaxed text-slate">
                Tell us your headcount, route or site requirements and we&rsquo;ll respond with a fixed
                quote, usually within one business day.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/request-a-quote" className="justify-center">
                  Request a Quote
                </Button>
                <Button href="/contact" variant="outline" className="justify-center">
                  Contact Us
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
