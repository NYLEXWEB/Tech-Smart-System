"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Clients() {
  const cards = [
    {
      type: "highlight",
      stars: true,
      title: "700+ Clients",
      desc: "Serving homes, businesses, and government institutions with dependable surveillance and automation systems since 1999.",
      avatar: "TS",
      client: "TechSmart Systems",
      subtitle: "Established 1999 • Kollam",
      bg: "bg-[#FFFDF5] border-amber-200",
      avatarBg: "bg-[#111827] text-[#F59E0B]",
    },
    {
      type: "quote",
      stars: false,
      desc: "In 2002, TechSmart Systems undertook comprehensive CCTV surveillance work for the Kollam District Police, covering Kollam Railway Station, KSRTC and Private Bus Stands across the city.",
      boldHighlight: "Kollam District Police",
      avatar: "KP",
      client: "Kollam District Police",
      subtitle: "Public Security Milestone (2002)",
      bg: "bg-slate-50/70 border-slate-200/80",
      avatarBg: "bg-slate-200 text-[#111827]",
    },
    {
      type: "quote",
      stars: false,
      desc: "Trusted by Diya Group, MAKS Automation, and Sun Builders for commercial security, DVR/NVR network recording, biometric access, and routine maintenance.",
      boldHighlight: "Diya Group, MAKS Automation, and Sun Builders",
      avatar: "DG",
      client: "Diya Group & MAKS Automation",
      subtitle: "Commercial & Industrial Projects",
      bg: "bg-slate-50/70 border-slate-200/80",
      avatarBg: "bg-slate-200 text-[#111827]",
    },
  ];

  return (
    <section id="clients" className="py-10 sm:py-14 bg-white border-t border-slate-200/70 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <div className="eyebrow-badge mb-3">
            <span className="eyebrow-bullet" />
            <span>Track Record & Trust</span>
          </div>

          <h2 className="font-dmsans font-medium text-2xl sm:text-4xl text-[#111827] tracking-tight uppercase mb-2">
            Client <span className="text-[#F59E0B] relative inline-block">Experiences & Trust<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" /></span>
          </h2>
          <p className="text-base font-normal text-[#4B5563] leading-[1.65]">
            Trusted by institutions, commercial enterprises, and homeowners across Kerala.
          </p>
        </motion.div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-7 sm:p-8 rounded-2xl sm:rounded-3xl ${card.bg} border text-[#111827] flex flex-col justify-between shadow-sm`}
            >
              <div>
                {card.stars ? (
                  <>
                    <div className="flex items-center space-x-1 text-[#F59E0B] text-sm">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <div className="text-3xl font-bold text-[#111827] mt-4 tracking-[-0.02em]">
                      {card.title}
                    </div>
                    <p className="text-sm text-[#4B5563] mt-3 leading-[1.65] font-normal">
                      {card.desc}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-2xl text-slate-400 font-bold leading-none">
                      “
                    </div>
                    <p className="text-sm text-[#4B5563] mt-3 leading-[1.65] font-normal">
                      {idx === 1 ? (
                        <>
                          In 2002, TechSmart Systems undertook comprehensive CCTV surveillance work for the{" "}
                          <strong className="text-[#111827] font-semibold">Kollam District Police</strong>, covering Kollam Railway Station, KSRTC and Private Bus Stands across the city.
                        </>
                      ) : (
                        <>
                          Trusted by <strong className="text-[#111827] font-semibold">Diya Group</strong>,{" "}
                          <strong className="text-[#111827] font-semibold">MAKS Automation</strong>, and{" "}
                          <strong className="text-[#111827] font-semibold">Sun Builders</strong> for commercial security, DVR/NVR network recording, biometric access, and routine maintenance.
                        </>
                      )}
                    </p>
                  </>
                )}
              </div>

              <div className="pt-6 flex items-center gap-3 border-t border-slate-200/70 mt-6">
                <div className={`w-9 h-9 rounded-full ${card.avatarBg} font-bold text-xs flex items-center justify-center flex-shrink-0`}>
                  {card.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111827]">{card.client}</div>
                  <div className="text-[11px] text-[#6B7280]">{card.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#111827] hover:text-[#F59E0B] transition-colors group"
          >
            <span>View Full Client Portfolio & Case Studies</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
