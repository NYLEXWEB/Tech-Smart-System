import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "CCTV SURVEILLANCE",
      description: "HD, IP, AI & smart camera systems for complete 24/7 surveillance coverage.",
      image: "/images/services/cctv.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "SECURITY SYSTEMS & INTEGRATION",
      description: "Surveillance and integrated security solutions designed around customer requirements.",
      image: "/images/services/security-systems.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "DVR & NVR SYSTEMS",
      description: "High-capacity recording, storage redundancy and remote network access.",
      image: "/images/services/dvr-nvr.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "HOME AUTOMATION",
      description: "Smart home and remote-control solutions for lighting, security, and appliances.",
      image: "/images/services/home-automation.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "ACCESS CONTROL",
      description: "Door access management, smart electromagnetic locks, and RFID security.",
      image: "/images/services/access-control.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "BIOMETRIC SYSTEMS",
      description: "Facial recognition and fingerprint attendance and secure access solutions.",
      image: "/images/services/biometrics.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.96 7.96 0 001.378 4.5" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "REMOTE MONITORING",
      description: "Mobile viewing and remote surveillance access anytime, anywhere on smartphone apps.",
      image: "/images/services/remote-monitoring.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "08",
      title: "INSTALLATION & SERVICE",
      description: "Complete professional installation, maintenance, configuration and dependable technical support.",
      image: "/images/services/installation.jpg",
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-28 bg-white border-t border-slate-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4">
          <div className="inline-block px-5 py-2 sm:px-8 sm:py-3.5 rounded-xl bg-brand-yellow text-slate-950 text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight shadow-md">
            OUR SERVICES
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Security & Automation Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Comprehensive security, surveillance, and automation solutions engineered for lasting performance.
          </p>
        </div>

        {/* Alternating Zig-Zag Rows matching exact screenshot reference */}
        <div className="space-y-14 sm:space-y-24 lg:space-y-32 max-w-6xl mx-auto w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center w-full"
              >
                {/* Content Block */}
                <div
                  className={`lg:col-span-6 space-y-3 sm:space-y-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* Number with accent line */}
                    <div className="flex items-center space-x-2 text-brand-yellow font-bold text-xs sm:text-sm tracking-wider">
                      <span>{service.number}</span>
                      <span className="w-6 sm:w-8 h-0.5 bg-brand-yellow" />
                    </div>

                    {/* Icon Button Badge */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-brand-yellow/50 bg-white shadow-sm flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title in Heavy Uppercase */}
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight uppercase leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-2 sm:pt-3">
                    <a
                      href={`https://wa.me/919048171666?text=${encodeURIComponent(
                        `Hello TechSmart Systems, I would like to inquire about your ${service.title} service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Inquire on WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Image Block with Custom Outline Ring */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem] border-2 border-brand-yellow/80 bg-white shadow-lg sm:shadow-xl transition-transform duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
                    <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-[1.6rem] overflow-hidden bg-slate-950">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
