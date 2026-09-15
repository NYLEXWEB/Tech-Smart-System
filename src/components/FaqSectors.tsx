"use client";

import React, { useState } from "react";

export default function FaqSectors() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "1. What sectors and property types do you serve?",
      answer:
        "We specialize in sales, configuration, and installation across Homes & Apartments, Shops, Offices, Schools, Hospitals, Warehouses, Commercial Buildings, Industries, and Institutions throughout Kerala.",
    },
    {
      question: "2. What security and surveillance systems do you provide?",
      answer:
        "Our core solutions include CCTV Surveillance (HD, IP, AI & smart cameras), Integrated Security Systems, DVR & NVR Storage, Home Automation, Access Control & Door Locks, Biometric Attendance, and Remote Mobile Monitoring.",
    },
    {
      question: "3. How can I request an on-site inspection and quote?",
      answer:
        "You can reach our team in Kollam directly by calling 0474 276 6666 or +91 9048 171 666, emailing techsmartsystemskollam@gmail.com, or submitting your requirements through our online quote form.",
    },
    {
      question: "4. What after-sales and maintenance support is provided?",
      answer:
        "With 25+ years of hands-on experience, we offer complete end-to-end support including system commissioning, routine preventive maintenance, firmware updates, troubleshooting, and rapid on-site technical assistance.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start max-w-6xl mx-auto w-full">
          {/* Left Column: Heading & Avatar Cluster */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
              Frequently asked questions?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Do you have a <br className="hidden sm:inline" />
              question? Find <br className="hidden sm:inline" />
              answer here
            </h2>

            <div className="pt-2 sm:pt-4 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                <div className="inline-block h-8 w-8 rounded-full bg-slate-950 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                  TS
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-slate-900 text-brand-yellow font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                  KL
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                  +5
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-mono">700+ Satisfied Clients</div>
                <div className="text-[10px] text-slate-500">Serving across Kerala since 1999</div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Pills matching reference image */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#F0F2F5] transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-base sm:text-sm font-bold text-slate-500 flex-shrink-0 w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 leading-relaxed pt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
