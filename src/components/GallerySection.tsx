"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const imagesRow1 = [
    "/gallery images/file_00000000147c81fd884ccb9651e01277.png",
    "/gallery images/file_00000000166c8207bec4b0a249a44104.png",
    "/gallery images/file_000000002db0820bae62eb1507370f91.png",
    "/gallery images/file_0000000071908230a1812b932b38cdac.png",
    "/gallery images/file_00000000861481fa87e8305b6a1d16f9.png",
  ];

  const imagesRow2 = [
    "/gallery images/file_000000009e6c820b876226568d79d590.png",
    "/gallery images/file_00000000a1b0820b90817e89e2a264e0.png",
    "/gallery images/file_00000000c2f481fa8f4ec17b9e0da5a6.png",
    "/gallery images/file_00000000dc8081fab82a939838de5979.png",
    "/gallery images/file_00000000eac0820ba00e332ce159e6a5.png",
  ];

  // Duplicated arrays for seamless infinite loop marquee
  const loopRow1 = [...imagesRow1, ...imagesRow1, ...imagesRow1];
  const loopRow2 = [...imagesRow2, ...imagesRow2, ...imagesRow2];

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-white border-t border-b border-slate-200/80 w-full max-w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white shadow-md mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">OUR WORK GALLERY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          Project Highlights &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-brand-yellow-hover to-amber-600">
            Installations
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 max-w-md mx-auto">
          Explore real-world security, CCTV, and smart automation setups installed by our engineering team across Kerala. Click any photo to view full size.
        </p>
      </div>

      {/* Row 1: Auto-Scroll Left - EXTRA LARGE IMAGES */}
      <div className="relative w-full overflow-hidden mb-6 sm:mb-8">
        <motion.div
          className="flex gap-6 sm:gap-10 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {loopRow1.map((src, i) => (
            <div
              key={`row1-${i}`}
              onClick={() => setSelectedImg(src)}
              className="relative w-80 sm:w-[540px] h-52 sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all cursor-pointer group flex-shrink-0 bg-slate-950"
            >
              <Image
                src={src}
                alt="TechSmart Systems Installation Gallery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 320px, 540px"
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 right-3 bg-slate-950/80 text-white px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span>🔍 Click to Expand</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Auto-Scroll Right - EXTRA LARGE IMAGES */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-10 w-max"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {loopRow2.map((src, i) => (
            <div
              key={`row2-${i}`}
              onClick={() => setSelectedImg(src)}
              className="relative w-80 sm:w-[540px] h-52 sm:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all cursor-pointer group flex-shrink-0 bg-slate-950"
            >
              <Image
                src={src}
                alt="TechSmart Systems Installation Gallery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 320px, 540px"
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 right-3 bg-slate-950/80 text-white px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span>🔍 Click to Expand</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Expand Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center text-xl font-bold transition-all shadow-lg"
              >
                ✕
              </button>
              <div className="relative w-full h-full max-h-[85vh]">
                <Image
                  src={selectedImg}
                  alt="Expanded Installation Image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
