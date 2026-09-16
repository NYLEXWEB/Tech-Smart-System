import React from "react";
import type { Metadata } from "next";
import SocialContent from "@/components/SocialContent";

export const metadata: Metadata = {
  title: "Social Media Hub | TechSmart Systems - Instagram, Facebook, WhatsApp & Google",
  description:
    "Connect with TechSmart Systems across our official social channels: Instagram, Facebook, WhatsApp, and Google Maps Reviews.",
};

export default function SocialPage() {
  return <SocialContent isStandalone={true} />;
}
