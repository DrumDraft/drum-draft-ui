import { tv } from "tailwind-variants";

export const userPreview = tv({
  base: "p-0 w-full h-auto rounded-2xl flex items-center justify-start flex-row gap-4 group duration-250",
  variants: {
    size: {
      xs: "gap-1",
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-4",
      xl: "gap-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const userPreviewInfo = tv({
  base: "flex flex-col items-start justify-between h-full",
  variants: {
    size: {
      xs: "text-sm",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const userPreviewName = tv({
  base: "text-medium font-bold line-clamp-1",
  variants: {
    size: {
      xs: "text-md/3",
      sm: "text-md/3",
      md: "text-lg/5",
      lg: "text-2xl/7",
      xl: "text-2xl/7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const userPreviewEmail = tv({
  base: "line-clamp-1",
  variants: {
    size: {
      xs: "text-xs/2",
      sm: "text-xs/2",
      md: "text-sm/4",
      lg: "text-base/6",
      xl: "text-base/6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
