"use client";

import React from "react";
import { motion } from "framer-motion";
import BottomCta from "@/components/BottomCta";

export default function ClientsContent() {
  const testimonials = [
    {
      client: "Kollam District Police",
      project: "City Surveillance Milestone (2002)",
      badge: "KP",
      quote:
        "In 2002, TechSmart Systems successfully completed a comprehensive CCTV surveillance deployment for the Kollam District Police, covering key city transit hubs including the Kollam Railway Station, KSRTC Bus Terminal, and Private Bus Stands with dependable recording and monitoring.",
    },
    {
      client: "Diya Group",
      project: "Commercial Security & NVR Integration",
      badge: "DG",
      quote:
        "TechSmart Systems engineered our complete commercial facility surveillance with high-definition IP cameras, redundant NVR storage, and biometric staff attendance. Their installation was impeccably clean and their technical support has been outstanding.",
    },
    {
      client: "MAKS Automation",
      project: "Industrial CCTV & Multi-Zone Access Control",
      badge: "MA",
      quote:
        "We partnered with TechSmart Systems for industrial surveillance and smart access control. Their deep technical knowledge, practical security design, and prompt on-site maintenance make them our top choice for electronic security.",
    },
    {
      client: "Sun Builders",
      project: "Residential Villa & Apartment Security Hubs",
      badge: "SB",
      quote:
        "TechSmart Systems has implemented CCTV systems and smart home automation controls across several of our residential developments in Kerala. Homeowners appreciate the ease of mobile app controls and high video clarity.",
    },
  ];

  const sectors = [
    {
      name: "Residential Villas & Apartments",
      desc: "Smart IP cameras, digital door locks, video doorbells, and mobile lighting automation.",
    },
    {
      name: "Commercial Retail & Showrooms",
      desc: "Wide-angle dome surveillance, cash counter monitoring, and anti-theft alarms.",
    },
    {
      name: "Corporate Offices & IT Hubs",
      desc: "Biometric access control, multi-floor network cabling, and server room surveillance.",
    },
    {
      name: "Industrial & Manufacturing Units",
      desc: "Perimeter beam detection, high-temperature housings, and long-range bullet cameras.",
    },
    {
      name: "Educational Institutions & Colleges",
      desc: "Campus-wide networked camera arrays, central security console, and visitor management.",
    },
    {
      name: "Hospitals & Healthcare Facilities",
      desc: "24/7 continuous duty monitoring, emergency passage coverage, and restricted ward access.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="eyebrow-badge mb-3">
            <span className="eyebrow-bullet" />
            <span>Track Record & Trust</span>
          </div>

          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-[-0.028em] leading-[1.18] mb-4">
            Clients & Project Experience
          </h1>

          <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-[1.65]">
            Trusted by government institutions, commercial enterprises, builders, and over 700 property owners across Kerala since 1999.
          </p>
        </motion.div>
      </section>

      {/* Featured Landmark Project */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF5] border border-amber-200 shadow-sm text-left space-y-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="eyebrow-badge bg-white border-amber-200">
                <span className="eyebrow-bullet" />
                <span>Historic Government Milestone (2002)</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                Kollam, Kerala
              </span>
            </div>

            <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28]">
              Kollam District Police City Surveillance Project
            </h2>

            <p className="text-base font-normal text-[#4B5563] leading-[1.65]">
              In 2002, TechSmart Systems was entrusted with the crucial installation of citywide CCTV surveillance for the <strong className="text-[#111827] font-semibold">Kollam District Police</strong>. The installation provided round-the-clock visual security across key public transport arteries, including <strong className="text-[#111827] font-semibold">Kollam Railway Station</strong>, <strong className="text-[#111827] font-semibold">KSRTC Bus Stand</strong>, and <strong className="text-[#111827] font-semibold">Private Bus Stands</strong> across Kollam city.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#111827]">
              <span>✓ Public Safety Infrastructure</span>
              <span>•</span>
              <span>✓ Multi-Location Centralized Monitoring</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="eyebrow-badge mb-3">
              <span className="eyebrow-bullet" />
              <span>Client Voices</span>
            </div>
            <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28]">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between text-left"
              >
                <div>
                  <div className="text-2xl text-slate-400 font-bold leading-none mb-3">
                    “
                  </div>
                  <p className="text-sm sm:text-base text-[#4B5563] leading-[1.65] font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-3 border-t border-slate-100 mt-6">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-[#111827] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {item.badge}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{item.client}</div>
                    <div className="text-xs text-[#6B7280]">{item.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="eyebrow-badge mb-3">
              <span className="eyebrow-bullet" />
              <span>Industry Coverage</span>
            </div>
            <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28]">
              Sectors We Specialize In
            </h2>
            <p className="text-base text-[#4B5563] mt-2">
              Custom-tailored security architectures engineered for specific industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, sidx) => (
              <motion.div
                key={sidx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: sidx * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-sm text-left space-y-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <h3 className="text-base font-semibold text-[#111827] tracking-[-0.01em]">
                  {sector.name}
                </h3>
                <p className="text-sm text-[#4B5563] leading-[1.65] font-normal">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCta />
    </div>
  );
}
