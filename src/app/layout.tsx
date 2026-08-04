import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { JsonLd, buildMetadata, localBusinessSchema } from "@/lib/seo";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "SevenSkys Group of Companies | UAE Transportation & Logistics",
    description:
      "SevenSkys Group of Companies has delivered passenger transport, towing & recovery, and heavy equipment hire across the UAE since 2006. Request a quote today.",
    path: "/",
  }),
  metadataBase: new URL("https://www.sevenskys.co"),
};

export const viewport: Viewport = {
  themeColor: "#141046",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
