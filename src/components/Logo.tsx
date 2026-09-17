import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "dark",
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";
  const logoSrc = isDark ? "/images/logo.png" : "/images/logo-light.png";

  const heightClass =
    size === "sm"
      ? "h-8 sm:h-9"
      : size === "lg"
      ? "h-13 sm:h-14 md:h-16"
      : "h-9 sm:h-10 md:h-11";

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <div className={`relative ${heightClass} aspect-[430/154] w-auto`}>
        <Image
          src={logoSrc}
          alt="TechSmart Systems Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
        />
      </div>
    </div>
  );
}
