import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlueprintGrid } from "@/components/graphics/BlueprintGrid";
import { RouteDivider } from "@/components/graphics/RouteDivider";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Head back to the SevenSkys homepage.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-paper py-24">
      <BlueprintGrid />
      <Container className="relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mt-5 max-w-lg text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] text-ink">
          This route doesn&rsquo;t exist on our map.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate">
          The page you&rsquo;re looking for may have moved. Head back to the homepage or get in touch
          and we&rsquo;ll point you the right way.
        </p>
        <div className="mt-10 max-w-md">
          <RouteDivider />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
