import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TechSmart Systems | CCTV • Security Systems • Home Automation",
  description:
    "Serving customers since 1999 in Kollam, Kerala. Professional provider of CCTV surveillance, security systems, DVR/NVR, access control, and home automation solutions.",
  keywords: [
    "TechSmart Systems",
    "CCTV Surveillance Kollam",
    "Security Systems Kerala",
    "Home Automation",
    "Access Control",
    "Biometric Systems",
    "Kollam District Police CCTV",
  ],
  authors: [{ name: "TechSmart Systems" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="bg-white text-brand-charcoal-900 antialiased selection:bg-brand-yellow selection:text-brand-charcoal-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
