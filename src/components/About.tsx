"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-white text-slate-900 border-t border-b border-slate-200/80 w-full max-w-full overflow-hidden"
    >
      {/* Soft Ambient Warm Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Text Information & Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            

            {/* Premium Heading */}
            <div className="space-y-2.5">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600">
                  TechSmart Systems
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-brand-yellow rounded-full shadow-sm" />
            </div>

            {/* Minimal & Clean Paragraph Content */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
              <p className="bg-slate-50/90 p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100">
                Serving customers since <strong className="text-slate-950 font-bold">1999</strong>, TechSmart Systems, based in Kollam, Kerala, is a professional provider of CCTV surveillance, security systems, and home automation solutions. We specialize in sales, installation, configuration, maintenance, and service for homes, shops, offices, commercial buildings, and institutions.
              </p>
              <p className="px-2 text-slate-700">
                With more than <strong className="text-slate-950 font-bold">25 years of hands-on industry experience</strong>, our focus is on reliable products, professional installation, practical security solutions, and dependable after-sales support.
              </p>
            </div>

           

          </div>

          {/* Right Column: Architectural Security Display Card */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200 bg-slate-950 p-2 hover:border-brand-yellow/60 transition-all duration-500">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-security.jpg"
                  alt="TechSmart Systems Next-Gen Security Control Panel and AI CCTV Hardware"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              </div>

              {/* Minimalist Glass Bottom Footer Label */}
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
