import { SITE_CONFIG, ServiceSEOData } from "./seo-data";

/**
 * Returns structured Organization JSON-LD Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo-bg.png`,
    foundingDate: `${SITE_CONFIG.foundingYear}`,
    description:
      "Professional provider of CCTV surveillance, security systems, biometric access control, and smart home automation solutions in Kollam, Kerala since 1999.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.contact.landlineTel,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ml"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.contact.mobileTel,
        contactType: "technical support",
        areaServed: "IN",
        availableLanguage: ["en", "ml"],
      },
    ],
    sameAs: [
      "https://maps.google.com/?q=TechSmart+Systems+Asramam+Kollam+Kerala",
    ],
  };
}

/**
 * Returns structured WebSite JSON-LD Schema with SearchAction
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description:
      "CCTV Camera Installation, Security Systems, Biometric Attendance & Smart Home Automation in Kollam, Kerala.",
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Returns structured LocalBusiness / SecuritySystem JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecuritySystem", "ProfessionalService"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo-bg.png`,
    image: `${SITE_CONFIG.url}/images/techsmart-systems-cctv-security-kollam-hero.png`,
    description:
      "Serving customers since 1999 in Kollam, Kerala. Professional provider of CCTV surveillance, security systems, DVR/NVR storage, biometric access control, and smart home automation.",
    telephone: SITE_CONFIG.contact.landline,
    email: SITE_CONFIG.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking, Cheque",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: SITE_CONFIG.serviceAreas.map((city) => ({
      "@type": "AdministrativeArea",
      name: `${city}, Kerala`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Security & Automation Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Camera Installation & Surveillance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Systems & Intrusion Alarms",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DVR & NVR Storage Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Home & Building Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Door Access Control & Smart Door Locks",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Biometric Attendance Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remote CCTV Monitoring",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Maintenance & AMC Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatic Gate Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Door Phone Systems",
          },
        },
      ],
    },
    knowsAbout: [
      "CCTV Camera Installation",
      "IP Surveillance Systems",
      "4K Night Vision Security Cameras",
      "Biometric Attendance Machines",
      "AI Face Recognition Systems",
      "Smart Home Automation",
      "Motorized Gate Automation",
      "Door Access Control Systems",
      "Video Door Phone Intercoms",
      "CCTV AMC & Repair Maintenance",
      "DVR and NVR Storage Redundancy",
      "Intruder Burglar Alarm Systems",
    ],
    sameAs: [
      "https://maps.google.com/?q=TechSmart+Systems+Asramam+Kollam+Kerala",
    ],
  };
}

/**
 * Returns structured Service JSON-LD Schema
 */
export function getServiceSchema(service: ServiceSEOData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@id": `${SITE_CONFIG.url}/#localbusiness`,
    },
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, Kerala`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Options`,
      itemListElement: service.features.map((feat) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feat,
        },
      })),
    },
  };
}

/**
 * Returns structured BreadcrumbList JSON-LD Schema
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.url}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };
}

/**
 * Returns structured FAQPage JSON-LD Schema
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Returns ItemList JSON-LD Schema for products or brands
 */
export function getItemListSchema(
  title: string,
  items: { name: string; description?: string; image?: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.image && { image: `${SITE_CONFIG.url}${item.image}` }),
      ...(item.url && { url: item.url }),
    })),
  };
}
