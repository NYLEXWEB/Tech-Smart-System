import React from "react";
import type { Metadata } from "next";
import Products from "@/components/Products";
import BottomCta from "@/components/BottomCta";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema, getItemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Security & Automation Products | TechSmart Systems Kollam",
  description:
    "Explore our genuine security products: HD & 4K CCTV cameras, eSSL biometric attendance systems, smart gate motors, home automation switchboards, access control locks, and video door phones in Kerala.",
  keywords: [
    "CCTV camera products Kollam",
    "eSSL biometric attendance machine",
    "smart gate automation motor",
    "home automation switches Kerala",
    "door access control lock",
    "video door phone Kerala",
    "security products Kollam",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/products`,
  },
  openGraph: {
    title: "Security & Automation Products | TechSmart Systems Kollam",
    description:
      "Explore genuine security and smart automation hardware in Kollam, Kerala. CCTV cameras, eSSL biometrics, smart gates, and video door phones.",
    url: `${SITE_CONFIG.url}/products`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Products" }],
  },
};

export default function ProductsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);

  const itemListSchema = getItemListSchema("Security & Automation Products", [
    {
      name: "CCTV Surveillance Cameras (HD, IP, 4K & AI)",
      description: "Color night vision, 4K UHD, AI human/vehicle detection weatherproof cameras.",
      image: "/images/products/cctv-surveillance-camera-kollam.jpg",
      url: `${SITE_CONFIG.url}/services/cctv-installation`,
    },
    {
      name: "eSSL Biometric Attendance & Face Recognition Systems",
      description: "Touchless AI face recognition and optical fingerprint time attendance terminals.",
      image: "/images/products/biometric-attendance-fingerprint-machine.jpg",
      url: `${SITE_CONFIG.url}/services/biometric-attendance`,
    },
    {
      name: "Smart Gate Automation Motors",
      description: "Heavy-duty sliding and swing gate motors with remote keyfob and smartphone app controls.",
      image: "/images/products/automatic-motorized-sliding-swing-gate.jpg",
      url: `${SITE_CONFIG.url}/services/gate-automation`,
    },
    {
      name: "Home & Office Smart Automation Modules",
      description: "Modular glass touch switch panels, automated scene lighting, and appliance controls.",
      image: "/images/products/smart-home-automation-controller-iot.jpg",
      url: `${SITE_CONFIG.url}/services/home-automation`,
    },
    {
      name: "Door Access Control Systems & Smart Locks",
      description: "Electromagnetic EM locks, biometric fingerprint handles, and RFID access controllers.",
      image: "/images/products/rfid-card-keypad-door-access-control.png",
      url: `${SITE_CONFIG.url}/services/access-control`,
    },
    {
      name: "Video Door Phones & Smart Intercoms",
      description: "Color indoor touchscreen displays with night vision doorbells and door unlock triggers.",
      image: "/images/products/ip-video-door-phone-intercom-display.jpg",
      url: `${SITE_CONFIG.url}/services/video-door-phone`,
    },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={itemListSchema} />

      <div className="pt-24 sm:pt-28 bg-white">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-slate-950 font-bold text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>Genuine Hardware &amp; Certified Brands</span>
            </div>

            <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-tight mb-4">
              Security &amp; Automation Products
            </h1>

            <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              Explore our complete selection of enterprise-grade CCTV surveillance, biometric time-attendance terminals, motorized gate systems, and smart automation devices across Kerala.
            </p>
          </div>
        </section>

        {/* Product Grid Component */}
        <Products />

        {/* Bottom CTA */}
        <BottomCta />
      </div>
    </>
  );
}
