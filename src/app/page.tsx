import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialContent from "@/components/SocialContent";
import FaqSectors from "@/components/FaqSectors";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <SocialContent id="social" />
      <FaqSectors />
    </>
  );
}
