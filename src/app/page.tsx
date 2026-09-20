import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import BrandPartners from "@/components/BrandPartners";
import Services from "@/components/Services";
import SocialContent from "@/components/SocialContent";
import GallerySection from "@/components/GallerySection";
import FaqSectors from "@/components/FaqSectors";
import SchemaOrg from "@/components/SchemaOrg";
import { SITE_CONFIG } from "@/lib/seo-data";
import { getFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "CCTV Camera Installation & Security Systems in Kollam, Kerala | TechSmart Systems",
  description:
    "Leading CCTV camera installation, security systems, biometric access control, DVR/NVR storage, and home automation provider in Kollam, Kerala. Serving residential and commercial clients since 1999.",
  keywords: [
    "CCTV installation Kollam",
    "CCTV camera installation Kerala",
    "security systems Kollam",
    "biometric attendance system Kerala",
    "home automation Kollam",
    "door access control Kerala",
    "CCTV surveillance company Kerala",
    "CCTV camera price Kollam",
    "Hikvision CCTV installation Kollam",
    "CP PLUS dealer Kollam",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "CCTV Camera Installation & Security Systems in Kollam, Kerala | TechSmart Systems",
    description:
      "Professional CCTV surveillance, biometric access control, DVR/NVR, and home automation solutions in Kollam, Kerala since 1999. Free on-site quotes.",
    url: SITE_CONFIG.url,
    images: [{ url: "/images/techsmart-systems-cctv-security-kollam-hero.png", width: 1200, height: 630, alt: "TechSmart Systems Security Solutions" }],
  },
};

const homeFaqs = [
  {
    question: "What security and surveillance systems do you provide in Kerala?",
    answer:
      "Our comprehensive lineup includes 4K High-Definition CCTV Surveillance (IP, analog, & AI motion detection cameras), Centralized DVR & NVR Storage, Smart Home Automation, Electronic Smart Door Locks, RFID Access Control, Biometric Attendance, and Global Mobile Monitoring.",
  },
  {
    question: "Can I monitor my CCTV cameras and automation remotely on my mobile phone?",
    answer:
      "Yes, all modern CCTV cameras and smart automation modules installed by TechSmart Systems come with secure, encrypted iOS and Android mobile app integration for real-time live streaming, motion alerts, multi-screen views, and two-way audio from anywhere in the world.",
  },
  {
    question: "What sectors and property types do you serve across Kerala?",
    answer:
      "We specialize in sales, configuration, and installation across Homes & Luxury Villas, Retail Shops, Corporate Offices, Educational Institutions, Hospitals, Warehouses, Commercial Centers, and Industrial Plants throughout Kollam and all Kerala districts.",
  },
  {
    question: "How can I request an on-site inspection and free quote in Kollam?",
    answer:
      "You can reach our engineering office in Kollam directly by calling 0474 276 6666 or +91 9048 171 666, chatting on WhatsApp, or submitting your requirements through our instant online quote request form.",
  },
  {
    question: "What after-sales warranty and maintenance support is provided?",
    answer:
      "With 25+ years of continuous service since 1999, we provide end-to-end manufacturer warranty support, annual maintenance contracts (AMC), routine firmware checkups, cable inspections, and rapid on-site technician dispatch for urgent support requests.",
  },
  {
    question: "Do you offer custom Smart Door Locks & Access Control for homes and offices?",
    answer:
      "Yes! We provide biometric fingerprint locks, RFID smart card entry, digital passcode handles, and video door phones integrated with electric strike gates for both residential villas and high-security corporate offices.",
  },
  {
    question: "How much storage capacity is needed for CCTV recording?",
    answer:
      "Storage depends on the number of cameras, resolution (2MP, 4K), and recording mode (continuous vs motion-triggered). We configure surveillance-grade hard drives offering 15 to 60+ days of seamless video loop recording with automatic overwrite protection.",
  },
  {
    question: "Will the security system work during power failures or electricity cuts?",
    answer:
      "Yes, our CCTV installations and smart controllers can be integrated with dedicated UPS power backups or solar inverter systems, ensuring uninterrupted 24/7 security and recording even during Kerala power outages.",
  },
];

export default function Home() {
  const faqSchema = getFaqSchema(homeFaqs);

  return (
    <>
      <SchemaOrg schema={faqSchema} />
      <Hero />
      <About />
      <Products />
      <BrandPartners />
      <Services />
      <SocialContent id="social" />
      <GallerySection />
      <FaqSectors />
    </>
  );
}
