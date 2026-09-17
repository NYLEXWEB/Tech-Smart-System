"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: number;
  title: string;
  category: "CCTV" | "Solar Systems" | "IT & Networking" | "Office Setups";
  subtitle: string;
  description: string;
  image: string;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "CCTV Security Installation",
    category: "CCTV",
    subtitle: "Enterprise Surveillance",
    description: "Advanced security solutions for a safer tomorrow.",
    image: "/gallery images/file_00000000147c81fd884ccb9651e01277.png",
  },
  {
    id: 2,
    title: "IT Infrastructure Setup",
    category: "IT & Networking",
    subtitle: "High-Speed Server Racks",
    description: "Structured high-speed network cabling and server enclosures.",
    image: "/gallery images/file_00000000166c8207bec4b0a249a44104.png",
  },
  {
    id: 3,
    title: "Solar Panel Installation",
    category: "Solar Systems",
    subtitle: "Renewable Power",
    description: "Clean photovoltaic solar energy grid for luxury commercial estates.",
    image: "/gallery images/file_000000002db0820bae62eb1507370f91.png",
  },
  {
    id: 4,
    title: "Networking Solutions",
    category: "IT & Networking",
    subtitle: "Data Center Cabling",
    description: "Enterprise gigabit network routing and optical fiber links.",
    image: "/gallery images/file_0000000071908230a1812b932b38cdac.png",
  },
  {
    id: 5,
    title: "Commercial Installations",
    category: "Office Setups",
    subtitle: "Corporate Facilities",
    description: "Integrated biometric access control and smart lighting systems.",
    image: "/gallery images/file_00000000861481fa87e8305b6a1d16f9.png",
  },
  {
    id: 6,
    title: "Enterprise Surveillance Hub",
    category: "CCTV",
    subtitle: "24/7 AI Analytics",
    description: "Centralized multi-channel security video wall with instant alerts.",
    image: "/gallery images/file_000000009e6c820b876226568d79d590.png",
  },
  {
    id: 7,
    title: "Smart Office Automation",
    category: "Office Setups",
    subtitle: "Touchless Control",
    description: "Automated climate, gate entry, and smart conference room systems.",
    image: "/gallery images/file_00000000a1b0820b90817e89e2a264e0.png",
  },
  {
    id: 8,
    title: "Solar Rooftop Grid",
    category: "Solar Systems",
    subtitle: "Eco Energy Backup",
    description: "High-efficiency solar array for zero-downtime operations.",
    image: "/gallery images/file_00000000c2f481fa8f4ec17b9e0da5a6.png",
  },
  {
    id: 9,
    title: "4K Night Vision CCTV",
    category: "CCTV",
    subtitle: "Perimeter Protection",
    description: "Ultra HD infrared dome cameras for complete night security.",
    image: "/gallery images/file_00000000dc8081fab82a939838de5979.png",
  },
  {
    id: 10,
    title: "Biometric Access Control",
    category: "Office Setups",
    subtitle: "Facial Recognition",
    description: "Touchless staff attendance and electronic smart lock gateways.",
    image: "/gallery images/file_00000000eac0820ba00e332ce159e6a5.png",
  },
];

const CATEGORIES = [
  "All Projects",
  "CCTV",
  "Solar Systems",
  "IT & Networking",
  "Office Setups",
] as const;

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // Filter projects by category
  const filteredProjects = ALL_PROJECTS.filter((item) =>
    activeCategory === "All Projects" ? true : item.category === activeCategory
  );

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  // Autoplay functionality (5.5 seconds)
  const nextSlide = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length, nextSlide]);

  // Keyboard Navigation & ESC Key modal listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalProject) {
        if (e.key === "Escape") setModalProject(null);
        return;
      }
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalProject, nextSlide, prevSlide]);

  const currentProject = filteredProjects[activeIndex] || ALL_PROJECTS[0];

  // Helper to get card relative to active index
  const getProjectAtOffset = (offset: number) => {
    if (filteredProjects.length === 0) return null;
    const len = filteredProjects.length;
    const index = (activeIndex + offset + len * 10) % len;
    return filteredProjects[index];
  };

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 bg-[#F8F8F6] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden text-slate-900 select-none"
    >
      {/* Side Decorative Watermarks matching reference design */}
      <div className="hidden xl:block absolute left-8 top-28 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-400/50 uppercase space-y-1.5 pointer-events-none">
        <div>IDEAS</div>
        <div>INSTALLATIONS</div>
        <div>SUPPORT</div>
        <div>GROWTH</div>
        <div className="w-6 h-0.5 bg-[#F9B900] mt-2" />
      </div>

      <div className="hidden xl:block absolute right-8 top-28 text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400/50 uppercase text-right max-w-[120px] pointer-events-none">
        <div>TECHNOLOGY</div>
        <div>FOR A SMARTER</div>
        <div>TOMORROW</div>
        <div className="w-6 h-0.5 bg-[#F9B900] ml-auto mt-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5"
        >
          {/* Eyebrow badge */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-[#F9B900] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D97706] uppercase">
              OUR WORK
            </span>
            <span className="w-6 h-0.5 bg-[#F9B900] rounded-full" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Project{" "}
            <span className="text-[#F9B900]">
              Gallery
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            A glimpse of the solutions we build, install and support.<br className="hidden sm:inline" /> Real projects. Real impact.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar px-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#F9B900] text-slate-950 shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3D Perspective Coverflow Carousel Container with Floor Reflection */}
        <div
          className="relative min-h-[440px] sm:min-h-[520px] flex items-center justify-center mb-10 overflow-visible"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop & Tablet Coverflow Layout with 3D Rotation matching exact reference image */}
          <div className="hidden sm:flex items-center justify-center w-full max-w-6xl px-4 perspective-1000">
            
            {/* Outer Left Card (-2): Tilted 25 degrees right facing center */}
            {getProjectAtOffset(-2) && (
              <div
                onClick={() => setActiveIndex((prev) => (prev - 2 + filteredProjects.length) % filteredProjects.length)}
                style={{
                  transform: "perspective(1000px) rotateY(26deg) scale(0.82) translateZ(-40px)",
                  transformOrigin: "right center",
                }}
                className="relative w-44 md:w-48 h-[340px] md:h-[380px] rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -mr-6 z-0 group"
              >
                <Image
                  src={getProjectAtOffset(-2)!.image}
                  alt={getProjectAtOffset(-2)!.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold truncate drop-shadow">{getProjectAtOffset(-2)!.title}</div>
                  <div className="w-4 h-0.5 bg-[#F9B900] mt-1" />
                </div>
              </div>
            )}

            {/* Inner Left Card (-1): Tilted 15 degrees right facing center */}
            {getProjectAtOffset(-1) && (
              <div
                onClick={() => prevSlide()}
                style={{
                  transform: "perspective(1000px) rotateY(18deg) scale(0.9) translateZ(-10px)",
                  transformOrigin: "right center",
                }}
                className="relative w-52 md:w-60 h-[380px] md:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300/90 shadow-2xl cursor-pointer opacity-90 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -mr-4 z-10 group"
              >
                <Image
                  src={getProjectAtOffset(-1)!.image}
                  alt={getProjectAtOffset(-1)!.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-sm font-extrabold truncate drop-shadow">{getProjectAtOffset(-1)!.title}</div>
                  <div className="w-6 h-0.5 bg-[#F9B900] mt-1.5" />
                </div>
              </div>
            )}

            {/* MAIN CENTER FEATURED CARD (0): Straight Front Facing */}
            {currentProject && (
              <motion.div
                key={currentProject.id}
                layout
                initial={{ opacity: 0.9, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-xl md:max-w-2xl h-[430px] md:h-[490px] rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-950 flex-shrink-0 z-30 group shadow-slate-400/20"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Subtle Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

                {/* Top Overlay: Number & Fullscreen Button */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white">
                  <div className="text-xs font-mono font-bold tracking-widest bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                  </div>
                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="w-10 h-10 rounded-full bg-slate-950/70 hover:bg-white text-white hover:text-slate-950 border border-white/20 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                    title="Expand Photo"
                  >
                    ⤢
                  </button>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1.5 max-w-md">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                      {currentProject.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#F9B900] rounded-full" />
                    <p className="text-xs sm:text-sm text-slate-300 font-medium line-clamp-2 pt-1">
                      {currentProject.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#F9B900] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex-shrink-0 self-start sm:self-end"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-950 text-[#F9B900] flex items-center justify-center font-bold">→</span>
                    <span>View Project</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Inner Right Card (+1): Tilted 15 degrees left facing center */}
            {getProjectAtOffset(1) && (
              <div
                onClick={() => nextSlide()}
                style={{
                  transform: "perspective(1000px) rotateY(-18deg) scale(0.9) translateZ(-10px)",
                  transformOrigin: "left center",
                }}
                className="relative w-52 md:w-60 h-[380px] md:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300/90 shadow-2xl cursor-pointer opacity-90 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -ml-4 z-10 group"
              >
                <Image
                  src={getProjectAtOffset(1)!.image}
                  alt={getProjectAtOffset(1)!.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-sm font-extrabold truncate drop-shadow">{getProjectAtOffset(1)!.title}</div>
                  <div className="w-6 h-0.5 bg-[#F9B900] mt-1.5" />
                </div>
              </div>
            )}

            {/* Outer Right Card (+2): Tilted 25 degrees left facing center */}
            {getProjectAtOffset(2) && (
              <div
                onClick={() => setActiveIndex((prev) => (prev + 2) % filteredProjects.length)}
                style={{
                  transform: "perspective(1000px) rotateY(-26deg) scale(0.82) translateZ(-40px)",
                  transformOrigin: "left center",
                }}
                className="relative w-44 md:w-48 h-[340px] md:h-[380px] rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -ml-6 z-0 group"
              >
                <Image
                  src={getProjectAtOffset(2)!.image}
                  alt={getProjectAtOffset(2)!.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold truncate drop-shadow">{getProjectAtOffset(2)!.title}</div>
                  <div className="w-4 h-0.5 bg-[#F9B900] mt-1" />
                </div>
              </div>
            )}

          </div>

          {/* Dedicated Mobile Single Card Carousel */}
          <div className="sm:hidden w-full px-2">
            {currentProject && (
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-slate-300 shadow-xl bg-slate-950">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white">
                  <span className="text-xs font-mono font-bold bg-slate-950/70 px-3 py-1 rounded-full border border-white/20">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                  </span>
                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="w-9 h-9 rounded-full bg-slate-950/70 text-white border border-white/20 flex items-center justify-center text-sm"
                  >
                    ⤢
                  </button>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                  <h3 className="text-xl font-black">{currentProject.title}</h3>
                  <div className="w-8 h-1 bg-[#F9B900] rounded-full" />
                  <p className="text-xs text-slate-300 line-clamp-2">{currentProject.description}</p>
                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9B900] text-slate-950 font-extrabold text-xs"
                  >
                    <span>View Project →</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Carousel Navigation Controls (Left Arrow, Pagination Dots, Right Arrow) */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-[#F9B900] hover:text-slate-950 hover:border-amber-400 shadow-sm flex items-center justify-center transition-all cursor-pointer font-bold text-lg"
            aria-label="Previous Project"
          >
            ‹
          </button>

          {/* Pagination Indicators matching reference design */}
          <div className="flex items-center gap-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 h-2.5 bg-[#F9B900]"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-[#F9B900] hover:text-slate-950 hover:border-amber-400 shadow-sm flex items-center justify-center transition-all cursor-pointer font-bold text-lg"
            aria-label="Next Project"
          >
            ›
          </button>
        </div>

        {/* Bottom Minimalist Statistics & CTA Row with Exact Reference Yellow SVG Outline Icons */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-left w-full md:w-auto">
            
            {/* Stat 1: Projects Completed (Exact Gallery/Image Outline Icon in #F9B900) */}
            <div className="flex items-center gap-3.5">
              <svg className="w-8 h-8 text-[#F9B900] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
              </svg>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">100+</div>
                <div className="text-xs text-slate-500 font-medium">Projects Completed</div>
              </div>
            </div>

            {/* Stat 2: Happy Clients (Exact User Group Outline Icon in #F9B900) */}
            <div className="flex items-center gap-3.5">
              <svg className="w-8 h-8 text-[#F9B900] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">50+</div>
                <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Stat 3: Client Satisfaction (Exact Shield Checkmark Outline Icon in #F9B900) */}
            <div className="flex items-center gap-3.5">
              <svg className="w-8 h-8 text-[#F9B900] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-950">99%</div>
                <div className="text-xs text-slate-500 font-medium">Client Satisfaction</div>
              </div>
            </div>

          </div>

          {/* Far Right CTA Button matching reference image */}
          <Link
            href="/contact"
            className="w-full md:w-auto text-center inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#F9B900] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Let&apos;s Build Yours</span>
            <span className="text-base font-mono">→</span>
          </Link>
        </div>

      </div>

      {/* Fullscreen Expand Lightbox Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white p-6 sm:p-8 space-y-4"
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src={modalProject.image}
                  alt={modalProject.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  {modalProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{modalProject.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{modalProject.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
