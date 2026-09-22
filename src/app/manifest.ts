import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechSmart Systems - CCTV & Security Systems",
    short_name: "TechSmart Systems",
    description:
      "Professional CCTV surveillance, security systems, biometric access control, and smart home automation in Kollam, Kerala.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111827",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/title-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
