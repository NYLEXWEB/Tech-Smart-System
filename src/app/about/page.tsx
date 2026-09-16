import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | TechSmart Systems - Security & Automation Since 1999",
  description:
    "Learn about TechSmart Systems, founded in 1999 in Kollam, Kerala. 25+ years of excellence in CCTV surveillance, security systems, and smart home automation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
