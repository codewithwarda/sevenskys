import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of SevenSkys Group of Companies' website and transportation services.",
  path: "/terms",
  noIndex: true,
});

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By using this website or engaging SevenSkys Group of Companies for transportation, towing, recovery or equipment hire services, you agree to these terms.",
  },
  {
    title: "2. Quotes and bookings",
    body: "Quotes provided via this website are estimates pending confirmation of route, schedule and vehicle availability. Final pricing is confirmed in writing before service commencement.",
  },
  {
    title: "3. Contracts",
    body: "Monthly and annual contracts are governed by separate signed agreements that take precedence over any general information presented on this website.",
  },
  {
    title: "4. Cancellations",
    body: "Cancellation terms vary by service type and are specified at the time of booking or within the relevant service contract.",
  },
  {
    title: "5. Liability",
    body: "SevenSkys Group of Companies maintains appropriate insurance and operates to UAE transportation safety standards. Liability for loss or damage is limited as set out in the applicable service contract.",
  },
  {
    title: "6. Website use",
    body: "Content on this website is provided for general informational purposes. We reserve the right to update services, pricing structures and content without prior notice.",
  },
  {
    title: "7. Governing law",
    body: "These terms are governed by the laws of the United Arab Emirates and subject to the exclusive jurisdiction of the courts of Dubai.",
  },
  {
    title: "8. Contact",
    body: `For questions regarding these terms, contact ${SITE.email} or ${SITE.phonePrimary}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated 2026. These terms govern use of this website and the general provision of SevenSkys transportation services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="border-t border-ink/10 pt-6">
                <h2 className="font-display text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-[12px] text-silver">
            This document is provided as a general reference and should be reviewed by qualified legal
            counsel before publication.
          </p>
        </Container>
      </section>
    </>
  );
}
