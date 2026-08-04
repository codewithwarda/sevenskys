import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/fleet",
    "/industries",
    "/why-sevenskys",
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

  const industryRoutes = industries.map((i) => ({
    url: `${SITE.domain}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
