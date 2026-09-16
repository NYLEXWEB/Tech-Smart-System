"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BottomCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF5] border-t border-b border-amber-200 text-[#111827] w-full max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
      >
        <div className="eyebrow-badge mb-3 bg-white border-amber-200">
          <span className="eyebrow-bullet" />
          <span>Free Engineering Consultation</span>
        </div>

        <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28] mb-2">
          Ready to Secure Your Property?
        </h2>

        <p className="text-base font-normal text-[#4B5563] max-w-xl mx-auto leading-[1.65] mb-6">
          We craft dependable security systems blending cutting-edge surveillance with enduring reliability across Kerala.
        </p>

        <div className="flex items-center justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-[#111827] text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm group"
            >
              <span>Schedule A Site Visit</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
