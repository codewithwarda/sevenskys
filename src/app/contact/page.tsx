import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with SevenSkys Group of Companies. Call, WhatsApp, or send a message and our Dubai-based team will respond within one business day.",
  path: "/contact",
});

const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.country}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact"
        title="Talk to the team running your route."
        description="Call our dispatch line, message us on WhatsApp, or send the details below. A real person responds within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Reach Us</Eyebrow>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4 border-t border-ink/10 pt-6">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">Call</p>
                    <a href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} className="block text-[14px] text-slate hover:text-primary">
                      {SITE.phonePrimary}
                    </a>
                    <a href={`tel:${SITE.phoneMobile.replace(/\s/g, "")}`} className="block text-[14px] text-slate hover:text-primary">
                      {SITE.phoneMobile}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-ink/10 pt-6">
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">WhatsApp</p>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-slate hover:text-primary"
                    >
                      Message us directly
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-ink/10 pt-6">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-[14px] text-slate hover:text-primary">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-ink/10 pt-6">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">Office</p>
                    <p className="text-[14px] leading-relaxed text-slate">
                      {SITE.address.line1}
                      <br />
                      {SITE.address.line2}
                      <br />
                      {SITE.address.poBox}, {SITE.address.city}, {SITE.address.country}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-ink/10 bg-paper p-8 lg:p-10">
              <Eyebrow>Send a Message</Eyebrow>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10">
        <iframe
          title="SevenSkys Group of Companies location"
          src={mapSrc}
          className="h-[420px] w-full grayscale-[20%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
