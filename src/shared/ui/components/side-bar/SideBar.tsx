import { ChildrenProp, ClassNameProp } from "@/shared/types";
import { cn } from "@heroui/theme";
import React from "react";
import { HandleVertical } from "../handle/HandleVertical";
import { sidebar, sidebarContent, sidebarResizer } from "./sidebar.styles";

interface SidebarProps extends ChildrenProp, ClassNameProp {
  minWidth?: number | string;
  maxWidth?: number | string;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  locked?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className,
  minWidth = 80,
  maxWidth = 240,
  isOpen = true,
  setIsOpen,
  locked = false,
}) => {
  const isControlled = typeof setIsOpen === "function";

  const [internalOpen, setInternalOpen] = React.useState(isOpen);

  const actualIsOpen = isControlled ? isOpen! : internalOpen;

  const toggleSidebar = () => {
    if (locked) return;

    if (isControlled) {
      setIsOpen?.(!actualIsOpen);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={cn(sidebar(), className)}
      style={{ width: actualIsOpen ? maxWidth : minWidth }}
    >
      <div className={sidebarContent()}>{children}</div>
      <div className={sidebarResizer()}>
        {locked ? null : <HandleVertical onClick={toggleSidebar} />}
      </div>
    </div>
  );
};
