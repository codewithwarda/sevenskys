import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { services } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/fleet",
    "/industries",
    "/why-sevenskys",
    "/gallery",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.domain}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
