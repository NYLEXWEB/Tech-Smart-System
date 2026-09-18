"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section
      id="about"
      className="relative py-10 sm:py-14 bg-[#FDFDFD] text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column (Approx 45-50% width) - Matching Reference Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow Label with Yellow Dash */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#F5B800] rounded-full" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F5B800] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Headline with Brand Yellow Highlight */}
            <h2 className="font-dmsans font-medium text-4xl sm:text-6xl lg:text-7xl text-slate-950 tracking-tight leading-[1.06]">
              Building<br />
              A <span className="text-[#F5B800]">Smarter</span><br />
              Tomorrow
            </h2>

            {/* Narrative Paragraph */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
              <p>
                We provide reliable technology solutions that make homes and businesses safer, smarter and more connected. Serving customers since <strong className="text-slate-950 font-bold">1999</strong>, TechSmart Systems, based in Kollam, Kerala, is a professional provider of CCTV surveillance, security systems and home automation solutions.
              </p>
              
              {showFullStory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 pt-2 text-slate-700 font-normal border-t border-slate-100"
                >
                  <p>
                    With over <strong className="text-slate-950 font-semibold">25 years of hands-on industry experience</strong>, our engineering focus is on precision products, professional installation, custom security architecture, and dependable long-term after-sales support across all Kerala districts.
                  </p>
                </motion.div>
              )}
            </div>

            {/* CTA Button & Handwritten Annotation Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              {/* Primary Yellow CTA Pill Button with Black Arrow Circle */}
              <div className="relative">
                <button
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="inline-flex items-center justify-between gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFC400] to-[#F5B800] hover:from-[#F5B800] hover:to-[#E0A800] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <span>{showFullStory ? "Show Less" : "Know More"}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm transform group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </button>
              </div>

              {/* Handwritten Annotation below CTA */}
            

            </div>
          </motion.div>

          {/* Right Column (Approx 50-55% width) - Using Transparent PNG Composition from public/about/ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative pt-6 lg:pt-0"
          >


            

            {/* Main Outer Container */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-2 sm:p-4">
              
              {/* Clean Transparent PNG Image (No extra background colors or code clip-paths!) */}
              <div className="relative z-10 w-full aspect-[4/4.8] group">
                <Image
                  src="/about/about-composition.png"
                  alt="TechSmart Systems Security Engineer Installing CCTV Camera"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
              </div>

              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
