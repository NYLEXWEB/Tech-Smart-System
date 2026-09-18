import type { Metadata, Viewport } from "next";
import { Inter, Caveat, Lora, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${lora.variable} ${dmSans.variable} font-sans`}
    >
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
