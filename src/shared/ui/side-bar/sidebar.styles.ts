import { tv } from 'tailwind-variants';

export const sidebar = tv({
  base: "flex shrink-0 transition-all ease-in-out duration-300 relative border-right border-r-2 box-content border-default",
  variants: {
    theme: {
      light: "bg-white border-gray-200",
      dark: "bg-gray-800 border-gray-700",
    },
  },
});

export const sidebarContent = tv({
  base: "h-full w-full",
});

export const sidebarResizer = tv({
  base: "absolute top-0 right-0 h-full w-3 -ml-[calc(0.75em-2px)] shrink-0 flex flex-col justify-center items-center",
  variants: {
    theme: {
      light: "",
      dark: "",
    },
  },
});

export const sidebarResizerButton = tv({
  base: "px-1 flex items-center justify-center",
});

export const sidebarResizerHandle = tv({
  base: "w-1 h-8 rounded-full transition-colors duration-200 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
});
