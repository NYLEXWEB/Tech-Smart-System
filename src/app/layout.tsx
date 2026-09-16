import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600", "700"],
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
      className={`${inter.variable} ${caveat.variable} font-sans`}
    >
      <body className="bg-white text-[#4B5563] antialiased selection:bg-[#F59E0B] selection:text-[#111827] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
