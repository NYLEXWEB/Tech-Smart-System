import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "CCTV Camera Installation", href: "/services/cctv-installation" },
    { name: "Security Systems & Alarms", href: "/services/security-systems" },
    { name: "DVR & NVR Storage Solutions", href: "/services/dvr-nvr" },
    { name: "Smart Home Automation", href: "/services/home-automation" },
    { name: "Door Access Control Systems", href: "/services/access-control" },
    { name: "Biometric Attendance Systems", href: "/services/biometric-attendance" },
    { name: "Remote CCTV Monitoring", href: "/services/remote-monitoring" },
    { name: "Automatic Gate Automation", href: "/services/gate-automation" },
    { name: "Video Door Phones & Intercom", href: "/services/video-door-phone" },
    { name: "CCTV Maintenance & AMC", href: "/services/cctv-maintenance-amc" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/services" },
    { name: "Products Catalog", href: "/products" },
    { name: "Brand Partners", href: "/brands" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "Clients & Projects", href: "/clients" },
    { name: "Social Channels", href: "/social" },
    { name: "Contact & Quotes", href: "/contact" },
  ];

  return (
    <footer className="bg-white text-[#111827] border-t border-slate-200/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block">
              <Logo variant="dark" size="lg" />
            </Link>
            <p className="text-xs uppercase tracking-[0.1em] text-[#D97706] font-bold">
              Think Smart. Stay Secure.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm leading-relaxed font-normal">
              Serving customers since 1999, based in Asramam, Kollam, Kerala. Professional engineering provider of CCTV surveillance, security systems, biometric access control, and smart automation across Kerala.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20would%20like%20to%20request%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>💬 Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Security Solutions
            </h3>
            <ul className="space-y-1.5 text-xs text-[#4B5563] font-medium">
              {services.map((svc, idx) => (
                <li key={idx}>
                  <Link
                    href={svc.href}
                    className="hover:text-[#F59E0B] transition-colors block py-0.5"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-xs text-[#4B5563] font-medium">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F59E0B] transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Box */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#111827]">
              Head Office (Kollam)
            </h3>
            <address className="not-italic space-y-2 text-xs text-[#4B5563]">
              <p className="leading-relaxed">
                <strong className="text-[#111827] block font-semibold">TechSmart Systems</strong>
                Punnathanam, Asramam P.O. <br />
                Kollam, Kerala – 691002, India
              </p>
              <div className="space-y-1 pt-1">
                <div>
                  <span className="text-[#6B7280] mr-1.5 font-medium">Landline:</span>
                  <a
                    href="tel:04742766666"
                    className="text-[#111827] font-semibold hover:text-[#F59E0B] transition-colors"
                  >
                    0474 276 6666
                  </a>
                </div>
                <div>
                  <span className="text-[#6B7280] mr-1.5 font-medium">Mobile:</span>
                  <a
                    href="tel:+919048171666"
                    className="text-[#D97706] font-bold hover:underline"
                  >
                    +91 9048 171 666
                  </a>
                </div>
                <div>
                  <span className="text-[#6B7280] mr-1.5 font-medium">Email:</span>
                  <a
                    href="mailto:techsmartsystemskollam@gmail.com"
                    className="text-slate-800 hover:text-[#F59E0B] transition-colors break-all"
                  >
                    techsmartsystemskollam@gmail.com
                  </a>
                </div>
              </div>
            </address>

            {/* Google Map Box */}
            <div className="pt-1">
              <div className="relative w-full h-24 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
                <iframe
                  title="TechSmart Systems Asramam Kollam Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7770932029964!2d76.5866!3d8.8932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc58c7349191%3A0x889df58b5490bf70!2sAsramam%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://g.page/r/CQwMc7jkVInPEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-semibold text-[#D97706] hover:underline mt-1"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2 text-center sm:text-left font-medium">
          <div>
            © {currentYear} TechSmart Systems. All rights reserved. Serving Kollam &amp; all Kerala districts since 1999.
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
