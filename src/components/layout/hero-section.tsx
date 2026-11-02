import NextImage from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { template } from "~/lib/template/builder";
import { className } from "~/lib/template/class-name";
import { LIST } from "~/styles/list.css";
import { HERO_SECTION_STYLES } from "./hero-section.css";

const Title = template("h1").with(...className(HERO_SECTION_STYLES.TITLE));

const Subtitle = template("h3").with(
  ...className(HERO_SECTION_STYLES.SUB_TITLE),
);

const Background = template(NextImage)
  .with(...className(HERO_SECTION_STYLES.IMAGE))
  .with("width", ({ width }) => width ?? 1000)
  .with("height", ({ height }) => height ?? 1000);

const Tags = template(
  ({
    children,
    ...props
  }: ComponentProps<"ul"> & { children: ReactNode[] }) => {
    return (
      <ul {...props}>
        {children.map((child, idx) => (
          <li className={LIST.ITEM} key={`tag-${String(idx)}`}>
            {child}
          </li>
        ))}
      </ul>
    );
  },
).with(...className(HERO_SECTION_STYLES.TAGS));

const Timestamp = template("time").with(
  ...className(HERO_SECTION_STYLES.TIMESTAMP),
);

export const HeroSection = template("header")
  .with(...className(HERO_SECTION_STYLES.CONTAINER))
  .subcomponent("Title", Title)
  .subcomponent("Subtitle", Subtitle)
  .subcomponent("Tags", Tags)
  .subcomponent("Timestamp", Timestamp)
  .subcomponent("Background", Background);
