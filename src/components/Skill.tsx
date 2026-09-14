import Image from "next/image";
import { cn } from "~/lib/cn";

const SIZE_IN_PIXELS = {
  large: 32,
  medium: 24,
  small: 24,
} as const;

type Size = keyof typeof SIZE_IN_PIXELS;

type SkillProps = React.ComponentProps<"div"> & { src: string; size?: Size };

export function Skill({
  src,
  size = "medium",
  className,
  children,
  ...props
}: SkillProps) {
  // TODO: use a Button asChild component
  return (
    <div
      className={cn("flex items-center gap-2 text-theme-text", className)}
      {...props}
    >
      <Image
        alt={src}
        height={SIZE_IN_PIXELS[size]}
        src={src}
        width={SIZE_IN_PIXELS[size]}
      />

      {size !== "small" && (
        <span className={size === "medium" ? "base" : "large"}>{children}</span>
      )}
    </div>
  );
}
