import React from "react";
import type { Metadata } from "next";
import ClientsContent from "@/components/ClientsContent";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Clients & Landmark Projects | Kollam District Police & 700+ Installations | TechSmart Systems",
  description:
    "Discover TechSmart Systems client track record in Kerala: The landmark Kollam District Police citywide CCTV project (2002), Diya Group, MAKS Automation, Sun Builders, and over 700+ satisfied properties.",
  keywords: [
    "TechSmart Systems clients",
    "Kollam District Police CCTV project",
    "security system case studies Kerala",
    "commercial surveillance clients Kollam",
    "CCTV installations Kerala portfolio",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/clients`,
  },
  openGraph: {
    title: "Clients & Projects | TechSmart Systems Kerala",
    description:
      "Trusted by government institutions, corporate enterprises, builders, and 700+ property owners across Kerala since 1999.",
    url: `${SITE_CONFIG.url}/clients`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Clients & Projects" }],
  },
};

export default function ClientsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Clients & Projects", url: "/clients" },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <ClientsContent />
    </>
  );
}
