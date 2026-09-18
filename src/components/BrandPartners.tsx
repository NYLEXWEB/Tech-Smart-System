"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BRANDS = [
  {
    name: "Hikvision",
    logo: "/images/brands/hikvision.png",
  },
  {
    name: "CP PLUS",
    logo: "/images/brands/cpplus.png",
  },
  {
    name: "Matrix Security Solutions",
    logo: "/images/brands/matrix.png",
  },
  {
    name: "UNV (Uniview)",
    logo: "/images/brands/unv.png",
  },
  {
    name: "Prama",
    logo: "/images/brands/prama.png",
  },
  {
    name: "HiFocus",
    logo: "/images/brands/hifocus.png",
  },
];

export default function BrandPartners() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Minimal Clean Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#F5A800] rounded-full" />
            <span className="text-slate-700">BRANDS WE WORK WITH</span>
            <span className="w-5 h-0.5 bg-[#F5A800] rounded-full" />
          </div>
          <h2 className="font-dmsans font-medium text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Our Trusted <span className="text-[#F5A800]">CCTV Brands</span>
          </h2>
        </div>

        {/* Clean Logo Cards Grid (6 items in 2x3 or 3x2 layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto items-center justify-center">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md border border-slate-200/80 hover:border-slate-300 flex items-center justify-center h-24 sm:h-28 transition-all cursor-default"
            >
              <div className="relative w-full h-full max-w-[150px] flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(max-width: 640px) 150px, 200px"
                  className="object-contain"
                  priority={idx < 6}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
