import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white text-[#111827] border-t border-slate-200/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="dark" size="lg" />
            </Link>
            <p className="text-xs uppercase tracking-[0.1em] text-[#D97706] font-bold">
              Think Smart. Stay Secure.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm leading-[1.65] font-normal">
              Serving customers since 1999, based in Kollam, Kerala. Professional provider of CCTV surveillance, security systems and home automation solutions for homes, businesses, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563] font-medium">
              <li>
                <Link href="/about" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  About TechSmart Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Security & Automation Services
                </Link>
              </li>
              <li>
                <Link href="/social" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Social Media & Official Channels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Contact & Head Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Office Information
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#4B5563]">
              <p className="leading-[1.65]">
                <strong className="text-[#111827] block font-semibold">TechSmart Systems</strong>
                Punnathanam, Asramam P.O. <br />
                Kollam, Kerala – 691002
              </p>
              <div className="pt-1 space-y-1.5">
                <div>
                  <span className="text-[#6B7280] mr-2 font-medium">Landline:</span>
                  <a href="tel:04742766666" className="text-[#111827] font-semibold hover:text-[#F59E0B] transition-colors">
                    0474 276 6666
                  </a>
                </div>
                <div>
                  <span className="text-[#6B7280] mr-2 font-medium">Mobile:</span>
                  <a href="tel:+919048171666" className="text-[#D97706] font-bold hover:underline">
                    +91 9048 171 666
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:techsmartsystemskollam@gmail.com"
                    className="text-[#4B5563] hover:text-[#111827] underline transition-colors break-all"
                  >
                    techsmartsystemskollam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-3 text-center sm:text-left font-medium">
          <div>
            © {new Date().getFullYear()} TechSmart Systems. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <span>Kollam, Kerala, India</span>
            <span>•</span>
            <span className="text-[#D97706] font-semibold">Think Smart. Stay Secure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
