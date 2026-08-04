import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/home/CTABand";
import { GalleryPlate } from "@/components/graphics/GalleryPlate";
import { JsonLd, buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A visual index of SevenSkys operations across passenger transport, towing & recovery, and heavy equipment.",
  path: "/gallery",
});

const plates = [
  { title: "Fleet in Motion", tag: "Passenger Transport" },
  { title: "Site Mobilisation", tag: "Labour Transport" },
  { title: "Recovery Response", tag: "Towing & Recovery" },
  { title: "School Runs", tag: "Education" },
  { title: "Corporate Programmes", tag: "Corporate Transport" },
  { title: "Heavy Machinery", tag: "Equipment Hire" },
  { title: "Event Shuttles", tag: "Event Transport" },
  { title: "24/7 Dispatch", tag: "Emergency Towing" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        eyebrow="Gallery"
        title="Operations, indexed."
        description="A visual index of the divisions and routes SevenSkys runs across the UAE. Full fleet photography is added on an ongoing basis."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
            {plates.map((p, i) => (
              <div key={p.title} className="group relative aspect-square overflow-hidden bg-white">
                <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 ease-signature group-hover:scale-105">
                  <GalleryPlate index={i} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">{p.tag}</p>
                  <p className="font-display text-[13px] font-semibold text-white">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
