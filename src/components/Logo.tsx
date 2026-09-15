import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // dark = dark text for light background, light = white text for dark background
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 8 radiating rays matching the brand mark */}
      <polygon points="50,42 45,10 50,0 55,10" fill="#F5A800" />
      <polygon points="56,44 80,18 90,14 74,32" fill="#4B5563" />
      <polygon points="58,50 90,45 100,50 90,55" fill="#374151" />
      <polygon points="56,56 74,68 90,86 80,82" fill="#F5A800" />
      <polygon points="50,58 55,90 50,100 45,90" fill="#374151" />
      <polygon points="44,56 26,68 10,86 20,82" fill="#4B5563" />
      <polygon points="42,50 10,55 0,50 10,45" fill="#374151" />
      <polygon points="44,44 20,18 10,14 26,32" fill="#4B5563" />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "dark",
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/logo-dark.png" : "/images/logo-light.png";

  const heightClass =
    size === "sm"
      ? "h-7 sm:h-8"
      : size === "lg"
      ? "h-10 sm:h-12 md:h-14"
      : "h-8 sm:h-9 md:h-10";

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <div className={`relative ${heightClass} aspect-[280/99] w-auto`}>
        <Image
          src={logoSrc}
          alt="TechSmart Systems Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
        />
      </div>
    </div>
  );
}
