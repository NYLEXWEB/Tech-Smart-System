import React from "react";
import type { Metadata } from "next";
import BrandPartners from "@/components/BrandPartners";
import BottomCta from "@/components/BottomCta";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema, getItemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CCTV & Security Brands We Work With | Hikvision, CP PLUS, Matrix, UNV | TechSmart Systems",
  description:
    "Explore trusted global CCTV and security brands supplied and installed by TechSmart Systems in Kerala: Hikvision, CP PLUS, Matrix Security Solutions, UNV (Uniview), Prama, and HiFocus.",
  keywords: [
    "Hikvision CCTV Kollam",
    "CP PLUS dealer Kollam",
    "Matrix security solutions Kerala",
    "UNV IP camera Kerala",
    "Prama CCTV camera",
    "HiFocus security cameras",
    "CCTV brands Kerala",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands`,
  },
  openGraph: {
    title: "CCTV & Security Brands We Work With | TechSmart Systems Kollam",
    description:
      "Official hardware installations for Hikvision, CP PLUS, Matrix, UNV, Prama, and HiFocus across Kerala.",
    url: `${SITE_CONFIG.url}/brands`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Brand Partners" }],
  },
};

export default function BrandsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Brands", url: "/brands" },
  ]);

  const brandListSchema = getItemListSchema("Trusted CCTV & Security Brands", [
    { name: "Hikvision", description: "Global leader in high-definition IP video surveillance and AI cameras." },
    { name: "CP PLUS", description: "Comprehensive analog HD and IP surveillance solutions." },
    { name: "Matrix Security Solutions", description: "Enterprise telecom, biometric attendance, and IP video surveillance." },
    { name: "UNV (Uniview)", description: "Pioneer in high-definition IP video surveillance." },
    { name: "Prama", description: "Indigenous high-quality surveillance and security hardware." },
    { name: "HiFocus", description: "CCTV surveillance and digital security recording solutions." },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={brandListSchema} />

      <div className="pt-24 sm:pt-28 bg-white">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-slate-950 font-bold text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>Industry-Leading Security Hardware</span>
            </div>

            <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-tight mb-4">
              Our Trusted CCTV &amp; Security Brands
            </h1>

            <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              We engineer dependable security solutions deploying certified, warranty-backed surveillance hardware from global industry leaders across Kerala.
            </p>
          </div>
        </section>

        <BrandPartners />
        <BottomCta />
      </div>
    </>
  );
}
