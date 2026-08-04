import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: "UAE passenger transport, towing & recovery, and heavy equipment hire since 2006.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFBFA",
    theme_color: "#141046",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
