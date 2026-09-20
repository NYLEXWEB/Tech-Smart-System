"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductItem {
  id: number;
  name: string;
  image: string;
  alt: string;
  slug: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: "CCTV SURVEILLANCE CAMERAS",
    image: "/images/products/cctv-surveillance-camera-kollam.jpg",
    alt: "High-Definition 4K CCTV Security Cameras Kollam - TechSmart Systems",
    slug: "/services/cctv-installation",
  },
  {
    id: 2,
    name: "ESSL BIOMETRIC ATTENDANCE SYSTEM",
    image: "/images/products/biometric-attendance-fingerprint-machine.jpg",
    alt: "eSSL Biometric Attendance and AI Face Recognition Machine Kerala - TechSmart Systems",
    slug: "/services/biometric-attendance",
  },
  {
    id: 3,
    name: "SMART GATE AUTOMATION",
    image: "/images/products/automatic-motorized-sliding-swing-gate.jpg",
    alt: "Motorized Automatic Sliding and Swing Gate Automation - TechSmart Systems",
    slug: "/services/gate-automation",
  },
  {
    id: 4,
    name: "HOME & OFFICE AUTOMATION",
    image: "/images/products/smart-home-automation-controller-iot.jpg",
    alt: "Smart Home and Office Automation Switch Panels Kerala - TechSmart Systems",
    slug: "/services/home-automation",
  },
  {
    id: 5,
    name: "DOOR ACCESS CONTROL SYSTEM",
    image: "/images/products/rfid-card-keypad-door-access-control.png",
    alt: "Electronic Door Access Control and Smart Door Lock Kollam - TechSmart Systems",
    slug: "/services/access-control",
  },
  {
    id: 6,
    name: "VIDEO DOOR PHONE",
    image: "/images/products/ip-video-door-phone-intercom-display.jpg",
    alt: "Color Touchscreen Video Door Phone and Intercom System Kerala - TechSmart Systems",
    slug: "/services/video-door-phone",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-12 sm:py-16 bg-[#FDFDFD] text-[#111827] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none"
    >
      {/* Top Left Yellow & Dark Wedge Accents */}
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
            <h2 className="font-dmsans font-medium text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Smart Solutions for a<br />
              <span className="text-[#F5B800]">Safer Tomorrow</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
              Explore our range of security and automation products designed to
              keep your home and business safe, smart and efficient.
            </p>
          </motion.div>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex flex-col items-center justify-between text-center group transition-all duration-300 py-2 sm:py-4"
            >
              {/* Product Image */}
              <Link
                href={product.slug}
                className="relative w-full h-44 sm:h-48 flex items-center justify-center mb-3 group"
              >
                <div className="relative z-10 w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                  />
                </div>
              </Link>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-tight mb-4 min-h-[36px] flex items-center justify-center">
                <Link href={product.slug} className="hover:text-[#D97706] transition-colors">
                  {product.name}
                </Link>
              </h3>

              {/* WhatsApp Enquire Button */}
              <div className="flex items-center gap-2">
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
                      Enquire
                    </span>
                  </div>
                  <div className="bg-[#F5B800] group-hover/btn:bg-amber-400 text-slate-950 px-2.5 py-2 flex items-center justify-center font-bold text-xs transition-colors">
                    →
                  </div>
                </a>

                <Link
                  href={product.slug}
                  className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
