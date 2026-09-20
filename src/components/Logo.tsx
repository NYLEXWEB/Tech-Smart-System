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
  const logoSrc = isDark ? "/images/logo-new.png" : "/images/logo-light.png";

  const heightClass =
    size === "sm"
      ? "h-[36px] sm:h-[40px]"
      : size === "lg"
        ? "h-[54px] xs:h-[62px] sm:h-[68px] md:h-[76px]"
        : "h-[44px] xs:h-[48px] sm:h-[52px] md:h-[56px]";

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <div className={`relative ${heightClass} aspect-[430/154] w-auto`}>
        <Image
          src={logoSrc}
          alt="TechSmart Systems - CCTV & Security Solutions Kollam Kerala"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
        />
      </div>
    </div>
  );
}
