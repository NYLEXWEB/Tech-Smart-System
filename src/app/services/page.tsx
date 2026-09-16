import React from "react";
import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services & Solutions | TechSmart Systems - CCTV & Home Automation",
  description:
    "Explore our complete range of CCTV surveillance, DVR/NVR recording, biometric access control, smart home automation, and maintenance services across Kerala.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
