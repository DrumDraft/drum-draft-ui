import { ClassNameProp } from "@/shared/types";
import { cn } from "@heroui/theme";
import Image from "next/image";

interface LogoIconProps extends ClassNameProp {
  size?: number;
}

export const LogoIcon = ({ size = 24, className, ...props }: LogoIconProps) => {
  const src = `/icons/logo/logo.svg`;

  return (
    <Image
      className={cn("dark:invert", className)}
      style={size ? { width: size, height: size } : undefined}
      src={src}
      alt="Logo"
      width={size}
      height={size}
      {...props}
      priority
    />
  );
};
