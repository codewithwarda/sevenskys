import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SevenSkys Group of Companies collects, uses and protects personal data.",
  path: "/privacy-policy",
  noIndex: true,
});

const sections = [
  {
    title: "1. Information we collect",
    body: "When you request a quote, contact us, or use our services, we may collect your name, company, phone number, email address, pickup and destination details, and any information you choose to share regarding your transportation requirements.",
  },
  {
    title: "2. How we use your information",
    body: "We use the information you provide to respond to enquiries, prepare quotes, schedule and deliver transportation services, and to communicate updates relevant to your booking or contract. We do not sell personal data to third parties.",
  },
  {
    title: "3. Data sharing",
    body: "Information may be shared with drivers and operations staff strictly to fulfil your booking, and with service providers who support our systems (such as hosting and communications tools), under confidentiality obligations.",
  },
  {
    title: "4. Data retention",
    body: "We retain enquiry and contract records for as long as necessary to deliver services, meet legal and accounting obligations under UAE law, and resolve any disputes.",
  },
  {
    title: "5. Your rights",
    body: "You may request access to, correction of, or deletion of your personal data by contacting us at the details below, subject to any retention obligations we are required to meet.",
  },
  {
    title: "6. Cookies",
    body: "Our website may use essential cookies required for core functionality. We do not use third-party advertising trackers.",
  },
  {
    title: "7. Contact",
    body: `Questions about this policy can be directed to ${SITE.email} or ${SITE.phonePrimary}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated 2026. This policy explains how SevenSkys Group of Companies handles personal information collected through our website and services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
            This policy is provided as a general reference and should be reviewed by qualified legal
            counsel to confirm compliance with applicable UAE data protection regulations before publication.
          </p>
        </Container>
      </section>
    </>
  );
}
