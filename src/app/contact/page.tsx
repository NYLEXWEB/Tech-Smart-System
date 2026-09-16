import React from "react";
import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Quote Request | TechSmart Systems - Kollam, Kerala",
  description:
    "Reach out to TechSmart Systems in Asramam, Kollam for on-site property evaluations, custom security estimates, CCTV quotes, and technical support across Kerala.",
};

export default function ContactPage() {
  return <ContactContent />;
}
