import { Slot } from "@radix-ui/react-slot";
import NextLink from "next/link";
import type { ComponentProps } from "react";
import { template } from "~/lib/template/builder";
import { className } from "~/lib/template/class-name";
import { APP_BAR_STYLES } from "./app-bar.css";

const Link = template(NextLink).with(...className(APP_BAR_STYLES.LINK));

const Links = template("ol").with(...className(APP_BAR_STYLES.LINKS));

const Logo = template(NextLink).with(...className(APP_BAR_STYLES.LOGO));

export const AppBar = template(Slot)
  .props<ComponentProps<typeof Slot> & { asChild: true }>()
  .with(...className(APP_BAR_STYLES.CONTAINER))
  // `asChild` property is only there for explicity
  .without("asChild")
  .subcomponent("Link", Link)
  .subcomponent("Logo", Logo)
  .subcomponent("Links", Links);
