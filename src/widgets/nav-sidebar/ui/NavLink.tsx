"use client";

import { ChildrenProp, ClassNameProp } from "@/shared/types";
import { cn } from "@heroui/theme";
import Link from "next/link";
import { useNavBarContext } from "../model/context";

interface NavLinkProps extends ChildrenProp, ClassNameProp {
  icon: React.ReactNode;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  href,
  children,
  className,
}) => {
  const { isOpen } = useNavBarContext();

  return (
    <li className="rounded-medium hover:bg-default-100 transition-colors duration-200">
      <Link
        href={href}
        className={cn(
          className,
          "py-2 px-3 flex flex-row gap-4 text-md text-nowrap items-center font-bold text-default-700"
        )}
      >
        <div className="size-8 flex-shrink-0 flex transition-all duration-200">
          {icon}
        </div>
        <span
          className={cn(
            "transition-all duration-200",
            isOpen ? "opacity-100 max-w-xs w-full" : "opacity-0 max-w-0 w-0"
          )}
        >
          {children}
        </span>
      </Link>
    </li>
  );
};
