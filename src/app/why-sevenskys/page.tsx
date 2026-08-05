import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { LedgerList } from "@/components/ui/LedgerList";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { CTABand } from "@/components/sections/home/CTABand";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why SevenSkys",
  description:
    "Modern fleet, experienced drivers, 24/7 availability and flexible contracts: the reasons UAE businesses choose SevenSkys Group of Companies.",
  path: "/why-sevenskys",
});

const reasons = [
  { title: "Modern fleet", detail: "Nine vehicle classes, serviced on a fixed maintenance schedule rather than reactively." },
  { title: "Experienced drivers", detail: "Licensed, UAE-route trained, and vetted before they carry your staff, students or cargo." },
  { title: "24/7 availability", detail: "Recovery and emergency towing lines are staffed every hour, not just business hours." },
  { title: "Flexible contracts", detail: "Single trips, monthly billing, or multi-year agreements, structured around your calendar." },
  { title: "Affordable pricing", detail: "Fixed quotes agreed up front, with no last-minute call-out surprises." },
  { title: "Safety first", detail: "Compliance-driven standards across passenger, labour and school transport alike." },
  { title: "UAE-wide coverage", detail: "Dubai, Sharjah, and the wider Emirates, served from one accountable operator." },
  { title: "Customer satisfaction", detail: "Relationships with construction, banking and education clients that go back years, not months." },
];

const comparison = [
  { row: "Response time", generic: "Varies by subcontractor", sevenskys: "Direct dispatch, no middleman" },
  { row: "Fleet accountability", generic: "Mixed third-party vehicles", sevenskys: "Owned & maintained fleet standard" },
  { row: "Contract terms", generic: "Renegotiated per trip", sevenskys: "Fixed monthly or annual pricing" },
  { row: "Emergency coverage", generic: "Business hours only", sevenskys: "24/7 recovery & towing" },
  { row: "Single point of contact", generic: "Multiple vendors per service", sevenskys: "One account, every division" },
];

export default function WhySevenSkysPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Why SevenSkys", path: "/why-sevenskys" }])} />
      <PageHero
        eyebrow="Why SevenSkys"
        title="Reliability, made operational."
        description="Anyone can promise good service. We built the fleet, contracts and dispatch process that actually deliver it, every day since 2006."
        crumbs={[{ label: "Home", href: "/" }, { label: "Why SevenSkys" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <LedgerList items={reasons} />
        </Container>
      </section>

      <TrustBar />

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <Eyebrow>The Difference</Eyebrow>
          <h2 className="mt-4 max-w-lg text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink">
            What changes when you consolidate under one operator.
          </h2>

          <div className="mt-12 overflow-hidden border border-ink/10">
            <div className="grid grid-cols-3 bg-ink text-white">
              <div className="p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">Criteria</div>
              <div className="p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">Typical Supplier</div>
              <div className="p-4 font-mono text-[11px] uppercase tracking-[0.15em] text-primary-tint">SevenSkys</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.row} className={`grid grid-cols-3 ${i % 2 === 1 ? "bg-white" : "bg-paper"}`}>
                <div className="border-t border-ink/10 p-4 text-[13px] font-medium text-ink">{row.row}</div>
                <div className="border-t border-ink/10 p-4 text-[13px] text-slate">{row.generic}</div>
                <div className="border-t border-ink/10 p-4 text-[13px] font-medium text-primary">{row.sevenskys}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
