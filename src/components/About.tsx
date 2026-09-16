"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-slate-50/70 text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            <div className="eyebrow-badge mb-3">
              <span className="eyebrow-bullet" />
              <span>Who We Are</span>
            </div>

            {/* Heading 2 */}
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold text-[#111827] tracking-[-0.02em] leading-[1.28] mb-3 uppercase">
              About <span className="text-[#F59E0B] relative inline-block">TechSmart Systems<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" /></span>
            </h2>

            {/* Narrative Cards */}
            <div className="space-y-4 text-base font-normal text-[#4B5563] leading-[1.65]">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
              >
                <p>
                  Serving customers since <strong className="text-[#111827] font-semibold">1999</strong>, TechSmart Systems, based in Kollam, Kerala, is a professional provider of CCTV surveillance, security systems, and home automation solutions.
                </p>
                <p>
                  We specialize in sales, installation, configuration, maintenance, and service for homes, shops, offices, commercial buildings, and institutions across Kerala.
                </p>
              </motion.div>

              <p className="px-1 text-[#4B5563]">
                With more than <strong className="text-[#111827] font-semibold">25 years of hands-on industry experience</strong>, our focus is on reliable products, precision installation, practical security solutions, and dependable after-sales support.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#111827] hover:text-[#F59E0B] transition-colors group"
              >
                <span>Read Full Company Story & Milestones</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hardware Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 pt-4 lg:pt-0"
          >
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border border-slate-200 shadow-sm"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 group">
                <Image
                  src="/images/about-security.jpg"
                  alt="TechSmart Systems Next-Gen Security Hardware and Control Systems"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  quality={95}
                />
              </div>

              <div className="p-3 sm:p-4 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#111827]">
                  Precision Hardware & Security Panels
                </div>
                <div className="text-xs text-[#6B7280] mt-1 leading-normal">
                  Professional grade CCTV, access control, and automation integration.
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
