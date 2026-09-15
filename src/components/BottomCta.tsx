import React from "react";

export default function BottomCta() {
  return (
    <section className="py-14 sm:py-20 bg-brand-yellow text-slate-950 w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 w-full">
        {/* Main Heading matching reference */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Schedule A Free Consultation
        </h2>

        {/* Supporting Subtitle */}
        <p className="text-xs sm:text-sm text-slate-900/85 max-w-xl mx-auto leading-relaxed font-medium">
          We craft dependable security systems that blend cutting-edge technology with enduring reliability, keeping your property connected, monitored and secure.
        </p>

        {/* Black Pill CTA Button with arrow matching reference */}
        <div className="pt-2 sm:pt-4 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 sm:py-3 rounded-full bg-slate-950 text-white hover:bg-slate-900 active:scale-95 text-xs font-bold transition-all shadow-md hover:shadow-xl w-full sm:w-auto"
          >
            <span>Get Started</span>
            <span className="w-5 h-5 rounded-full bg-brand-yellow text-slate-950 flex items-center justify-center text-[10px] font-bold">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
