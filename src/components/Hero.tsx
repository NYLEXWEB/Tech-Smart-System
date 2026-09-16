"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white w-full max-w-full pt-28 sm:pt-36 pb-10 sm:pb-14 text-slate-950">
      {/* Background Image: Mobile Portrait (9:16) */}
      <div className="absolute inset-0 z-0 sm:hidden w-full h-full">
        <Image
          src="/images/hero-mobile.png"
          alt="TechSmart Systems Next-Gen Security Camera and AI Automation Hub"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Background Image: Desktop Landscape (16:9) */}
      <div className="absolute inset-0 z-0 hidden sm:block w-full h-full">
        <Image
          src="/images/hero-desktop.png"
          alt="TechSmart Systems Premium AI CCTV Surveillance Hardware"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Main Hero Content Area - Clean Single Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-12">
        <div className="max-w-2xl sm:max-w-3xl space-y-6 sm:space-y-8 text-left">

          {/* Main Headline - Clean Dark Charcoal & Rich Gold without text shadows */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Think Smart.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600">
              Stay Secure.
            </span>
          </h1>

          {/* Supporting Text - Crisp Readable Dark Slate */}
          <p className="text-base sm:text-xl font-semibold text-slate-700 max-w-2xl leading-relaxed">
            Next-generation CCTV surveillance, AI motion detection, and smart home automation engineered for residences, commercial spaces, and enterprises across Kerala.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            {/* Primary Yellow Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover active:scale-[0.98] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2.5 text-center group"
            >
              <span>GET A FREE QUOTE</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Secondary Dark Slate Button */}
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-full transition-all duration-200 text-center shadow-md"
            >
              EXPLORE SERVICES
            </a>

            {/* Direct Call Link */}
          
          </div>

        </div>
      </div>

      {/* Bottom Horizontal Tech Capability Bar - Crisp Dark Typography */}
      
    </section>
  );
}
