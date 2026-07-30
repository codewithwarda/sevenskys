import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { LedgerList } from "@/components/ui/LedgerList";

const reasons = [
  { title: "Modern, maintained fleet", detail: "Regularly serviced vehicles across nine classes, from minibuses to heavy recovery." },
  { title: "Experienced drivers", detail: "Licensed, background-checked drivers trained on UAE routes and safety protocol." },
  { title: "24/7 availability", detail: "Recovery and emergency towing dispatched at any hour, every day of the year." },
  { title: "Flexible contracts", detail: "Single trips, monthly billing or multi-year agreements, structured around you." },
  { title: "Transparent pricing", detail: "Fixed quotes with no hidden call-out fees or last-minute surcharges." },
  { title: "Safety first", detail: "Compliance-driven operations across passenger, labour and school transport." },
  { title: "UAE-wide coverage", detail: "Dubai, Sharjah and beyond, served from a single accountable operator." },
  { title: "Long-term relationships", detail: "Trusted since 2006 by construction, banking, retail and education clients." },
];

export function WhyUs() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Why SevenSkys</Eyebrow>
            <h2 className="mt-4 max-w-sm text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink">
              Reliability is the whole product.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate">
              Transportation is judged on the trips that go right, invisibly, every single day.
              That is the standard we operate to.
            </p>
          </div>
          <LedgerList items={reasons} />
        </div>
      </Container>
    </section>
  );
}
