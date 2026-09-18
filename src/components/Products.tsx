"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

interface ProductItem {
  id: number;
  name: string;
  image: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "CCTV",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "ESSL BIOMETRIC ATTENDANCE SYSTEM",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "SMART GATE AUTOMATION",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "HOME & OFFICE AUTOMATION",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "DOOR ACCESS CONTROL SYSTEM",
    image:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "VIDEO DOOR PHONE",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-12 sm:py-16 bg-[#FDFDFD] text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none"
    >
      {/* Top Left Yellow & Dark Wedge Accents matching reference */}
      <div className="absolute top-0 left-0 w-32 sm:w-56 h-32 sm:h-56 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <polygon points="0,0 200,0 0,160" fill="#F5B800" />
          <polygon points="0,0 120,0 0,90" fill="#111827" />
        </svg>
      </div>

      {/* Bottom Right Corner Accent Polygon */}
      <div className="absolute bottom-0 right-0 w-36 sm:w-64 h-36 sm:h-64 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <polygon points="200,200 0,200 200,60" fill="#F5B800" />
          <polygon points="200,200 60,200 200,100" fill="#111827" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Header Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10 sm:mb-12">
          {/* Top Left Callout (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#F5B800]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#F5B800] uppercase">
                TRUSTED PRODUCTS
              </span>
            </div>
            <div className="text-2xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Security.
              <br />
              Attendance.
              <br />
              Automation.
            </div>
            <p className="text-xs text-slate-500 font-medium pt-1">
              All in One Place.
            </p>
          </div>

          {/* Center Main Heading & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center space-y-2.5 max-w-xl mx-auto"
          >
            {/* Eyebrow badge */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
              <span className="w-6 h-0.5 bg-[#F5B800] rounded-full" />
              <span className="text-slate-700">OUR PRODUCTS</span>
              <span className="w-6 h-0.5 bg-[#F5B800] rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Smart Solutions for a<br />
              <span className="text-[#F5B800]">Safer Tomorrow</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
              Explore our range of security and automation products designed to
              keep your business safe, smart and efficient.
            </p>
          </motion.div>

          {/* Top Right Handwritten Callout (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
            <div className="font-caveat text-2xl lg:text-3xl font-bold text-slate-400 leading-tight -rotate-6 text-right select-none">
              Technology
              <br />
              for a Better
              <br />
              Tomorrow
            </div>
          </div>
        </div>

        {/* 6 Products Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center justify-between text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Yellow decorative accent tab on right edge */}
              <span className="absolute right-0 top-1/3 -translate-y-1/2 w-2 h-14 bg-[#F5B800] rounded-l-md pointer-events-none" />

              {/* Product Image on soft warm circular highlight */}
              <div className="relative w-full h-44 sm:h-48 flex items-center justify-center mb-3">
                <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#FEF3C7]/60 blur-xs -z-0" />
                <div className="relative z-10 w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                  />
                </div>
              </div>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-tight mb-4 min-h-[36px] flex items-center justify-center">
                {product.name}
              </h3>

              {/* WhatsApp Enquire Button */}
              <a
                href={`https://wa.me/919048171666?text=${encodeURIComponent(
                  `Hello TechSmart Systems, I would like to enquire about ${product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#111827] text-white shadow-sm hover:shadow-md transition-all group/btn overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-2 px-3.5 py-2">
                  <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold whitespace-nowrap">
                    Enquire on WhatsApp
                  </span>
                </div>
                <div className="bg-[#F5B800] group-hover/btn:bg-amber-400 text-slate-950 px-3 py-2 flex items-center justify-center font-bold text-xs sm:text-sm transition-colors">
                  →
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section Controls & Trust Badges */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Bottom Left Logo */}
          <div className="flex items-center">
            <Logo variant="dark" size="sm" />
          </div>

          {/* Bottom Center: View More Products Button */}
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#F5B800] bg-white hover:bg-amber-50/80 text-slate-900 font-bold text-xs sm:text-sm shadow-xs transition-all group cursor-pointer"
            >
              <span>View More Products</span>
              <span className="text-[#F5B800] font-bold text-sm transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Bottom Right: 3 Trust Indicators */}
          <div className="flex items-center gap-6 sm:gap-8 text-center">
            {/* Trusted Quality */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
                <svg
                  className="w-4 h-4 text-[#F5B800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-slate-700">
                Trusted Quality
              </span>
            </div>

            {/* Expert Support */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
                <svg
                  className="w-4 h-4 text-[#F5B800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-slate-700">
                Expert Support
              </span>
            </div>

            {/* Business Focused */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
                <svg
                  className="w-4 h-4 text-[#F5B800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-slate-700">
                Business Focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
