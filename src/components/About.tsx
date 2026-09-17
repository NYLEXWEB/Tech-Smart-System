"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#FDFDFD] text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none"
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
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-slate-950 tracking-tight leading-[1.06]">
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
              <div className="relative text-slate-600 pointer-events-none">
                <span className="font-script text-lg sm:text-xl text-slate-700 block rotate-[-4deg] leading-none">
                  Technology for a Better Tomorrow
                </span>
                <svg
                  className="w-12 h-6 text-amber-500 transform -rotate-12 -mt-1"
                  viewBox="0 0 50 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M 5 25 Q 25 5 45 15" />
                  <path d="M 40 10 L 45 15 L 38 20" />
                </svg>
              </div>

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

              {/* Clean Solid White Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 left-2 sm:left-4 z-30 bg-white rounded-[26px] p-5 sm:p-6 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.14)] space-y-3 min-w-[210px] sm:min-w-[230px]"
              >
                {/* Yellow Icon Box */}
                <div className="w-11 h-11 rounded-2xl bg-[#F5B800] text-slate-950 flex items-center justify-center font-black shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">Trusted by</div>
                  <div className="text-lg font-black text-slate-950 leading-tight">Businesses</div>
                </div>

                {/* Real User Photo Avatar Circles */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-xs overflow-hidden relative">
                    <Image src="/images/avatar-1.jpg" alt="Client Avatar 1" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-xs overflow-hidden relative">
                    <Image src="/images/avatar-2.jpg" alt="Client Avatar 2" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-xs overflow-hidden relative">
                    <Image src="/images/avatar-3.jpg" alt="Client Avatar 3" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5B800] text-slate-950 font-black text-xs flex items-center justify-center border-2 border-white shadow-xs cursor-pointer hover:scale-105 transition-transform">
                    +
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
