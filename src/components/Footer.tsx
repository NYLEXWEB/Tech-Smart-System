import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white text-[#111827] border-t border-slate-200/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block">
              <Logo variant="dark" size="lg" />
            </Link>
            <p className="text-xs uppercase tracking-[0.1em] text-[#D97706] font-bold">
              Think Smart. Stay Secure.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm leading-relaxed font-normal">
              Serving customers since 1999, based in Kollam, Kerala. Professional provider of CCTV surveillance, security systems and home automation solutions for homes, businesses, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563] font-medium">
              <li>
                <Link href="/about" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/social" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Social Channels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F59E0B] transition-colors block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Office Info
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
              <p className="leading-relaxed">
                <strong className="text-[#111827] block font-semibold">TechSmart Systems</strong>
                Punnathanam, Asramam P.O. <br />
                Kollam, Kerala – 691002
              </p>
              <div className="pt-1 space-y-1">
                <div>
                  <span className="text-[#6B7280] mr-1.5 font-medium">Landline:</span>
                  <a href="tel:04742766666" className="text-[#111827] font-semibold hover:text-[#F59E0B] transition-colors">
                    0474 276 6666
                  </a>
                </div>
                <div>
                  <span className="text-[#6B7280] mr-1.5 font-medium">Mobile:</span>
                  <a href="tel:+919048171666" className="text-[#D97706] font-bold hover:underline">
                    +91 9048 171 666
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right: Interactive Google Map Integration Box */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Location Map
            </h4>
            <div className="relative w-full h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="TechSmart Systems Kollam Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7770932029964!2d76.5866!3d8.8932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc58c7349191%3A0x889df58b5490bf70!2sAsramam%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=TechSmart+Systems+Asramam+Kollam+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] font-semibold text-[#D97706] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2 text-center sm:text-left font-medium">
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
