import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white border-t border-slate-100 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Information */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-brand-yellow text-slate-950 text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight shadow-md">
              About
            </h2>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-slate-800 leading-relaxed font-normal">
              <p>
                Serving customers since <strong>1999</strong>, TechSmart Systems, based in Kollam, Kerala, is a professional provider of CCTV surveillance, security systems and home automation solutions. We specialize in sales, installation, configuration, maintenance and service for homes, shops, offices, commercial buildings and institutions.
              </p>
              <p>
                With more than <strong>25 years of hands-on industry experience</strong>, our focus is on reliable products, professional installation, practical security solutions and dependable after-sales support.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photo with Rounded-3xl Styling */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-950">
              <div className="relative aspect-[16/11] sm:aspect-[4/5] w-full">
                <Image
                  src="/images/about-security.jpg"
                  alt="TechSmart Systems access control and security system"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Minimal Bottom Label */}
              <div className="p-4 sm:p-5 bg-slate-950/95 backdrop-blur-md text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                    Headquartered in Kollam, Kerala
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                    Punnathanam, Asramam P.O. • Serving Kerala
                  </div>
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-brand-yellow shadow-md flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
