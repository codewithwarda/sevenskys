import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { JsonLd, faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/data/faqs";

export function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <JsonLd data={faqSchema(faqs)} />
      <Container className="max-w-3xl">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] text-ink">
          Common questions, answered.
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-[15px] font-semibold text-ink marker:content-none">
                {faq.question}
                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform duration-300 ease-signature group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
