"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

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
      id: "whatsapp",
      name: "WhatsApp",
      subtitle: "Instant chat & quick support",
      url: "https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20would%20like%20to%20connect%20with%20your%20team.",
      icon: (
        <div className="w-full h-full rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
          </svg>
        </div>
      ),
    },
    {
      id: "instagram",
      name: "Instagram",
      subtitle: "Project reels & latest photos",
      url: "https://instagram.com",
      icon: (
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FF9800] via-[#FF1361] to-[#9C27B0] text-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      ),
    },
    {
      id: "facebook",
      name: "Facebook",
      subtitle: "Company news & updates",
      url: "https://facebook.com",
      icon: (
        <div className="w-full h-full rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 sm:w-9 sm:h-9 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
    },
    {
      id: "google",
      name: "Google",
      subtitle: "Location map & reviews",
      url: "https://maps.google.com/?q=TechSmart+Systems+Kollam",
      icon: (
        <div className="w-full h-full rounded-full bg-white text-slate-900 border border-slate-100 flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 sm:w-9 sm:h-9" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-[#FAF9F5] py-8 sm:py-12 select-none ${
        isStandalone ? "pt-20 sm:pt-28" : ""
      } ${className}`}
    >
      {/* Top Left Corner Accent Ribbons */}
      <div className="absolute top-0 left-0 w-24 sm:w-48 h-12 sm:h-24 pointer-events-none z-0">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
          <polygon points="0,0 200,0 0,60" fill="#111827" />
          <polygon points="0,45 200,0 200,10 0,75" fill="#F5B800" />
        </svg>
      </div>

      {/* Bottom Right Corner Accent Ribbons & Watermark */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-60 h-16 sm:h-36 pointer-events-none z-0 opacity-90">
        <svg viewBox="0 0 250 120" fill="none" className="w-full h-full">
          <polygon points="250,120 0,120 250,40" fill="#F5B800" />
          <polygon points="250,60 50,120 250,120" fill="#111827" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Top Header Composition */}
        <div className="relative text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          
          {/* Top Decorative Paper Plane (Left) */}
          <div className="hidden sm:block absolute -top-4 -left-20 lg:-left-28 z-20 pointer-events-none">
            <svg className="w-24 h-24 text-[#F5B800]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              {/* Flight path curve */}
              <path d="M 10 90 Q 30 20 80 30" strokeWidth="1.8" strokeDasharray="4 4" strokeLinecap="round" />
              {/* Paper plane icon */}
              <g transform="translate(68, 15) rotate(15) scale(0.6)">
                <polygon points="0,20 40,0 20,40 15,25" fill="#F5B800" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
                <line x1="40" y1="0" x2="15" y2="25" stroke="#111827" strokeWidth="2" />
              </g>
            </svg>
          </div>

         
         

          {/* Centered Logo */}
          <div className="flex justify-center mb-2 sm:mb-3">
            <Logo variant="dark" size="md" />
          </div>

          {/* Main Title */}
          <h2 className="font-dmsans font-medium text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-none mb-2.5">
            Connect <span className="text-[#F5B800]">With Us</span>
          </h2>

          {/* Eyebrow Subtext with Lines */}
          <div className="flex items-center justify-center gap-2.5 text-slate-500 font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase">
            <span className="w-8 sm:w-12 h-[1.5px] bg-slate-300" />
            <span>STAY IN TOUCH</span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#F5B800]" />
          </div>

        </div>

        {/* 4 Slanted Social Cards Grid (2x2 on Mobile, 4x1 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 max-w-6xl mx-auto pt-2 pb-8 sm:pb-12">
          {cards.map((card, idx) => (
            <motion.a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative cursor-pointer block"
            >
              {/* Slanted Yellow Accent Backing Shape */}
              <div 
                className="absolute top-1.5 -left-2 sm:top-2 sm:-left-3 w-[94%] h-[102%] bg-[#F5B800] rounded-[20px] sm:rounded-[24px] transform -rotate-2 sm:-rotate-3 z-0 group-hover:-rotate-3 group-hover:scale-[1.02] transition-all duration-300 shadow-sm sm:shadow-md"
              />

              {/* Main White Card Container */}
              <div className="relative z-10 bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-7 shadow-[0_10px_25px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col justify-between min-h-[140px] sm:min-h-[175px] border border-slate-100">
                
                {/* Floating Top-Left Circle Icon Badge */}
                <div className="absolute -top-5 left-4 sm:-top-7 sm:left-6 z-20 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] p-1.5 sm:p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Bottom Row (Name + Subtitle + Yellow Accent Line + Arrow Button) */}
                <div className="pt-6 sm:pt-10 flex items-end justify-between w-full">
                  <div className="pr-1">
                    <h3 className="text-base sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                      {card.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5 sm:mt-1 line-clamp-1">
                      {card.subtitle}
                    </p>
                    <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-[#F5B800] rounded-full mt-1.5" />
                  </div>

                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#F5B800] text-slate-950 font-black text-xs sm:text-lg flex items-center justify-center shadow-xs sm:shadow-md group-hover:bg-[#FFC400] group-hover:scale-110 transition-transform flex-shrink-0 ml-1">
                    →
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Ticker Bar */}
        <div className="pt-4 sm:pt-6 text-center select-none">
          <div className="inline-flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-slate-400 uppercase">
              <span>FOLLOW</span>
              <span className="text-[#F5B800] font-bold">•</span>
              <span>MESSAGE</span>
              <span className="text-[#F5B800] font-bold">•</span>
              <span className="text-slate-700">REVIEW</span>
              <span className="text-[#F5B800] font-bold">•</span>
              <span>SUPPORT</span>
            </div>
            <div className="w-10 sm:w-12 h-1 bg-[#F5B800] rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}


