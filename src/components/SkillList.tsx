import { SKILLS } from "~/content/config";
import Skill from "./Skill";

export default function SkillList() {
  return (
    <section className="line-clamp-5 flex flex-wrap gap-8">
      {SKILLS.map(({ name }) => (
        <Skill key={name} skill={name} size="large" />
      ))}
      <span className="small my-auto">And many more...</span>
    </section>
  );
}
