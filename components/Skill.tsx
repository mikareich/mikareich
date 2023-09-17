import Image from "next/image";

// paths to skill logos
const assetPaths = {
  React: "/skills/react.svg",
  Vue: "/skills/vue.svg",
  "Next.js": "/skills/nextjs.svg",
  TypeScript: "/skills/typescript.svg",
  JavaScript: "/skills/javascript.svg",
  HTML: "/skills/html.svg",
  CSS: "/skills/css.svg",
  Tailwindcss: "/skills/tailwindcss.svg",
  "Node.js": "/skills/nodejs.svg",
  Docker: "/skills/docker.svg",
  Python: "/skills/python.svg",
};

export type SkillType = keyof typeof assetPaths;

export const skills = Object.keys(assetPaths) as SkillType[];

type SkillProps = {
  skill: SkillType;
  size?: "small" | "large" | "auto";
};

export default function Skill({ skill, size = "auto" }: SkillProps) {
  const assetPath = assetPaths[skill];

  return (
    <div className="flex items-center">
      <picture className="shrink-0">
        {size !== "small" && (
          <source
            srcSet={assetPath}
            media="(min-width: 576px)"
            width={24}
            height={24}
          />
        )}
        {size !== "large" && (
          <source
            srcSet={assetPath}
            media="(min-width: 0px)"
            width={20}
            height={20}
          />
        )}
        <Image src={assetPath} alt={skill} width={24} height={24} />
      </picture>
      <span
        className={`ml-[10px] text-baby-powder text-sm xs:text-lg ${
          size === "small" && "!text-sm"
        } ${size === "large" && "!text-lg"}`}
      >
        {skill}
      </span>
    </div>
  );
}
