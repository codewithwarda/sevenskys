import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SITE } from "@/lib/utils";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a fixed transport quote from SevenSkys Group of Companies for passenger transport, towing & recovery, or heavy equipment hire across the UAE.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/request-a-quote" }])} />
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us the route. We'll send the price."
        description="Fixed, transparent quotes for every SevenSkys service, usually returned within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
            <div className="border border-ink/10 bg-paper p-8 lg:p-10">
              <Eyebrow>Quote Details</Eyebrow>
              <div className="mt-8">
                <Suspense fallback={<div className="h-96 animate-pulse bg-ink/5" />}>
                  <QuoteForm />
                </Suspense>
              </div>
            </div>

            <aside className="h-fit space-y-6">
              <div className="border border-ink/10 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">Prefer to talk?</p>
                <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="mt-3 block font-display text-lg font-semibold text-ink hover:text-primary">
                  {SITE.phonePrimary}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[14px] text-primary hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </div>
              <div className="border border-ink/10 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">Response time</p>
                <p className="mt-3 text-[14px] leading-relaxed text-slate">
                  Standard quotes are returned within one business day. Emergency towing and recovery
                  requests are dispatched immediately, so call our line directly for those.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
