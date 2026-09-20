"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BottomCta from "@/components/BottomCta";

export default function AboutContent() {
  const milestones = [
    {
      year: "1999",
      title: "Company Founded in Kollam",
      description:
        "TechSmart Systems established its foundation in Asramam, Kollam, Kerala, delivering high-reliability security systems and analog surveillance solutions.",
    },
    {
      year: "2002",
      title: "Kollam District Police CCTV Project",
      description:
        "Executed the milestone city surveillance project for Kollam District Police across Kollam Railway Station, KSRTC Bus Terminal, and Private Bus Stands.",
    },
    {
      year: "2010",
      title: "Enterprise & Digital NVR Systems",
      description:
        "Expanded into high-capacity IP cameras, digital NVR systems, and multi-tier access control for corporate buildings and industrial plants.",
    },
    {
      year: "2018",
      title: "AI Detection & Smart Home Automation",
      description:
        "Integrated AI facial recognition, perimeter smart alerts, and mobile app-controlled home automation across residential and commercial spaces.",
    },
    {
      year: "Present",
      title: "Next-Gen Intelligent Security Hubs",
      description:
        "Delivering cutting-edge 4K cloud surveillance, smart perimeter security, and complete automation integrations for 700+ clients across Kerala.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="eyebrow-badge mb-3">
            <span className="eyebrow-bullet" />
            <span>Since 1999 • Kollam, Kerala</span>
          </div>

          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-[-0.028em] leading-[1.18] mb-4 uppercase">
            About <span className="text-[#F59E0B] relative inline-block">TechSmart Systems<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" /></span>
          </h1>

          <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-[1.65]">
            More than 25 years of engineering reliable CCTV surveillance, integrated electronic security, and smart home automation throughout Kerala.
          </p>
        </motion.div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="eyebrow-badge">
                <span className="eyebrow-bullet" />
                <span>Our Heritage &amp; Mission</span>
              </div>

              <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28] mb-2">
                Engineering Practical, Reliable Security Since 1999
              </h2>

              <div className="space-y-4 text-base font-normal text-[#4B5563] leading-[1.65]">
                <p>
                  Founded in <strong className="text-[#111827] font-semibold">1999</strong> and headquartered in Asramam, Kollam, TechSmart Systems has been a trusted pioneer in electronic security systems across Kerala for over two and a half decades.
                </p>
                <p>
                  We specialize in complete lifecycle solutions: from initial site risk assessments and custom system architecture to professional cabling, hardware installation, network configuration, and long-term preventive maintenance.
                </p>
                <p>
                  Whether securing private residences, high-traffic commercial retail spaces, manufacturing hubs, or government establishments, our engineering philosophy remains uncompromising: <strong className="text-[#111827] font-semibold">dependable hardware, clean craftsmanship, and responsive after-sales support</strong>.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { value: "1999", label: "Established" },
                  { value: "25+", label: "Years Experience" },
                  { value: "700+", label: "Satisfied Clients" },
                ].map((stat, sidx) => (
                  <motion.div
                    key={sidx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + sidx * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center"
                  >
                    <div className="text-2xl font-bold text-[#111827] tracking-tight">{stat.value}</div>
                    <div className="text-[11px] text-[#6B7280] font-semibold uppercase tracking-[0.08em] mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Hardware Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="p-3 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden group">
                <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/about/cctv-security-surveillance-engineering-kerala.jpg"
                    alt="TechSmart Systems Hardware Engineering and CCTV Surveillance Standards Kollam Kerala"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    quality={95}
                  />
                </div>
                <div className="p-3 text-left">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#111827]">
                    Enterprise-Grade Security Standards
                  </div>
                  <div className="text-xs text-[#6B7280] mt-1 leading-normal">
                    High-definition cameras, redundant DVR/NVR network hubs, and biometric controllers.
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="eyebrow-badge mb-3">
              <span className="eyebrow-bullet" />
              <span>Timeline of Excellence</span>
            </div>
            <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28]">
              Our Journey Over 25 Years
            </h2>
            <p className="text-base text-[#4B5563] mt-2">
              Key milestones shaping our security engineering legacy in Kerala.
            </p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                <div className="px-3.5 py-1.5 rounded-lg bg-[#F59E0B]/20 text-[#111827] font-bold text-sm flex-shrink-0">
                  {item.year}
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-lg font-semibold text-[#111827] tracking-[-0.015em]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4B5563] leading-[1.65] font-normal">
                    {item.description}
                  </p>
                </div>
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
