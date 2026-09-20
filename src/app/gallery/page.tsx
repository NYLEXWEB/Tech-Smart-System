import React from "react";
import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import BottomCta from "@/components/BottomCta";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Project Gallery & Installations | TechSmart Systems Kerala",
  description:
    "View our portfolio of real security installations: CCTV camera surveillance arrays, structured network rack cabling, solar energy setups, and commercial office automation in Kerala.",
  keywords: [
    "CCTV installation photos",
    "security system projects Kerala",
    "server rack cabling Kollam",
    "biometric installation portfolio",
    "TechSmart Systems gallery",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: "Project Gallery & Installations | TechSmart Systems Kerala",
    description:
      "A glimpse of real CCTV installations, structured cabling, and smart automation projects completed by TechSmart Systems across Kerala.",
    url: `${SITE_CONFIG.url}/gallery`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Project Gallery" }],
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Project Gallery", url: "/gallery" },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />

      <div className="pt-24 sm:pt-28 bg-white">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-slate-950 font-bold text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>Real Installations • Real Impact</span>
            </div>

            <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-tight mb-4">
              Project Installation Gallery
            </h1>

            <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              Explore photographs from our actual CCTV surveillance setups, server rack network cabling, smart office automations, and solar backup installations across Kerala.
            </p>
          </div>
        </section>

        {/* Gallery Showcase */}
        <GallerySection />

        {/* Bottom CTA */}
        <BottomCta />
      </div>
    </>
  );
}
