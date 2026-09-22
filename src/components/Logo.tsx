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
      ? "h-[38px] sm:h-[44px]"
      : size === "lg"
        ? "h-[58px] xs:h-[66px] sm:h-[74px] md:h-[84px]"
        : "h-[46px] xs:h-[52px] sm:h-[58px] md:h-[64px]";

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <div className={`relative ${heightClass} aspect-[430/154] w-auto`}>
        <Image
          src={logoSrc}
          alt="TechSmart Systems - CCTV & Security Solutions Kollam Kerala"
          fill
          priority
          className="object-contain object-left scale-105 origin-left"
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 320px"
        />
      </div>
    </div>
  );
}
