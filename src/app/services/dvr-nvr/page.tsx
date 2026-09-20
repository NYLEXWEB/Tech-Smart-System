import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA, SITE_CONFIG } from "@/lib/seo-data";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

const service = SERVICES_DATA["dvr-nvr"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/${service.slug}`,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
  },
};

export default function DvrNvrPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
