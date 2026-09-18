import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import BrandPartners from "@/components/BrandPartners";
import Services from "@/components/Services";
import SocialContent from "@/components/SocialContent";
import GallerySection from "@/components/GallerySection";
import FaqSectors from "@/components/FaqSectors";

export default function Home() {
  return (
    <>
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
