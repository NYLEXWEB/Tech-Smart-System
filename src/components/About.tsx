"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-10 sm:py-14 bg-[#FDFDFD] text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column (Approx 45-50% width) */}
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
              
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                With over <strong className="text-slate-950 font-semibold">25 years of hands-on industry experience</strong>, our engineering focus is on precision products, professional installation, custom security architecture, and dependable long-term after-sales support across all Kerala districts.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-between gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFC400] to-[#F5B800] hover:from-[#F5B800] hover:to-[#E0A800] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <span>Know More About Us</span>
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm transform group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative pt-6 lg:pt-0"
          >
            {/* Main Outer Container */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-2 sm:p-4">
              <div className="relative z-10 w-full aspect-[4/4.8] group">
                <Image
                  src="/images/about/techsmart-systems-security-solutions-kollam.png"
                  alt="TechSmart Systems Security Engineer Installing CCTV Camera in Kollam Kerala"
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
