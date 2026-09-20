import type { Metadata, Viewport } from "next";
import { Inter, Caveat, Lora, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import SchemaOrg from "@/components/SchemaOrg";
import {
  SITE_CONFIG,
} from "@/lib/seo-data";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "TechSmart Systems | CCTV • Security Systems • Home Automation Kollam",
    template: "%s | TechSmart Systems",
  },
  description:
    "Serving customers since 1999 in Kollam, Kerala. Professional provider of CCTV surveillance, security systems, DVR/NVR storage, biometric access control, and smart home automation solutions.",
  keywords: [
    "TechSmart Systems",
    "CCTV camera installation near me",
    "CCTV camera installation Kollam",
    "CCTV camera price in Kerala with installation",
    "best CCTV dealers in Kollam",
    "Hikvision CCTV dealer Kollam",
    "CP PLUS CCTV camera Kerala",
    "wireless CCTV camera for home Kerala",
    "4K IP camera installation Kollam",
    "CCTV repair service near me Kollam",
    "CCTV AMC service Kerala",
    "biometric attendance machine price in Kerala",
    "eSSL biometric machine dealers in Kollam",
    "facial recognition attendance system Kerala",
    "smart home automation in Kerala price",
    "home automation companies in Kollam",
    "smart door lock with fingerprint Kerala",
    "door access control system Kollam",
    "automatic sliding gate motor price in Kerala",
    "automatic gate installation Kollam",
    "video door phone for home Kerala",
    "remote CCTV monitoring on mobile",
    "CCTV installation Karunagappally",
    "CCTV installation Kottarakkara",
    "CCTV installation Kundara",
    "CCTV installation Paravur Kollam",
    "CCTV installation Chathannoor",
    "CCTV camera installation Trivandrum Kerala",
    "security systems Kollam Kerala",
    "Kollam District Police CCTV project",
  ],
  authors: [{ name: "TechSmart Systems", url: SITE_CONFIG.url }],
  creator: "TechSmart Systems",
  publisher: "TechSmart Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "TechSmart Systems | CCTV & Security Systems in Kollam, Kerala",
    description:
      "Serving customers since 1999 in Kollam, Kerala. Professional provider of CCTV surveillance, security systems, biometric access control, and smart home automation.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/techsmart-systems-cctv-security-kollam-hero.png",
        width: 1200,
        height: 630,
        alt: "TechSmart Systems - CCTV & Security Solutions in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSmart Systems | CCTV & Security Systems Kollam, Kerala",
    description:
      "Serving customers since 1999 in Kollam, Kerala. Professional provider of CCTV surveillance, security systems, and smart home automation.",
    images: ["/images/techsmart-systems-cctv-security-kollam-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${lora.variable} ${dmSans.variable} font-sans`}
    >
      <head>
        <SchemaOrg schema={organizationSchema} />
        <SchemaOrg schema={webSiteSchema} />
        <SchemaOrg schema={localBusinessSchema} />
      </head>
      <body className="bg-white text-[#4B5563] antialiased selection:bg-[#F59E0B] selection:text-[#111827] min-h-screen flex flex-col font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
