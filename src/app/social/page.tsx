import React from "react";
import type { Metadata } from "next";
import SocialContent from "@/components/SocialContent";
import BottomCta from "@/components/BottomCta";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Official Social Media Channels | TechSmart Systems Kerala",
  description:
    "Connect with TechSmart Systems across official digital channels: WhatsApp direct chat, Instagram project reels, Facebook company updates, and Google Maps verified customer reviews.",
  keywords: [
    "TechSmart Systems social media",
    "TechSmart Systems WhatsApp",
    "TechSmart Systems Google reviews",
    "TechSmart Systems Instagram",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/social`,
  },
  openGraph: {
    title: "Official Social Media Channels | TechSmart Systems Kerala",
    description:
      "Connect with TechSmart Systems on WhatsApp, Instagram, Facebook, and Google Maps Reviews.",
    url: `${SITE_CONFIG.url}/social`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Social Channels" }],
  },
};

export default function SocialPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Social Channels", url: "/social" },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SocialContent isStandalone={true} />
      <BottomCta />
    </>
  );
}
