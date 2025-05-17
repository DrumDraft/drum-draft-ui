import { tv } from 'tailwind-variants';

export const profileIcon = tv({
  base: "flex items-center justify-center font-medium shrink-0 select-none overflow-hidden",
  variants: {
    size: {
      xs: "size-6 text-md font-bold rounded-md",
      sm: "size-8 text-lg font-bold rounded-lg",
      md: "size-10 text-xl font-bold rounded-xl",
      lg: "size-14 text-2xl font-bold rounded-2xl",
      xl: "size-18 text-3xl font-bold rounded-[24px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const profileIconSkeleton = tv({
  base: "shrink-0",
  variants: {
    size: {
      xs: "rounded-md",
      sm: "rounded-lg",
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-[24px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
