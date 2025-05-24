"use client";

import { ChildrenProp } from "@/shared/types";

interface BottomBarProps extends ChildrenProp {
  className?: string;
  height?: number;
  isOpen?: boolean;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  children,
  className,
  height = 200,
  isOpen = false,
}) => {
  return <></>;
};
