import React from "react";
import type { Metadata } from "next";
import ClientsContent from "@/components/ClientsContent";

export const metadata: Metadata = {
  title: "Clients & Projects | TechSmart Systems - Trusted Across Kerala",
  description:
    "Discover TechSmart Systems client track record, including the Kollam District Police citywide CCTV project, Diya Group, MAKS Automation, Sun Builders, and 700+ satisfied clients.",
};

export default function ClientsPage() {
  return <ClientsContent />;
}
