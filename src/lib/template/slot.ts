import { Slot } from "@radix-ui/react-slot";
import type { ElementType } from "react";

export function Slottable(Base?: ElementType) {
  return Slot || Base;
}
