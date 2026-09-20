import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | 25+ Years of Security & CCTV Excellence in Kerala | TechSmart Systems",
  description:
    "Founded in 1999 in Asramam, Kollam. Discover TechSmart Systems 25+ year heritage in CCTV surveillance, biometric security, smart automation, and the landmark Kollam District Police surveillance project.",
  keywords: [
    "about TechSmart Systems",
    "CCTV company Kollam",
    "security system company Kerala",
    "CCTV surveillance history Kollam",
    "Kollam District Police CCTV project",
    "electronic security experts Kerala",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: "About TechSmart Systems | 25+ Years Security Legacy in Kollam, Kerala",
    description:
      "Founded in 1999 in Asramam, Kollam. 25+ years of engineering excellence in CCTV surveillance, security systems, and smart home automation.",
    url: `${SITE_CONFIG.url}/about`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "About TechSmart Systems" }],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
