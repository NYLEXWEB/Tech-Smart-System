"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex items-start sm:items-center overflow-hidden bg-white w-full max-w-full pt-24 sm:pt-32 pb-12 sm:pb-20 text-[#111827]">
      {/* Mobile View: Vertical Hero Background (Full Screen & Fixed) */}
      <div
        className="block md:hidden absolute inset-0 z-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-mobile.png')",
        }}
        aria-hidden="true"
      />

      {/* Desktop View: Landscape Hero Camera Background (Full Screen & Fixed) */}
      <div
        className="hidden md:block absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/images/hero-camera.png')",
        }}
        aria-hidden="true"
      />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[65%] xs:max-w-[68%] sm:max-w-[72%] md:max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Headline (H1) - Slim & Elegant Apple Tech Aesthetic */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.35rem] xs:text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#111827] tracking-[-0.02em] leading-[1.22] sm:leading-[1.18] mb-3.5 sm:mb-4"
          >
            Think Smart.<br />
            <span className="text-[#4B5563] font-normal">
              Stay Secure.
            </span>
          </motion.h1>

          {/* Supporting Body Text */}
          <motion.p
            variants={itemVariants}
            className="text-xs xs:text-sm sm:text-base text-[#4B5563] font-normal leading-[1.55] sm:leading-[1.65] mb-5 sm:mb-7"
          >
            Next-generation CCTV surveillance, AI motion detection, and smart home automation engineered for residences, commercial spaces, and enterprises across Kerala since 1999.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-stretch sm:items-start md:flex-row md:items-center gap-2.5 sm:gap-3.5 max-w-[210px] xs:max-w-[230px] sm:max-w-[260px] md:max-w-none"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 sm:px-7 sm:py-3.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full shadow-sm transition-all duration-200 gap-2 text-center group"
              >
                <span>Get a Free Quote</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full px-5 py-3 sm:px-7 sm:py-3.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] bg-white/95 hover:bg-slate-50 border border-slate-200/90 rounded-full transition-all duration-200 text-center shadow-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
