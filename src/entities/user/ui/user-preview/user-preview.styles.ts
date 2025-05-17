import { tv } from 'tailwind-variants';

export const userPreview = tv({
  base: "p-0 w-full h-auto rounded-2xl flex items-center justify-start flex-row gap-4 group duration-250",
  variants: {
    size: {
      xs: "gap-2",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const userPreviewInfo = tv({
  base: "flex flex-col items-start",
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
      xs: "text-md",
      sm: "text-md",
      md: "text-lg",
      lg: "text-2xl",
      xl: "text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const userPreviewEmail = tv({
  base: "",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
