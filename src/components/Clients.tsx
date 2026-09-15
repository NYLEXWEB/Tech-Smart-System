import React from "react";

export default function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-white border-t border-slate-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Inspiring Client Experiences
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Join us and become our next success story across Kerala
          </p>
        </div>

        {/* 3 Cards Row matching the reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch w-full">
          {/* Card 1: Solid Yellow Accent Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-yellow text-slate-950 flex flex-col justify-between shadow-md">
            <div>
              {/* 5 Stars */}
              <div className="flex items-center space-x-1 text-slate-950 text-sm">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono mt-3">
                700+ Clients
              </div>
              <p className="text-xs text-slate-900/90 mt-3 sm:mt-4 leading-relaxed font-medium">
                Serving homes, businesses, and government institutions with dependable surveillance and automation since 1999.
              </p>
            </div>

            {/* Avatar Group & Count */}
            <div className="pt-6 sm:pt-8 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full bg-slate-950 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-brand-yellow">
                  TS
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-slate-900 text-brand-yellow font-bold text-[10px] flex items-center justify-center ring-2 ring-brand-yellow">
                  KL
                </div>
                <div className="inline-block h-8 w-8 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-brand-yellow">
                  +
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-950 font-mono">700+</div>
                <div className="text-[10px] text-slate-900 font-medium">Trusted in Kerala</div>
              </div>
            </div>
          </div>

          {/* Card 2: White Testimonial / Milestone Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-3xl font-serif text-brand-yellow font-bold leading-none">
                “
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 sm:mt-3 leading-relaxed">
                In 2002, TechSmart Systems undertook CCTV surveillance work for the <strong>Kollam District Police</strong>, covering Kollam Railway Station, KSRTC and Private Bus Stands across the city.
              </p>
            </div>

            <div className="pt-5 sm:pt-6 flex items-center gap-3 border-t border-slate-100 mt-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
                KP
              </div>
              <div>
                <div className="text-xs font-bold text-slate-950">Kollam District Police</div>
                <div className="text-[10px] text-slate-500">Public Security Project</div>
              </div>
            </div>
          </div>

          {/* Card 3: White Testimonial / Enterprise Clients Card */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-3xl font-serif text-brand-yellow font-bold leading-none">
                “
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 sm:mt-3 leading-relaxed">
                Trusted by <strong>Diya Group</strong>, <strong>MAKS Automation</strong>, and <strong>Sun Builders</strong> for commercial security, DVR/NVR setups, biometric access, and dependable after-sales maintenance.
              </p>
            </div>

            <div className="pt-5 sm:pt-6 flex items-center gap-3 border-t border-slate-100 mt-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
                DG
              </div>
              <div>
                <div className="text-xs font-bold text-slate-950">Diya Group & MAKS Automation</div>
                <div className="text-[10px] text-slate-500">Commercial & Industrial Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Control Buttons matching reference */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            aria-label="Previous"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-black transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-black transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
