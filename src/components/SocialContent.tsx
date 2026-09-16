"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SocialContentProps {
  id?: string;
  className?: string;
  isStandalone?: boolean;
}

export default function SocialContent({
  id = "social",
  className = "",
  isStandalone = false,
}: SocialContentProps) {
  const cards = [
    {
      id: "instagram",
      name: "Instagram",
      desc: "See our latest work & stories",
      buttonText: "Follow Us",
      url: "https://instagram.com",
      btnClass: "bg-gradient-to-r from-[#FF6332] via-[#FF1E6A] to-[#A825B8] text-white shadow-md hover:brightness-105",
      glowColor: "rgba(255, 60, 110, 0.2)",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FF9800] via-[#FF1361] to-[#9C27B0] p-[2px] shadow-sm">
          <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FF6B00] via-[#FF1361] to-[#8823C4] text-white">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      desc: "Chat directly for quick support",
      buttonText: "Chat Now",
      url: "https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20would%20like%20to%20connect%20with%20your%20team.",
      btnClass: "bg-gradient-to-r from-[#32D463] to-[#1DA645] text-white shadow-md hover:brightness-105",
      glowColor: "rgba(37, 211, 102, 0.2)",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-sm">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
          </svg>
        </div>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      desc: "Follow for news & community",
      buttonText: "Follow Us",
      url: "https://facebook.com",
      btnClass: "bg-gradient-to-r from-[#2B87FF] to-[#1266F1] text-white shadow-md hover:brightness-105",
      glowColor: "rgba(24, 119, 242, 0.2)",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#1877F2] text-white shadow-sm">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
    },
    {
      id: "google",
      name: "Google Maps",
      desc: "Find us & leave a review",
      buttonText: "View Map",
      url: "https://maps.google.com/?q=TechSmart+Systems+Kollam",
      btnClass: "bg-[#1E232B] hover:bg-[#111419] text-white shadow-md",
      glowColor: "rgba(0, 0, 0, 0.15)",
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-200">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-[#F8F7F4] pt-10 sm:pt-14 pb-12 sm:pb-16 ${
        isStandalone ? "pt-24 sm:pt-28" : ""
      } ${className}`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Section */}
        <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#CCC8BF]" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#92400E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>STAY CONNECTED</span>
            </span>
            <div className="h-[1px] w-8 bg-[#CCC8BF]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#14161C] tracking-tight leading-tight mb-2">
            Follow Our <span className="text-[#F59E0B] relative inline-block">Journey</span>
          </h2>

          <p className="text-[#646A77] text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Stay updated with our latest projects, offers, and tech insights across our official channels.
          </p>
        </div>

        {/* Compact Cards Grid - Reduced height to minimize scrolling on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 max-w-5xl mx-auto z-10 relative">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-200 shadow-sm hover:shadow-md hover:border-amber-400"
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-2.5">
                  {card.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#14161C] tracking-tight mb-1">
                  {card.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6B7280] font-normal leading-tight mb-3">
                  {card.desc}
                </p>
              </div>

              <div className="w-full pt-1">
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full py-2 px-3 rounded-xl font-bold text-[11px] sm:text-xs tracking-wide transition-all duration-200 ${card.btnClass}`}
                >
                  <span>{card.buttonText}</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Contact Button linking to Contact Page/Section */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Have Questions? Contact Our Team</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
