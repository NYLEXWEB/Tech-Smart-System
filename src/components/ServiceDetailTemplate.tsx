"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SchemaOrg from "@/components/SchemaOrg";
import BottomCta from "@/components/BottomCta";
import { ServiceSEOData, SITE_CONFIG } from "@/lib/seo-data";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

interface ServiceDetailTemplateProps {
  service: ServiceSEOData;
}

export default function ServiceDetailTemplate({
  service,
}: ServiceDetailTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = getFaqSchema(service.faqs);

  return (
    <>
      <SchemaOrg schema={serviceSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />

      <div className="pt-24 sm:pt-28 bg-white text-[#111827]">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap"
            >
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <Link
                href="/services"
                className="hover:text-slate-900 transition-colors"
              >
                Services
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="text-slate-900 font-semibold truncate">
                {service.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-slate-950 font-bold text-xs">
                  <span>Service {service.number}</span>
                  <span>•</span>
                  <span>Kollam &amp; All Kerala Districts</span>
                </div>

                <h1 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-[#111827] tracking-tight leading-[1.18]">
                  {service.h1}
                </h1>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all shadow-sm"
                    >
                      <span>Request Free Quote</span>
                      <span>→</span>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello TechSmart Systems, I am looking for information on ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.31a8.196 8.196 0 01-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.5 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.44.06-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.04-.15 2.17-.89 2.48-1.75.3-.86.3-1.6.21-1.75-.09-.15-.25-.23-.5-.36z" />
                      </svg>
                      <span>WhatsApp Chat</span>
                    </a>
                  </motion.div>

                  <a
                    href="tel:04742766666"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-slate-200 hover:bg-slate-300 text-[#111827] text-xs sm:text-sm font-semibold transition-all"
                  >
                    <span>📞 0474 276 6666</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} installation in Kollam, Kerala - TechSmart Systems`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Detailed Narrative & Core Features */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Detailed Description */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D97706] uppercase">
                    ENGINEERING EXCELLENCE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    Why Choose TechSmart Systems for {service.title}
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-[#4B5563] leading-[1.7] space-y-4">
                  <p>{service.longDescription}</p>
                </div>

                {/* Key Features List */}
                <div className="pt-4 space-y-3">
                  <h3 className="text-lg font-bold text-[#111827]">
                    Key Capabilities &amp; System Highlights
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supported Brands */}
                {service.supportedBrands && service.supportedBrands.length > 0 && (
                  <div className="pt-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Trusted Brands We Install &amp; Service:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.supportedBrands.map((brand, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar: Technical Specs & Industry Applications */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Technical Specifications Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4 text-left">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#111827]">
                      Technical Specifications
                    </h3>
                  </div>

                  <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {service.specifications.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-2.5 flex justify-between gap-4 first:pt-0 last:pb-0"
                      >
                        <span className="text-slate-500 font-medium">
                          {spec.label}
                        </span>
                        <span className="text-slate-900 font-semibold text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications / Sectors Card */}
                <div className="p-6 rounded-2xl bg-[#FFFDF5] border border-amber-200 shadow-xs space-y-4 text-left">
                  <div className="flex items-center gap-2 border-b border-amber-200 pb-3">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#111827]">
                      Recommended Applications
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <span className="text-[#D97706] font-bold">✓</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Consultation Box */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md space-y-3 text-left">
                  <span className="text-[11px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Kollam Engineering Office
                  </span>
                  <div className="text-lg font-bold">
                    Need a tailored site inspection?
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Our technical engineers are available Monday to Saturday (9:00 AM – 7:00 PM) for on-site property evaluations across Kerala.
                  </p>
                  <div className="pt-2">
                    <a
                      href="tel:+919048171666"
                      className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Call +91 9048 171 666
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/70">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 space-y-2">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D97706] uppercase">
                  COMMON QUESTIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                  Frequently Asked Questions About {service.title}
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;

                  return (
                    <div
                      key={fIdx}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isOpen
                          ? "bg-white border-amber-300 shadow-sm border-l-4 border-l-[#F59E0B]"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-semibold text-slate-900">
                          {faq.question}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                            isOpen
                              ? "bg-[#F59E0B] text-slate-950 rotate-180"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Related Services Internal Linking Silo */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <section className="py-12 sm:py-16 bg-white border-b border-slate-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 space-y-1">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D97706] uppercase">
                  INTEGRATED SECURITY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  Related Security &amp; Automation Services
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.relatedServices.map((rel, rIdx) => (
                  <Link
                    key={rIdx}
                    href={`/services/${rel.slug}`}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-[#FFFDF5] border border-slate-200 hover:border-amber-300 transition-all text-left space-y-2 group shadow-xs hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#D97706]">
                        EXPLORE →
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#D97706] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      {rel.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <BottomCta />
      </div>
    </>
  );
}
