"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSectors() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What sectors and property types do you serve across Kerala?",
      answer:
        "We specialize in sales, configuration, and installation across Homes & Luxury Villas, Retail Shops, Corporate Offices, Educational Institutions, Hospitals, Warehouses, Commercial Centers, and Industrial Plants throughout Kollam and all Kerala districts.",
    },
    {
      question: "What security and surveillance systems do you provide?",
      answer:
        "Our comprehensive lineup includes 4K High-Definition CCTV Surveillance (IP, analog, & AI motion detection cameras), Centralized DVR & NVR Storage, Smart Home Automation, Electronic Smart Door Locks, RFID Access Control, Biometric Attendance, and Global Mobile Monitoring.",
    },
    {
      question: "How can I request an on-site inspection and free quote?",
      answer:
        "You can reach our engineering office in Kollam directly by calling 0474 276 6666 or +91 9048 171 666, chatting on WhatsApp, or submitting your requirements through our instant online quote request form.",
    },
    {
      question: "What after-sales warranty and maintenance support is provided?",
      answer:
        "With 25+ years of continuous service since 1999, we provide end-to-end warranty support, annual maintenance contracts (AMC), routine firmware checkups, cable inspections, and rapid on-site technician dispatch for urgent support requests.",
    },
    {
      question: "Can I monitor my CCTV cameras and automation remotely on my phone?",
      answer:
        "Yes, all modern CCTV cameras and smart automation modules installed by TechSmart Systems come with secure, encrypted iOS and Android mobile app integration for real-time live streaming, motion alerts, and two-way audio from anywhere in the world.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 bg-[#FBFBFA] border-t border-slate-200/70 w-full max-w-full overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-bold text-[#111827] tracking-[-0.025em] leading-[1.2] uppercase">
            Frequently Asked{" "}
            <span className="text-[#F59E0B] relative inline-block">
              Questions
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" />
            </span>
          </h2>
        </motion.div>

        {/* Clean Border-Divider Modern Accordion (No Card Boxes) */}
        <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="py-5 sm:py-6"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold tracking-[-0.015em] leading-snug transition-colors ${
                      isOpen ? "text-[#111827]" : "text-[#1F2937] group-hover:text-[#F59E0B]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-amber-100 text-[#B45309]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-2 text-sm sm:text-base text-[#4B5563] leading-[1.7] font-normal pr-8 sm:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
