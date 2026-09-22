"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] md:h-screen md:min-h-0 flex flex-col justify-start md:justify-center overflow-hidden bg-white w-full max-w-full pt-[215px] xs:pt-[230px] sm:pt-[245px] md:pt-0 pb-12 sm:pb-8 text-[#111827] select-none">

      {/* Mobile View: Vertical Hero Background */}
      <div
        className="block md:hidden absolute inset-0 z-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/images/techsmart-systems-cctv-security-kollam-hero-mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Desktop View: Landscape Hero Camera Background */}
      <div
        className="hidden md:block absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/images/techsmart-systems-cctv-security-kollam-hero.png')",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content (Positioned in clean white safe area) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full md:my-auto md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Main Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 xl:col-span-8 md:pl-10 lg:pl-16 xl:pl-24 space-y-4 sm:space-y-5 lg:space-y-6 text-left max-w-full sm:max-w-2xl lg:max-w-3xl"
          >
            {/* Prominent Extra Large Hero Brand Logo */}
            <div className="relative -ml-2.5 sm:-ml-3.5 pt-1 pb-1">
              <div className="relative h-20 xs:h-24 sm:h-28 md:h-36 lg:h-40 xl:h-44 w-auto aspect-[430/154]">
                <Image
                  src="/logo-bg.png"
                  alt="TechSmart Systems Logo"
                  fill
                  priority
                  className="object-contain object-left drop-shadow-xs"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 560px"
                />
              </div>
            </div>

            {/* Headline H1 */}
            <h1 className="font-dmsans text-[23px] xs:text-[27px] sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-semibold text-slate-950 tracking-tight leading-[1.16] sm:leading-[1.12]">
              <span className="block">Complete</span>
              <span className="block whitespace-nowrap text-[#F5A800] drop-shadow-xs">CCTV Solutions</span>
              <span className="block whitespace-nowrap">in Kollam, Kerala</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-[13px] xs:text-[14px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-[300px] xs:max-w-[350px] sm:max-w-xl">
              TechSmart Systems engineers dependable CCTV surveillance, biometric access control, and smart automation for homes and businesses across all Kerala districts since 1999.
            </p>

            {/* CTA Button Stack (Perfect Auto-Width Alignment & Clean Padding) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-5 w-full">

              {/* Primary Yellow CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#F5A800] hover:bg-[#E09900] active:scale-[0.98] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all group cursor-pointer border border-[#E59800]/40 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">GET A QUOTE</span>
                <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs shrink-0 transform group-hover:translate-x-0.5 transition-transform">
                  →
                </div>
              </Link>

              {/* Watch Video Secondary Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                aria-label="Watch TechSmart Systems Video Overview"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer border border-slate-300 shadow-sm hover:shadow-md group whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Watch Video</span>
              </button>

            </div>

          </motion.div>

          {/* Right Column Spacer */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4" aria-hidden="true" />

        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-800">
                <h3 className="text-sm font-bold text-white">TechSmart Systems Security Overview</h3>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  aria-label="Close Video"
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="TechSmart Systems Product Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
