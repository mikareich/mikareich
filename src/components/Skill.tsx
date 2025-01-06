import Image from "next/image";
import { SKILLS } from "~/content/config";

const SIZE_IN_PIXELS = {
  small: 24,
  medium: 24,
  large: 32,
} as const;

type Size = keyof typeof SIZE_IN_PIXELS;

type Props = {
  skill: string;
  size?: Size;
};

export default function Skill({ skill, size = "medium" }: Props) {
  const skillPath = SKILLS.find((s) => s.name === skill)?.path;
  if (!skillPath) return null;

  return (
    <div className="flex items-center gap-2 text-gray-100">
      <Image
        width={SIZE_IN_PIXELS[size]}
        height={SIZE_IN_PIXELS[size]}
        src={skillPath}
        alt={skill}
      />

      {size !== "small" && (
        <span className={size === "medium" ? "base" : "large"}>{skill}</span>
      )}
    </div>
  );
}
