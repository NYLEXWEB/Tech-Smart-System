import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404) | TechSmart Systems Kollam",
  description:
    "The requested page could not be found. Explore our CCTV camera installation, security systems, biometric access control, and smart automation services across Kerala.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularServices = [
    { title: "CCTV Camera Installation", href: "/services/cctv-installation" },
    { title: "DVR & NVR Storage", href: "/services/dvr-nvr" },
    { title: "Door Access Control", href: "/services/access-control" },
    { title: "Biometric Attendance Systems", href: "/services/biometric-attendance" },
    { title: "Smart Home Automation", href: "/services/home-automation" },
    { title: "Automatic Gate Automation", href: "/services/gate-automation" },
    { title: "Video Door Phones", href: "/services/video-door-phone" },
    { title: "CCTV Maintenance & AMC", href: "/services/cctv-maintenance-amc" },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white min-h-[85vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge & Big 404 Visual */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span>404 Error • Page Not Found</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tight">
            4<span className="text-[#F59E0B]">0</span>4
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Looks like this page has moved or doesn&apos;t exist.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            The link you followed may be broken, or the page may have been relocated.
            Use the links below to explore our security services or connect directly with our engineers in Kollam.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>← Back to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-amber-500 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Explore All Services</span>
          </Link>

          <a
            href="https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20need%20assistance%20finding%20a%20security%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
          >
            <span>WhatsApp Support</span>
          </a>
        </div>

        {/* Quick Links to Popular Services */}
        <div className="pt-8 border-t border-slate-200 text-left max-w-2xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500 text-center">
            Popular Security Solutions
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {popularServices.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.href}
                className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-300 transition-all flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800 hover:text-slate-950 group"
              >
                <span>{svc.title}</span>
                <span className="text-slate-400 group-hover:text-amber-600 transform group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
