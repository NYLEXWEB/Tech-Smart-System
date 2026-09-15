import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import FaqSectors from "@/components/FaqSectors";
import BottomCta from "@/components/BottomCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Clients />
        <FaqSectors />
        <BottomCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
