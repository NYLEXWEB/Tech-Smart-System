import React from "react";
import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CCTV & Security Systems Services in Kollam, Kerala | TechSmart Systems",
  description:
    "Explore our complete range of CCTV surveillance, DVR/NVR storage, biometric access control, smart home automation, gate automation, and CCTV AMC services across Kerala.",
  keywords: [
    "CCTV services Kollam",
    "security system solutions Kerala",
    "biometric installation services",
    "home automation services Kollam",
    "gate automation Kerala",
    "CCTV AMC Kollam",
    "surveillance system installation",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: "CCTV & Security Systems Services in Kollam, Kerala | TechSmart Systems",
    description:
      "Explore 8+ integrated security & automation solutions from TechSmart Systems. Serving residential, commercial, and industrial clients across Kerala since 1999.",
    url: `${SITE_CONFIG.url}/services`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Services" }],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <ServicesContent />
    </>
  );
}
