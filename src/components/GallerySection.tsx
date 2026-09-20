"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
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
    description: "Advanced 4K HD security surveillance camera installation in Kerala.",
    image: "/images/gallery/cctv-security-camera-installation-kollam.png",
  },
  {
    id: 2,
    title: "IT Infrastructure Setup",
    category: "IT & Networking",
    subtitle: "High-Speed Server Racks",
    description: "Structured high-speed network cabling and server enclosures in Kollam.",
    image: "/images/gallery/it-infrastructure-server-rack-networking.png",
  },
  {
    id: 3,
    title: "Solar Panel Installation",
    category: "Solar Systems",
    subtitle: "Renewable Power Backup",
    description: "Clean photovoltaic solar energy grid for luxury commercial estates.",
    image: "/images/gallery/commercial-solar-power-backup-system.png",
  },
  {
    id: 4,
    title: "Networking Solutions",
    category: "IT & Networking",
    subtitle: "Data Center Cabling",
    description: "Enterprise gigabit network routing and optical fiber links across Kerala.",
    image: "/images/gallery/enterprise-data-center-network-cabling.png",
  },
  {
    id: 5,
    title: "Commercial Installations",
    category: "Office Setups",
    subtitle: "Corporate Facilities",
    description: "Integrated biometric access control and smart lighting systems in Kollam.",
    image: "/images/gallery/commercial-biometric-access-control-setup.png",
  },
  {
    id: 6,
    title: "Enterprise Surveillance Hub",
    category: "CCTV",
    subtitle: "24/7 AI Analytics",
    description: "Centralized multi-channel security video wall with instant mobile alerts.",
    image: "/images/gallery/enterprise-cctv-surveillance-monitoring-hub.png",
  },
  {
    id: 7,
    title: "Smart Office Automation",
    category: "Office Setups",
    subtitle: "Touchless Control",
    description: "Automated climate, gate entry, and smart conference room systems.",
    image: "/images/gallery/smart-office-automation-conference-controls.png",
  },
  {
    id: 8,
    title: "Solar Rooftop Grid",
    category: "Solar Systems",
    subtitle: "Eco Energy Backup",
    description: "High-efficiency solar array for zero-downtime security operations.",
    image: "/images/gallery/rooftop-solar-grid-installation-kerala.png",
  },
  {
    id: 9,
    title: "4K Night Vision CCTV",
    category: "CCTV",
    subtitle: "Perimeter Protection",
    description: "Ultra HD infrared dome cameras for complete residential night security.",
    image: "/images/gallery/ultra-hd-4k-night-vision-cctv-camera.png",
  },
  {
    id: 10,
    title: "Biometric Access Control",
    category: "Office Setups",
    subtitle: "Facial Recognition",
    description: "Touchless staff attendance and electronic smart lock gateways.",
    image: "/images/gallery/biometric-facial-recognition-smart-locks.png",
  },
];

// Mobile Auto-Scrolling Row Component with Touch & Drag Support
function MobileGalleryRow({
  items,
  direction = "left",
  onItemClick,
}: {
  items: ProjectItem[];
  direction?: "left" | "right";
  onItemClick: (item: ProjectItem) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (direction === "right" && el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    let animationFrameId: number;
    const speed = 0.75;

    const step = () => {
      if (!isInteractingRef.current && el) {
        if (direction === "left") {
          el.scrollLeft += speed;
          if (el.scrollLeft >= (el.scrollWidth * 2) / 3) {
            el.scrollLeft -= el.scrollWidth / 3;
          }
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) {
            el.scrollLeft += el.scrollWidth / 3;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [direction]);

  const handleTouchStart = () => {
    isInteractingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1200);
  };

  const displayItems = [...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      className="flex gap-3.5 overflow-x-auto no-scrollbar py-1 select-none"
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {displayItems.map((item, idx) => (
        <div
          key={`${item.id}-${idx}`}
          onClick={() => onItemClick(item)}
          className="relative w-[260px] h-[165px] flex-shrink-0 rounded-lg overflow-hidden shadow-md border border-slate-200/90 cursor-pointer active:scale-98 transition-transform bg-slate-900 group"
        >
          <Image
            src={item.image}
            alt={`${item.title} - ${item.subtitle} | TechSmart Systems Kerala`}
            fill
            sizes="260px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % ALL_PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

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

  const currentProject = ALL_PROJECTS[activeIndex] || ALL_PROJECTS[0];

  const getProjectAtOffset = (offset: number) => {
    const len = ALL_PROJECTS.length;
    const index = (activeIndex + offset + len * 10) % len;
    return ALL_PROJECTS[index];
  };

  const mobileRow1 = ALL_PROJECTS.slice(0, 5);
  const mobileRow2 = ALL_PROJECTS.slice(5, 10);

  return (
    <section
      id="gallery"
      className="relative py-10 sm:py-16 bg-[#F8F8F6] border-t border-b border-slate-200/70 w-full max-w-full overflow-hidden text-slate-900 select-none"
    >
      {/* Side Decorative Watermarks */}
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
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2.5"
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
          <h2 className="font-dmsans font-medium text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Project{" "}
            <span className="text-[#F9B900]">
              Gallery
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            A glimpse of the solutions we build, install and support across Kerala.<br className="hidden sm:inline" /> Real projects. Real impact.
          </p>
        </motion.div>

        {/* Desktop 3D Coverflow Carousel Container */}
        <div
          className="hidden sm:flex relative min-h-[440px] lg:min-h-[500px] items-center justify-center mb-6 overflow-visible"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center w-full max-w-6xl px-4 perspective-1000">
            
            {/* Outer Left Card (-2) */}
            {getProjectAtOffset(-2) && (
              <div
                onClick={() => setActiveIndex((prev) => (prev - 2 + ALL_PROJECTS.length) % ALL_PROJECTS.length)}
                style={{
                  transform: "perspective(1000px) rotateY(26deg) scale(0.82) translateZ(-40px)",
                  transformOrigin: "right center",
                }}
                className="relative w-48 md:w-52 h-[330px] md:h-[370px] rounded-lg overflow-hidden border border-slate-300/80 shadow-xl cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -mr-6 z-0 group"
              >
                <Image
                  src={getProjectAtOffset(-2)!.image}
                  alt={`${getProjectAtOffset(-2)!.title} - ${getProjectAtOffset(-2)!.subtitle} | TechSmart Systems Kerala`}
                  fill
                  sizes="220px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}

            {/* Inner Left Card (-1) */}
            {getProjectAtOffset(-1) && (
              <div
                onClick={() => prevSlide()}
                style={{
                  transform: "perspective(1000px) rotateY(18deg) scale(0.9) translateZ(-10px)",
                  transformOrigin: "right center",
                }}
                className="relative w-56 md:w-64 h-[370px] md:h-[410px] rounded-lg sm:rounded-xl overflow-hidden border border-slate-300/90 shadow-2xl cursor-pointer opacity-90 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -mr-4 z-10 group"
              >
                <Image
                  src={getProjectAtOffset(-1)!.image}
                  alt={`${getProjectAtOffset(-1)!.title} - ${getProjectAtOffset(-1)!.subtitle} | TechSmart Systems Kerala`}
                  fill
                  sizes="260px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}

            {/* MAIN CENTER FEATURED CARD (0) */}
            {currentProject && (
              <motion.div
                key={currentProject.id}
                layout
                initial={{ opacity: 0.9, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setModalProject(currentProject)}
                className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-[410px] md:h-[470px] rounded-xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-950 flex-shrink-0 z-30 group shadow-slate-400/20 cursor-pointer"
              >
                <Image
                  src={currentProject.image}
                  alt={`${currentProject.title} - ${currentProject.subtitle} | TechSmart Systems Kerala`}
                  fill
                  sizes="(max-width: 1024px) 640px, 780px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </motion.div>
            )}

            {/* Inner Right Card (+1) */}
            {getProjectAtOffset(1) && (
              <div
                onClick={() => nextSlide()}
                style={{
                  transform: "perspective(1000px) rotateY(-18deg) scale(0.9) translateZ(-10px)",
                  transformOrigin: "left center",
                }}
                className="relative w-56 md:w-64 h-[370px] md:h-[410px] rounded-lg sm:rounded-xl overflow-hidden border border-slate-300/90 shadow-2xl cursor-pointer opacity-90 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -ml-4 z-10 group"
              >
                <Image
                  src={getProjectAtOffset(1)!.image}
                  alt={`${getProjectAtOffset(1)!.title} - ${getProjectAtOffset(1)!.subtitle} | TechSmart Systems Kerala`}
                  fill
                  sizes="260px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}

            {/* Outer Right Card (+2) */}
            {getProjectAtOffset(2) && (
              <div
                onClick={() => setActiveIndex((prev) => (prev + 2) % ALL_PROJECTS.length)}
                style={{
                  transform: "perspective(1000px) rotateY(-26deg) scale(0.82) translateZ(-40px)",
                  transformOrigin: "left center",
                }}
                className="relative w-48 md:w-52 h-[330px] md:h-[370px] rounded-lg overflow-hidden border border-slate-300/80 shadow-xl cursor-pointer opacity-75 hover:opacity-100 transition-all duration-500 bg-slate-950 flex-shrink-0 -ml-6 z-0 group"
              >
                <Image
                  src={getProjectAtOffset(2)!.image}
                  alt={`${getProjectAtOffset(2)!.title} - ${getProjectAtOffset(2)!.subtitle} | TechSmart Systems Kerala`}
                  fill
                  sizes="220px"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}

          </div>
        </div>

        {/* Desktop Carousel Navigation Controls */}
        <div className="hidden sm:flex items-center justify-center gap-6 mt-4 mb-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-[#F9B900] hover:text-slate-950 hover:border-amber-400 shadow-sm flex items-center justify-center transition-all cursor-pointer font-bold text-lg"
            aria-label="Previous Project Slide"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {ALL_PROJECTS.map((_, idx) => (
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
            aria-label="Next Project Slide"
          >
            ›
          </button>
        </div>

        {/* Dedicated Mobile View: 2 Auto-Scrolling Lines with Touch Drag Control */}
        <div className="sm:hidden w-full space-y-3.5 my-2">
          <MobileGalleryRow
            items={mobileRow1}
            direction="left"
            onItemClick={(item) => setModalProject(item)}
          />

          <MobileGalleryRow
            items={mobileRow2}
            direction="right"
            onItemClick={(item) => setModalProject(item)}
          />
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
              className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 text-white p-4 sm:p-6 space-y-4"
            >
              <button
                onClick={() => setModalProject(null)}
                aria-label="Close Lightbox Modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center text-lg font-bold transition-all cursor-pointer z-10"
              >
                ✕
              </button>

              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-950">
                <Image
                  src={modalProject.image}
                  alt={`${modalProject.title} - ${modalProject.subtitle} | TechSmart Systems Kerala`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              <div className="text-left space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {modalProject.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {modalProject.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
