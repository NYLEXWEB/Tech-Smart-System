"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BottomCta from "@/components/BottomCta";

export default function ServicesContent() {
  const services = [
    {
      number: "01",
      title: "CCTV Surveillance",
      description:
        "Comprehensive 24/7 video surveillance architecture designed for maximum visibility. Featuring color night vision, ultra-high-definition 4K resolution, AI-powered human/vehicle classification, smart perimeter tripwires, and vandal-proof dome and bullet cameras.",
      features: [
        "High-definition 1080p, 4MP, and 4K IP cameras",
        "Full-color low-light and infrared night vision up to 50m",
        "AI human detection & license plate recognition",
        "Weatherproof IP67 rated outdoor housings",
      ],
      image: "/images/services/cctv.jpg",
    },
    {
      number: "02",
      title: "Security Systems & Integration",
      description:
        "Integrated multi-layered defense solutions engineered specifically around customer site layout. We combine intrusion alarms, glass break sensors, motion detection beams, and automated sirens into a unified command dashboard.",
      features: [
        "Wired and wireless intrusion detection sensors",
        "Perimeter infrared beam barriers for estates",
        "Automated GSM/SMS & smartphone alarm alerts",
        "Centralized alarm panel integration",
      ],
      image: "/images/services/security-systems.jpg",
    },
    {
      number: "03",
      title: "DVR & NVR Storage",
      description:
        "Enterprise-grade network video recording (NVR) and digital video recording (DVR) stations. Designed with continuous RAID redundancy, expandable surveillance hard drives, and intelligent motion-triggered archiving for rapid footage playback.",
      features: [
        "4 to 64 channel NVR/DVR multi-camera stations",
        "H.265+ smart video compression saving 70% storage",
        "Surveillance-grade 24/7 continuous duty hard disks",
        "Synchronized multi-channel instant playback search",
      ],
      image: "/images/services/dvr-nvr.jpg",
    },
    {
      number: "04",
      title: "Home Automation",
      description:
        "Modern smart home automation controls enabling effortless management of lighting scenes, motorized security gates, air conditioning, home theaters, and appliances via sleek wall touch panels or mobile smartphone apps.",
      features: [
        "Smart lighting dimming and automated scheduling",
        "Motorized gate and garage door automation",
        "Voice assistant integration (Google Home & Alexa)",
        "Energy monitoring and remote appliance switching",
      ],
      image: "/images/services/home-automation.jpg",
    },
    {
      number: "05",
      title: "Access Control",
      description:
        "Strict restricted entry management systems for offices, commercial warehouses, institutions, and premium residences. Equipped with biometric fingerprint readers, electronic smart door locks, keycard RFID gateways, and visitor intercoms.",
      features: [
        "Biometric fingerprint, PIN, and RFID keycard entry",
        "Smart digital door locks with auto-locking latches",
        "Audio/video smart doorbell and intercom systems",
        "Time-restricted guest and employee access logs",
      ],
      image: "/images/services/access-control.jpg",
    },
    {
      number: "06",
      title: "Biometric Systems",
      description:
        "High-accuracy biometric time-attendance and identity verification terminals. Built for transparent workforce management, shift scheduling, payroll export integration, and high-security access verification.",
      features: [
        "Touchless AI facial recognition matching in <0.2s",
        "Optical fingerprint and RFID card verification",
        "Cloud-based attendance reporting & payroll sync",
        "Battery backup support for uninterrupted logging",
      ],
      image: "/images/services/biometrics.jpg",
    },
    {
      number: "07",
      title: "Remote Monitoring",
      description:
        "Seamless live camera feed streaming and instant security alerts directly on your iOS and Android smartphones from anywhere in the world. Features two-way audio talk, real-time push notifications, and fast cloud playback.",
      features: [
        "Encrypted live HD video stream on iOS and Android",
        "Real-time instant push notification on motion events",
        "Two-way audio communication through camera speakers",
        "Multi-user and family permission sharing",
      ],
      image: "/images/services/remote-monitoring.jpg",
    },
    {
      number: "08",
      title: "Installation & Service Maintenance",
      description:
        "Professional structured cabling, camera mounting, network routing, firmware updates, and comprehensive Annual Maintenance Contracts (AMC) executed by our experienced engineering technicians across all Kerala districts.",
      features: [
        "Concealed wiring and neat structured conduit cabling",
        "On-site site inspection and angle optimization",
        "Annual Maintenance Contracts (AMC) & rapid repairs",
        "Fast on-site technical support across Kerala",
      ],
      image: "/images/services/installation.jpg",
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
            <span>Engineering Capabilities</span>
          </div>

          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-[-0.028em] leading-[1.18] mb-4">
            Security & Automation Services
          </h1>

          <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-[1.65]">
            Engineered for reliability, long-term durability, and seamless everyday control across residences, businesses, and institutions.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-slate-200/80">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-10 sm:py-16 first:pt-0 last:pb-0"
              >
                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-4 text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F59E0B]/20 text-[#111827] font-bold text-xs">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28]">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#4B5563] leading-[1.65] font-normal">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="pt-2 space-y-2">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile-Only Image Displayed Between Features & Buttons */}
                  <div className="block lg:hidden w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm my-3">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  <div className="pt-3 flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111827] hover:bg-slate-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        <span>Request Free Quote</span>
                        <span>→</span>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                      <a
                        href={`https://wa.me/919048171666?text=${encodeURIComponent(
                          `Hello TechSmart Systems, I would like to inquire about your ${service.title} service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
                        </svg>
                        <span>WhatsApp Chat</span>
                      </a>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Image */}
                <div
                  className={`hidden lg:block lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm group">
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
      </section>

      {/* Bottom CTA */}
      <BottomCta />
    </div>
  );
}
