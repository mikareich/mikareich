import Image from "next/image";
import { ComponentProps } from "react";

type LogoProps = {
  type?: "full" | "initials" | "auto";
  className?: string;
};

export default function Logo({ type = "auto", className }: LogoProps) {
  return (
    <div className={`relative w-[150px] h-[50px] ${className}`}>
      <picture>
        {type !== "initials" && (
          <source srcSet="/logo-full.svg" media="(min-width: 768px)" />
        )}

        {type !== "full" && (
          <source srcSet="/logo-initials.svg" media="(min-width: 0px)" />
        )}

        <Image src="/logo-full.svg" alt="Mika Reich" fill />
      </picture>
    </div>
  );
}
