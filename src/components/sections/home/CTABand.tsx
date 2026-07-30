import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RouteDivider } from "@/components/graphics/RouteDivider";
import { ContrailField } from "@/components/graphics/ContrailField";
import { GhostNumeral } from "@/components/graphics/GhostNumeral";
import { SITE } from "@/lib/utils";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute inset-0 opacity-30">
        <ContrailField />
      </div>
      <GhostNumeral value="07" tone="white" className="absolute -right-8 -bottom-16 !opacity-[0.08]" />
      <Container className="relative">
        <RouteDivider tone="white" label="Book Now" />
        <div className="mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-lg text-balance font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.08]">
            Ready to put your route in reliable hands?
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/request-a-quote" className="bg-white text-primary" sweepColor="#EDEBF8">
              Request a Quote
            </Button>
            <Button href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`} variant="outline" className="border-white/40 text-white hover:border-white hover:text-white">
              Call {SITE.phonePrimary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
