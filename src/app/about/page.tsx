import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { LedgerList } from "@/components/ui/LedgerList";
import { RouteDivider } from "@/components/graphics/RouteDivider";
import { CTABand } from "@/components/sections/home/CTABand";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE, yearsInBusiness } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About SevenSkys Group of Companies",
  description:
    "Established in 2006, SevenSkys Group of Companies has grown into a trusted UAE transportation partner across passenger transport, towing & recovery, and heavy equipment hire.",
  path: "/about",
});

const values = [
  { title: "Safety", detail: "Every route, driver and vehicle is held to a compliance-first standard before it ever reaches the road." },
  { title: "Reliability", detail: "Clients build schedules around us because our schedules do not slip." },
  { title: "Innovation", detail: "We continually refine routing, fleet mix and contracts to match how UAE businesses actually operate." },
  { title: "Customer satisfaction", detail: "Long-standing relationships with construction, banking and education clients are our clearest scorecard." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About SevenSkys"
        title="A UAE transportation partner built on two decades of routes."
        description="From a single fleet in Dubai to a multi-division operator, SevenSkys Group of Companies has kept one commitment unchanged since 2006: show up, on time, safely."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink lg:text-3xl">
                Established {SITE.founded}, still on route today.
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate">
                <p>
                  SevenSkys Group of Companies takes pride in its prominent role in the UAE&rsquo;s
                  transportation industry. Established in {SITE.founded}, we have consistently
                  delivered efficient and dedicated services across the Emirates.
                </p>
                <p>
                  Our diverse offerings include heavy equipment rental, towing and recovery,
                  passenger transport for staff, labour and students, and flexible contract hire
                  on a daily, weekly, monthly or annual basis.
                </p>
                <p>
                  With a modern fleet and an unwavering commitment to excellence, we guarantee
                  seamless experiences for every client, from single-site contractors to
                  UAE-wide enterprises.
                </p>
              </div>
            </div>

            <div className="border border-ink/10 bg-primary-tint p-8 lg:p-10">
              <span className="font-display text-5xl leading-none text-primary/30">&ldquo;</span>
              <p className="mt-2 text-balance font-display text-xl font-medium leading-snug text-ink">
                With over {yearsInBusiness()} years of experience since our establishment in {SITE.founded},
                SevenSkys stands out as a seasoned expert in the transportation industry,
                a one-stop solution for passenger transport, towing, and contract hire.
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                SevenSkys Group of Companies
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-paper py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Mission &amp; Values</Eyebrow>
              <h2 className="mt-4 max-w-sm text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink">
                What guides every dispatch.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate">
                Our mission is simple: give UAE businesses, schools and sites transportation they
                do not have to think twice about.
              </p>
            </div>
            <LedgerList items={values} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <RouteDivider label={`${SITE.founded} → Today`} />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="border border-ink/10 p-8">
              <p className="font-mono text-xs text-silver">{SITE.founded}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">Founded in Dubai</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">
                SevenSkys begins operating passenger transport and towing services across the Emirates.
              </p>
            </div>
            <div className="border border-ink/10 p-8">
              <p className="font-mono text-xs text-silver">Today</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{yearsInBusiness()}+ years, three divisions</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate">
                A modern, multi-class fleet serving construction, banking, retail, education and
                government clients UAE-wide.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
