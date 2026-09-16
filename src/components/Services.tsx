"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "CCTV SURVEILLANCE",
      subtitle: "Full HD, IP & AI Smart Camera Solutions",
      description: "HD, IP, AI & smart camera systems for complete 24/7 surveillance coverage, night-vision clarity, and real-time perimeter protection.",
      image: "/images/services/cctv.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "SECURITY SYSTEMS & INTEGRATION",
      subtitle: "Custom Multi-Tier Security Solutions",
      description: "Surveillance and integrated security solutions designed around customer requirements for residential estates, retail shops, and commercial offices.",
      image: "/images/services/security-systems.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "DVR & NVR SYSTEMS",
      subtitle: "High-Capacity Storage & Storage Redundancy",
      description: "High-capacity recording, storage redundancy and remote network access for continuous recording and fast playback retrieval.",
      image: "/images/services/dvr-nvr.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "HOME AUTOMATION",
      subtitle: "Smart Home Touch & Remote Automation",
      description: "Smart home and remote-control solutions for lighting, security gates, appliances, and climate controls accessible via mobile apps.",
      image: "/images/services/home-automation.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "ACCESS CONTROL",
      subtitle: "Smart Locks & RFID Gateways",
      description: "Door access management, smart electromagnetic locks, and RFID security for restricted zones and commercial facilities.",
      image: "/images/services/access-control.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "BIOMETRIC SYSTEMS",
      subtitle: "Facial Recognition & Fingerprint Attendance",
      description: "Facial recognition and fingerprint attendance and secure access solutions for seamless staff management and audit trails.",
      image: "/images/services/biometrics.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.96 7.96 0 001.378 4.5" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "REMOTE MONITORING",
      subtitle: "Live Smartphone App Access Anywhere",
      description: "Mobile viewing and remote surveillance access anytime, anywhere on iOS and Android smartphone apps.",
      image: "/images/services/remote-monitoring.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "INSTALLATION & SERVICE",
      subtitle: "End-to-End On-Site Engineering & Maintenance",
      description: "Complete professional installation, maintenance, configuration and dependable technical support across all districts in Kerala.",
      image: "/images/services/installation.jpg",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white border-t border-b border-slate-200/80 w-full max-w-full overflow-hidden">
      {/* Background Soft Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-slate-100 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200">OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Security & Automation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600">
              Solutions
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Comprehensive security, surveillance, and smart automation systems engineered for lasting reliability and peace of mind.
          </p>

          <div className="w-20 h-1.5 bg-brand-yellow rounded-full mx-auto shadow-sm" />
        </div>

        {/* Compact Service Cards Grid - Minimal distance between distinct cards */}
        <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.number}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full p-5 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-yellow/60 transition-all duration-300"
              >
                {/* Content Block */}
                <div
                  className={`lg:col-span-6 space-y-3 sm:space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* Number with accent badge */}
                    <div className="flex items-center space-x-2 text-amber-600 font-mono font-extrabold text-sm sm:text-base tracking-widest">
                      <span className="px-3 py-1 rounded-lg bg-brand-yellow/20 border border-brand-yellow/50 text-slate-950 font-black">
                        {service.number}
                      </span>
                      <span className="w-8 sm:w-12 h-0.5 bg-brand-yellow" />
                    </div>

                    {/* Service Icon Container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center group-hover:border-brand-yellow group-hover:bg-brand-yellow/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-600 font-mono">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Official WhatsApp Button - Original WhatsApp Brand Green (#25D366 with WHITE text) */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919048171666?text=${encodeURIComponent(
                        `Hello TechSmart Systems, I would like to inquire about your ${service.title} service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 group/wa"
                    >
                      <svg
                        className="w-5 h-5 fill-current text-white flex-shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Inquire on WhatsApp</span>
                      <span className="transform group-hover/wa:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                {/* Image Block with Outer Frame */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="p-1.5 sm:p-2.5 rounded-2xl border border-slate-200 bg-white shadow-md group-hover:shadow-xl group-hover:border-brand-yellow/60 transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner - Perfectly Padded & Aligned */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-brand-yellow font-mono text-xs font-bold uppercase tracking-widest">
              NEED CUSTOM SECURITY ARCHITECTURE?
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              Get a Free On-Site Inspection & Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
              Our experts evaluate your premises in Kollam & Kerala to propose the ideal CCTV and security setup.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex-shrink-0"
          >
            Request Inspection
          </a>
        </div>

      </div>
    </section>
  );
}
