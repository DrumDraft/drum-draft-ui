import { tv } from "tailwind-variants";

export const logo = tv({
  slots: {
    base: "flex gap-2 items-center",
    icon: "",
    text: "font-bold",
    iconSize: "",
  },
  variants: {
    direction: {
      row: { base: "flex-row" },
      column: { base: "flex-col" },
    },
    size: {
      xs: { icon: "w-4 h-4", text: "text-base", iconSize: "16" },
      sm: { icon: "w-8 h-8", text: "text-2xl", iconSize: "32" },
      md: { icon: "w-14 h-14", text: "text-3xl", iconSize: "56" },
      lg: { icon: "w-[72px] h-[72px]", text: "text-4xl", iconSize: "72" },
      xl: { icon: "w-24 h-24", text: "text-5xl", iconSize: "96" },
    },
  },
  defaultVariants: {
    direction: "row",
    size: "md",
  },
});
