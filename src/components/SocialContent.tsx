"use client";

import React from "react";
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
      desc: "See our latest work,\nstories & updates",
      buttonText: "Follow Us",
      url: "https://instagram.com",
      btnClass: "bg-gradient-to-r from-[#FF6332] via-[#FF1E6A] to-[#A825B8] text-white shadow-[0_8px_20px_-4px_rgba(255,30,106,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(255,30,106,0.6)] hover:brightness-105",
      glowColor: "rgba(255, 60, 110, 0.28)",
      icon: (
        <div className="w-[70px] h-[70px] sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FF9800] via-[#FF1361] to-[#9C27B0] p-[3px] shadow-[0_8px_22px_-6px_rgba(255,19,97,0.4)]">
          <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FF6B00] via-[#FF1361] to-[#8823C4] text-white">
            <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      desc: "Chat with us directly\nfor quick support",
      buttonText: "Chat Now",
      url: "https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20would%20like%20to%20connect%20with%20your%20team.",
      btnClass: "bg-gradient-to-r from-[#32D463] to-[#1DA645] text-white shadow-[0_8px_20px_-4px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(37,211,102,0.6)] hover:brightness-105",
      glowColor: "rgba(37, 211, 102, 0.32)",
      icon: (
        <div className="w-[70px] h-[70px] sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-[0_8px_22px_-6px_rgba(37,211,102,0.5)]">
          <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
          </svg>
        </div>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      desc: "Follow for news,\nevents & community",
      buttonText: "Follow Us",
      url: "https://facebook.com",
      btnClass: "bg-gradient-to-r from-[#2B87FF] to-[#1266F1] text-white shadow-[0_8px_20px_-4px_rgba(18,102,241,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(18,102,241,0.6)] hover:brightness-105",
      glowColor: "rgba(24, 119, 242, 0.32)",
      icon: (
        <div className="w-[70px] h-[70px] sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center bg-[#1877F2] text-white shadow-[0_8px_22px_-6px_rgba(24,119,242,0.5)]">
          <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
    },
    {
      id: "google",
      name: "Google",
      desc: "Find us on Google\n& leave a review",
      buttonText: "View on Google",
      url: "https://maps.google.com/?q=TechSmart+Systems+Kollam",
      btnClass: "bg-[#1E232B] hover:bg-[#111419] text-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.5)]",
      glowColor: "rgba(0, 0, 0, 0.22)",
      icon: (
        <div className="w-[70px] h-[70px] sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-slate-100">
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24">
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
      className={`relative w-full overflow-hidden bg-[#F8F7F4] pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 ${
        isStandalone ? "pt-28 sm:pt-32" : ""
      } ${className}`}
    >
      {/* Background Architectural Subtle Concentric Circular Arches & Ambient Warmth */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft Warm Radial Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-50/70 via-rose-50/30 to-transparent blur-3xl" />

        {/* Giant Concentric Arched Circles */}
        <div className="absolute top-4 sm:top-8 w-[720px] h-[720px] sm:w-[960px] sm:h-[960px] lg:w-[1180px] lg:h-[1180px] rounded-full border border-[#E3E0D8]/70" />
        <div className="absolute -top-16 sm:-top-20 w-[1000px] h-[1000px] sm:w-[1300px] sm:h-[1300px] lg:w-[1550px] lg:h-[1550px] rounded-full border border-[#EFECE5]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Section */}
        <div className="relative text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          {/* Stay Connected Pill Badge with Side Lines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-4"
          >
            <div className="h-[1px] w-8 sm:w-12 bg-[#CCC8BF]" />
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200/90 bg-amber-50/80 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#92400E] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>STAY CONNECTED</span>
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#CCC8BF]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[2.6rem] sm:text-5xl md:text-[3.5rem] font-bold text-[#14161C] tracking-tight leading-[1.1] mb-4"
          >
            Follow Our <span className="text-[#F59E0B] relative inline-block">Journey<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] rounded-full" /></span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#646A77] text-sm sm:text-base md:text-[17px] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with our latest updates, offers, projects and behind-the-scenes content across all platforms.
          </motion.p>

          {/* Handwritten Annotation - Top Right "Let's Connect" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block absolute -top-4 -right-10 lg:-right-20 text-[#383C46] pointer-events-none select-none text-right"
          >
            <span className="font-script text-3xl lg:text-[40px] leading-tight text-[#2D313A] block drop-shadow-xs rotate-[-6deg]">
              Let&apos;s<br />Connect
            </span>
            <svg
              className="w-14 h-14 lg:w-18 lg:h-18 text-[#4E5462] mt-1 ml-auto transform translate-x-2"
              viewBox="0 0 70 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 52 10 C 62 28, 42 42, 14 46" />
              <path d="M 23 38 L 14 46 L 24 54" />
            </svg>
          </motion.div>
        </div>

        {/* 4 Frosted Neumorphic Cards Grid */}
        <div className="relative">

          {/* Handwritten Annotation - Bottom Left "Be a part of our story" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden md:block absolute -bottom-12 -left-8 lg:-left-20 text-[#383C46] pointer-events-none select-none text-left z-20"
          >
            <svg
              className="w-12 h-12 lg:w-16 lg:h-16 text-[#4E5462] mb-1 ml-4"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 12 50 C 14 26, 26 16, 44 10" />
              <path d="M 34 8 L 44 10 L 39 19" />
            </svg>
            <span className="font-script text-2xl lg:text-[32px] leading-tight text-[#2D313A] block drop-shadow-xs rotate-[-4deg]">
              Be a part<br />of our story
            </span>
          </motion.div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 max-w-6xl mx-auto z-10 relative">
            {cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                style={{
                  boxShadow: `0 28px 56px -18px ${card.glowColor}, 0 10px 25px -10px rgba(0,0,0,0.04)`,
                }}
                className="group relative bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col items-center justify-between text-center min-h-[360px] sm:min-h-[385px] transition-all duration-300"
              >
                {/* Top Frosted White Glow Gradient */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent rounded-t-[36px] pointer-events-none opacity-90" />

                {/* Card Top / Icon & Headings */}
                <div className="flex flex-col items-center relative z-10 w-full">

                  {/* Floating Brand Icon with micro-animation */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 cursor-pointer"
                  >
                    {card.icon}
                  </motion.div>

                  {/* Brand Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#14161C] tracking-tight mb-2">
                    {card.name}
                  </h3>

                  {/* Description text with 2-line clean break */}
                  <p className="text-xs sm:text-[13.5px] text-[#6B7280] font-normal leading-relaxed whitespace-pre-line max-w-[190px]">
                    {card.desc}
                  </p>
                </div>

                {/* Card Bottom / Action Pill Button */}
                <div className="w-full pt-6 relative z-10">
                  <motion.a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center justify-center w-full py-3.5 sm:py-3.5 px-6 rounded-full font-medium text-xs sm:text-[13px] tracking-wide transition-all duration-200 group-hover:brightness-105 ${card.btnClass}`}
                  >
                    <span>{card.buttonText}</span>
                    <span className="ml-2 font-mono text-sm transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
