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

type SkillType = keyof typeof assetPaths;

export const skills = Object.keys(assetPaths) as SkillType[];

type SkillProps = {
  skill: SkillType;
  size?: "small" | "medium" | "large";
};

export default function Skill({ skill, size = "medium" }: SkillProps) {
  const assetPath = assetPaths[skill];

  const imageSize = size === "medium" ? 24 : 20;

  return (
    <div className="flex items-center">
      <Image src={assetPath} alt={skill} width={imageSize} height={imageSize} />
      <span
        className={`ml-[10px] text-baby-powder ${
          size === "small" ? "text-sm" : "text-lg"
        }`}
      >
        {skill}
      </span>
    </div>
  );
}
