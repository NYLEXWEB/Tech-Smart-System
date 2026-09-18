"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSectors() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqs = [
    {
      id: 1,
      question: "What security and surveillance systems do you provide?",
      answer:
        "Our comprehensive lineup includes 4K High-Definition CCTV Surveillance (IP, analog, & AI motion detection cameras), Centralized DVR & NVR Storage, Smart Home Automation, Electronic Smart Door Locks, RFID Access Control, Biometric Attendance, and Global Mobile Monitoring.",
      highlight: "4K HD CCTV, IP Cameras, AI Motion Alerts & NVR Systems",
    },
    {
      id: 2,
      question: "Can I monitor my CCTV cameras and automation remotely on my mobile phone?",
      answer:
        "Yes, all modern CCTV cameras and smart automation modules installed by TechSmart Systems come with secure, encrypted iOS and Android mobile app integration for real-time live streaming, motion alerts, multi-screen views, and two-way audio from anywhere in the world.",
      highlight: "Encrypted iOS & Android App for 24/7 Global Remote Access",
    },
    {
      id: 3,
      question: "What sectors and property types do you serve across Kerala?",
      answer:
        "We specialize in sales, configuration, and installation across Homes & Luxury Villas, Retail Shops, Corporate Offices, Educational Institutions, Hospitals, Warehouses, Commercial Centers, and Industrial Plants throughout Kollam and all Kerala districts.",
      highlight: "Residential, Commercial, Industrial & Government Facilities",
    },
    {
      id: 4,
      question: "How can I request an on-site inspection and free quote?",
      answer:
        "You can reach our engineering office in Kollam directly by calling 0474 276 6666 or +91 9048 171 666, chatting on WhatsApp, or submitting your requirements through our instant online quote request form.",
      highlight: "Free On-Site Site Survey & Customized Cost Estimation",
    },
    {
      id: 5,
      question: "What after-sales warranty and maintenance support is provided?",
      answer:
        "With 25+ years of continuous service since 1999, we provide end-to-end manufacturer warranty support, annual maintenance contracts (AMC), routine firmware checkups, cable inspections, and rapid on-site technician dispatch for urgent support requests.",
      highlight: "25+ Years Legacy, AMC Contracts & Fast On-Site Technician Dispatch",
    },
    {
      id: 6,
      question: "Do you offer custom Smart Door Locks & Access Control for homes and offices?",
      answer:
        "Yes! We provide biometric fingerprint locks, RFID smart card entry, digital passcode handles, and video door phones integrated with electric strike gates for both residential villas and high-security corporate offices.",
      highlight: "Biometric Fingerprint Locks, RFID Cards & Video Door Phones",
    },
    {
      id: 7,
      question: "How much storage capacity is needed for CCTV recording?",
      answer:
        "Storage depends on the number of cameras, resolution (2MP, 4K), and recording mode (continuous vs motion-triggered). We configure surveillance-grade hard drives offering 15 to 60+ days of seamless video loop recording with automatic overwrite protection.",
      highlight: "Surveillance-Grade HDDs (15 to 60+ Days Video Backup)",
    },
    {
      id: 8,
      question: "Will the security system work during power failures or electricity cuts?",
      answer:
        "Yes, our CCTV installations and smart controllers can be integrated with dedicated UPS power backups or solar inverter systems, ensuring uninterrupted 24/7 security and recording even during Kerala power outages.",
      highlight: "Zero-Downtime UPS & Solar Power Inverter Integration",
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.highlight.toLowerCase().includes(query)
    );
  });

  return (
    <section
      id="faq"
      className="relative py-10 sm:py-16 bg-[#FAF9F5] text-[#111827] border-t border-slate-200/70 w-full max-w-full overflow-hidden select-none"
    >
      {/* Decorative Yellow Background Blur Orb */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#F5B800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {/* Eyebrow Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-1 bg-[#F5B800] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#F5B800] uppercase">
              GOT QUESTIONS?
            </span>
            <span className="w-8 h-1 bg-[#F5B800] rounded-full" />
          </div>

          <h2 className="font-dmsans font-medium text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08]">
            Frequently Asked{" "}
            <span className="text-[#F5B800] relative inline-block">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any security question..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-700 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion Cards List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-amber-300 shadow-[0_10px_30px_rgba(245,184,0,0.10)] border-l-4 border-l-[#F5B800]"
                      : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 flex-grow">
                      {/* Number Badge */}
                      <span
                        className={`text-xs font-mono font-medium px-2 py-0.5 rounded-md flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#F5B800] text-slate-950 font-semibold"
                            : "bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-800"
                        }`}
                      >
                        0{idx + 1}
                      </span>

                      {/* Question Text - Slim, clean & readable */}
                      <h3
                        className={`text-sm sm:text-base md:text-[17px] tracking-normal leading-snug transition-colors ${
                          isOpen
                            ? "text-slate-950 font-semibold"
                            : "text-slate-800 font-medium group-hover:text-[#D97706]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Slim Toggle Icon Circle */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen
                          ? "bg-[#F5B800] text-slate-950 rotate-180 shadow-xs"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#F5B800] group-hover:text-slate-950"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"}
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 space-y-3">
                          {/* Answer Text */}
                          <p className="text-sm text-slate-600 font-normal leading-relaxed pl-7 sm:pl-9">
                            {faq.answer}
                          </p>

                          {/* Technical Highlight Pill */}
                          <div className="pl-7 sm:pl-9 flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400">
                              KEY BENEFIT:
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/70 text-xs font-medium text-slate-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                              {faq.highlight}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            /* Empty Search Results State */
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200/80 p-6">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#F5B800] flex items-center justify-center mx-auto mb-2.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">No matching questions found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3">Try searching with different keywords like &quot;CCTV&quot;, &quot;Quote&quot;, or &quot;Warranty&quot;.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-full bg-[#F5B800] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Bottom "Still Have Questions?" Interactive Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-18 relative rounded-[28px] bg-slate-950 text-white p-7 sm:p-10 shadow-2xl overflow-hidden border border-slate-800"
        >
          {/* Yellow Corner Backdrop Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5B800]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono font-bold text-[#F5B800] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] animate-pulse" />
                <span>24/7 SUPPORT AVAILABLE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-white">
                Can&apos;t find the answer you&apos;re looking for?
              </h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Speak directly with our expert security engineers in Kollam for custom advice, product specifications, or instant quotes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20have%20a%20question%20about%20your%20security%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:04742766666"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F5B800] hover:bg-[#e0a800] text-slate-950 font-extrabold text-sm tracking-wide shadow-lg transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call 0474 276 6666</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

