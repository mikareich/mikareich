import Image from "next/image";
import { SKILLS } from "../config";
import { STYLES } from "./page.css";

export function Skills() {
  return (
    <ul className={STYLES.SKILL_LIST}>
      {Object.entries(SKILLS).map(([skill, url]) => (
        <li key={skill} className={STYLES.SKILL_LIST_ITEM}>
          <Image width={16} height={16} src={url} alt={skill} />
          {skill}
        </li>
      ))}
    </ul>
  );
}
