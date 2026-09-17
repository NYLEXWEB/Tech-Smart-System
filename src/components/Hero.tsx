"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-white w-full max-w-full pt-20 sm:pt-28 pb-0 text-[#111827] select-none">
      
      {/* Mobile View: Vertical Hero Background */}
      <div
        className="block md:hidden absolute inset-0 z-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat pointer-events-none opacity-40"
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

      {/* Main Hero Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Main Copy & CTAs) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left max-w-2xl"
          >
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#F5B800] rounded-full" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
                SECURITY TODAY • A SAFER TOMORROW
              </span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-slate-950 tracking-tight leading-[1.06]">
              Complete<br />
              <span className="text-[#F5B800]">CCTV Solutions</span><br />
              for a Safer World
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
              Protect what matters with smart security solutions for your home and business. Serving Kollam &amp; all Kerala districts since 1999.
            </p>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              
              {/* Primary Yellow CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFC400] to-[#F5B800] hover:from-[#F5B800] hover:to-[#E0A800] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <span>Get a Quote</span>
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm transform group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>

              {/* Watch Video Secondary Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md text-slate-900 font-bold text-xs sm:text-sm transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span>Watch Video</span>
              </button>

            </div>

            {/* Property Sector Badges Row */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/80">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
                
                {/* Sector 1: Homes */}
                <div className="flex flex-col items-center text-center space-y-1.5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Homes</span>
                </div>

                {/* Sector 2: Businesses */}
                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-slate-200/80 pl-2 sm:pl-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Businesses</span>
                </div>

                {/* Sector 3: Shops */}
                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-slate-200/80 pl-2 sm:pl-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Shops</span>
                </div>

                {/* Sector 4: Industries */}
                <div className="flex flex-col items-center text-center space-y-1.5 border-l border-slate-200/80 pl-2 sm:pl-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Industries</span>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column (Floating Badges & Interactive Camera Visual Elements) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block h-[420px]"
          >
        

            

          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Ticker & Statistics Bar */}
      <div className="relative z-20 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/80 py-4 sm:py-5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            

          </div>
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

