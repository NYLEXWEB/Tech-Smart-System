"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "CCTV Surveillance",
      description: "HD, IP, AI & smart camera systems",
      image: "/images/services/cctv.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Security Systems & Integration",
      description: "Surveillance and integrated security solutions",
      image: "/images/services/security-systems.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "DVR & NVR Storage",
      description: "Recording, storage and remote access",
      image: "/images/services/dvr-nvr.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Home Automation",
      description: "Smart home and remote-control solutions",
      image: "/images/services/home-automation.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Access Control",
      description: "Door access and security management",
      image: "/images/services/access-control.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Biometric Systems",
      description: "Attendance and access solutions",
      image: "/images/services/biometrics.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.96 7.96 0 001.378 4.5" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "Remote Monitoring",
      description: "Mobile viewing and remote surveillance",
      image: "/images/services/remote-monitoring.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "Installation & Service",
      description: "Installation, maintenance and technical support",
      image: "/images/services/installation.jpg",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-t border-slate-200/70 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="eyebrow-badge mb-3">
            <span className="eyebrow-bullet" />
            <span>What We Offer</span>
          </div>

          <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold text-[#111827] tracking-[-0.02em] leading-[1.28] uppercase">
            OUR <span className="text-[#F59E0B] relative inline-block">SERVICES<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" /></span>
          </h2>
        </motion.div>

        {/* Services Cards List - Generous on Desktop with Short Descriptions */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full p-5 sm:p-7 lg:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              >
                {/* Content Block */}
                <div
                  className={`lg:col-span-6 space-y-3 sm:space-y-3.5 ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F59E0B]/20 text-[#111827] font-bold text-xs">
                      {service.number}
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description (Visible on mobile & desktop) */}
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Mobile-Only Image Displayed Between Title & Buttons */}
                  <div className="block lg:hidden w-full aspect-[16/9] max-h-[190px] rounded-xl overflow-hidden bg-slate-100 relative shadow-xs my-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] hover:bg-slate-800 active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all shadow-sm"
                      >
                        <span>Get Free Quote</span>
                        <span>→</span>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <a
                        href={`https://wa.me/919048171666?text=${encodeURIComponent(
                          `Hello TechSmart Systems, I would like to inquire about your ${service.title} service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold transition-all shadow-sm"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop-Only Image Block */}
                <div
                  className={`hidden lg:block lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="relative aspect-[16/10] h-[210px] lg:h-[230px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-xs group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#111827] hover:text-[#F59E0B] transition-colors group"
          >
            <span>Explore All 8 Security Solutions in Detail</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
