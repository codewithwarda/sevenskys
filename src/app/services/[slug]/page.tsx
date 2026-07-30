import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/home/CTABand";
import { getServiceBySlug, services, divisionMeta } from "@/lib/data/services";
import { fleet } from "@/lib/data/fleet";
import { JsonLd, buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: "Service", description: "Service", path: "/services", noIndex: true });
  return buildMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = fleet.filter((v) => service.relatedFleet.includes(v.slug));
  const meta = divisionMeta[service.division];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(service.name, service.description, `/services/${service.slug}`)} />

      <PageHero
        eyebrow={meta.label}
        title={service.name}
        description={service.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <Eyebrow>What&rsquo;s Included</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Built for how this service is actually used</h2>
              <ul className="mt-8 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 border-t border-ink/10 pt-4 text-[15px] text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-14">
                <Eyebrow>How It Works</Eyebrow>
                <ol className="mt-8 grid gap-8 sm:grid-cols-2">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="border-l-2 border-primary/20 pl-5">
                      <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-2 font-display text-[15px] font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-slate">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="h-fit border border-ink/10 bg-paper p-8">
              <Eyebrow>Request This Service</Eyebrow>
              <p className="mt-4 text-[14px] leading-relaxed text-slate">
                Tell us your route, headcount or recovery need and we&rsquo;ll respond with a fixed
                quote, usually within one business day.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={`/request-a-quote?service=${service.slug}`} className="justify-center">
                  Request a Quote
                </Button>
                <Button href="/contact" variant="outline" className="justify-center">
                  Contact Us
                </Button>
              </div>

              {related.length > 0 && (
                <div className="mt-10 border-t border-ink/10 pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">Typically deployed with</p>
                  <ul className="mt-4 space-y-2">
                    {related.map((v) => (
                      <li key={v.slug}>
                        <Link href={`/fleet#${v.slug}`} className="text-[13px] text-ink/70 hover:text-primary hover:underline">
                          {v.name} &middot; {v.capacity}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
