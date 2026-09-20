import React from "react";
import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us & Free Quote | TechSmart Systems Kollam, Kerala",
  description:
    "Get in touch with TechSmart Systems in Asramam, Kollam for free on-site property evaluations, custom security estimates, CCTV quotes, and technical support across Kerala. Call 0474 276 6666.",
  keywords: [
    "contact TechSmart Systems",
    "CCTV quote Kollam",
    "security system estimate Kerala",
    "TechSmart Systems phone number",
    "TechSmart Systems Kollam address",
    "CCTV installation enquiry Kollam",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact TechSmart Systems | Kollam, Kerala Head Office",
    description:
      "Reach out for on-site property surveys, security quotes, and engineering support in Kollam and all Kerala districts.",
    url: `${SITE_CONFIG.url}/contact`,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "Contact TechSmart Systems" }],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_CONFIG.url}/contact/#contactpage`,
    name: "Contact TechSmart Systems",
    url: `${SITE_CONFIG.url}/contact`,
    description:
      "Contact TechSmart Systems in Kollam for CCTV surveillance, security systems, and smart home automation quotes.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.contact.landline,
      email: SITE_CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.country,
      },
    },
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={contactPageSchema} />
      <ContactContent />
    </>
  );
}
