"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] md:h-screen md:min-h-0 flex flex-col justify-start md:justify-center overflow-hidden bg-white w-full max-w-full pt-[215px] xs:pt-[230px] sm:pt-[245px] md:pt-0 pb-12 sm:pb-8 text-[#111827] select-none">

      {/* Mobile View: Vertical Hero Background */}
      <div
        className="block md:hidden absolute inset-0 z-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-section-mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Desktop View: Landscape Hero Camera Background */}
      <div
        className="hidden md:block absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-section.png')",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content (Positioned in clean white safe area) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full md:my-auto md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Main Copy & CTAs (Shifted right on desktop to clear left camera) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 xl:col-span-8 md:pl-24 lg:pl-36 xl:pl-44 space-y-3 xs:space-y-3.5 sm:space-y-5 lg:space-y-6 text-left max-w-full sm:max-w-2xl lg:max-w-3xl"
          >
            {/* Tagline / Eyebrow Badge */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#F5A800] rounded-full flex-shrink-0" />
              <span className="text-[10px] xs:text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-slate-600 uppercase">
                SECURITY TODAY • A SAFER TOMORROW
              </span>
            </div>

            {/* Headline H1 (Slimmer Lora Font with strict 1-line per segment) */}
            <h1 className="font-lora text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-semibold text-slate-950 tracking-normal leading-[1.22] sm:leading-[1.18]">
              <span className="block">Complete</span>
              <span className="block whitespace-nowrap text-[#F5A800]">CCTV Solutions</span>
              <span className="block whitespace-nowrap">for a Safer World</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-[12px] xs:text-[13px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-[290px] xs:max-w-[320px] sm:max-w-lg">
              Protect what matters with smart security solutions for your home and business. Serving Kollam &amp; all Kerala districts since 1999.
            </p>

            {/* CTA Button Stack (Shifted to right to clear camera) */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 w-full md:pl-1 lg:pl-2">

              {/* Primary Yellow CTA Button */}
              <Link
                href="/contact"
                className="w-[230px] xs:w-[245px] sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-5 py-3 rounded-full bg-[#F5A800] hover:bg-[#DF9800] active:scale-[0.98] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all group cursor-pointer"
              >
                <span>GET A QUOTE</span>
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs transform group-hover:translate-x-0.5 transition-transform">
                  →
                </div>
              </Link>

              {/* Watch Video Secondary Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-[200px] xs:w-[215px] sm:w-auto inline-flex items-center justify-start gap-3 px-4.5 py-2.5 rounded-full bg-[#F1F5F9]/90 sm:bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-xs hover:shadow-sm active:scale-[0.98] text-slate-900 font-bold text-xs sm:text-sm transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span>Watch Video</span>
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

