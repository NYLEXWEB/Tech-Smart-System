"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] h-[100dvh] flex items-center overflow-hidden bg-slate-950 w-full max-w-full">
      {/* Background Image: Mobile Portrait (9:16) */}
      <div className="absolute inset-0 z-0 sm:hidden w-full h-full">
        <Image
          src="/images/hero-mobile.jpg"
          alt="TechSmart Systems Outdoor CCTV Security Camera at Sunset"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Background Image: Desktop Landscape (16:9) */}
      <div className="absolute inset-0 z-0 hidden sm:block w-full h-full">
        <Image
          src="/images/hero-desktop.jpg"
          alt="TechSmart Systems Outdoor CCTV Security Camera at Sunset"
          fill
          priority
          className="object-cover object-right lg:object-center"
          quality={100}
        />
        {/* Subtle highlight to keep black typography crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-20 sm:pt-28 pb-12 sm:pb-16 flex items-center">
        {/* Top/Middle Left: Headline, Tagline, Paragraph & Buttons */}
        <div className="max-w-[62%] sm:max-w-xl space-y-3.5 sm:space-y-6 text-left">
          {/* Tagline / Subtitle Badge */}
          <div className="flex items-center space-x-2">
            <span className="w-5 sm:w-8 h-[2.5px] bg-brand-yellow flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-black">
              CCTV • SECURITY • AUTOMATION
            </span>
          </div>

          {/* Main Headline in Solid Black */}
          <h1 className="text-[32px] sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.05]">
            Think Smart.<br />
            <span className="text-black">Stay Secure.</span>
          </h1>

          {/* Supporting Text in Solid Black */}
          <p className="text-[12px] sm:text-base md:text-lg font-semibold text-black max-w-[240px] sm:max-w-xl leading-snug sm:leading-relaxed">
            Trusted CCTV and security solutions for homes, businesses and institutions in Kerala.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 w-full">
            {/* Solid Yellow Button with Arrow */}
            <a
              href="#contact"
              className="w-[185px] sm:w-auto inline-flex items-center justify-center px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black uppercase tracking-wider text-black bg-brand-yellow hover:bg-brand-yellow-hover active:scale-[0.98] rounded-full shadow-md transition-all duration-200 gap-1.5 text-center"
            >
              <span>GET A QUOTE</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Outlined Button */}
            <a
              href="#services"
              className="w-[185px] sm:w-auto inline-flex items-center justify-center px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black uppercase tracking-wider text-black bg-white/70 hover:bg-white/90 active:scale-[0.98] border-2 border-black rounded-full backdrop-blur-md transition-all duration-200 text-center"
            >
              OUR SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
