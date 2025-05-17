import { tv } from "tailwind-variants";

export const navbar = tv({
  base: "",
  variants: {
    theme: {
      light: "bg-white border-b border-gray-200",
      dark: "bg-gray-800 border-b border-gray-700",
    },
  },
});

export const navbarContent = tv({
  base: "container mx-auto px-4 h-full flex items-center justify-between",
});

export const navbarBrand = tv({
  base: "flex items-center space-x-2",
});

export const navbarLinks = tv({
  base: "hidden md:flex items-center space-x-6",
});

export const navbarLink = tv({
  base: "text-sm font-medium transition-colors duration-200",
  variants: {
    theme: {
      light: "text-gray-600 hover:text-gray-900",
      dark: "text-gray-300 hover:text-white",
    },
    active: {
      true: "text-primary hover:text-primary-dark",
    },
  },
});

export const navbarActions = tv({
  base: "flex items-center space-x-4",
});

export const navbarMobileMenu = tv({
  base: "md:hidden",
  variants: {
    isOpen: {
      true: "fixed inset-0 z-50 bg-white dark:bg-gray-800",
      false: "hidden",
    },
  },
});
