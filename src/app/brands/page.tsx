import React from "react";
import type { Metadata } from "next";
import BrandPartners from "@/components/BrandPartners";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "CCTV Brands We Work With | TechSmart Systems Kollam",
  description:
    "Explore our trusted CCTV and surveillance brand partners including Hikvision, CP PLUS, Matrix, Prama, and HiFocus.",
};

export default function BrandsPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-white">
      <BrandPartners />
      <BottomCta />
    </div>
  );
}
