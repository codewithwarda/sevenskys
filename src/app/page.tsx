import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { Divisions } from "@/components/sections/home/Divisions";
import { FleetTeaser } from "@/components/sections/home/FleetTeaser";
import { StatsLedger } from "@/components/sections/home/StatsLedger";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { CTABand } from "@/components/sections/home/CTABand";
import { JsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "SevenSkys Group of Companies | UAE Transportation & Logistics Since 2006",
  description:
    "Passenger transport, towing & recovery, and heavy equipment hire across the UAE. Modern fleet, licensed drivers, flexible contracts. Request a quote today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SevenSkys Group of Companies",
        }}
      />
      <Hero />
      <TrustBar />
      <Divisions />
      <FleetTeaser />
      <StatsLedger />
      <WhyUs />
      <CTABand />
    </>
  );
}
