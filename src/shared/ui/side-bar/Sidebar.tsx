import { ClassNameProp } from '@/shared/types';
import { cn } from '@heroui/theme';
import React, { useMemo } from 'react';
import { HandleVertical } from '../handle/HandleVertical';
import { sidebar, sidebarContent, sidebarResizer } from './sidebar.styles';

export interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  width: number | string;
  minWidth: number | string;
  maxWidth: number | string;
  locked: boolean;
}

interface SidebarProps extends ClassNameProp {
  children?: React.ReactNode | ((state: SidebarState) => React.ReactNode);
  content?: React.ReactNode;
  minWidth?: number | string;
  maxWidth?: number | string;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  locked?: boolean;
}

const SidebarComponent: React.FC<SidebarProps> = ({
  children,
  content,
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

  const toggleSidebar = React.useCallback(() => {
    if (locked) return;

    if (isControlled) {
      setIsOpen?.(!actualIsOpen);
    } else {
      setInternalOpen((prev) => !prev);
    }
  }, [locked, isControlled, setIsOpen, actualIsOpen]);

  const sidebarState: SidebarState = useMemo(
    () => ({
      isOpen: actualIsOpen,
      toggleSidebar,
      width: actualIsOpen ? maxWidth : minWidth,
      minWidth,
      maxWidth,
      locked,
    }),
    [actualIsOpen, toggleSidebar, maxWidth, minWidth, locked]
  );

  const renderContent = useMemo(() => {
    if (typeof children === "function") {
      return children(sidebarState);
    }
    if (children) {
      return children;
    }
    return content;
  }, [children, sidebarState, content]);

  const sidebarStyle = useMemo(
    () => ({
      width: actualIsOpen ? maxWidth : minWidth,
    }),
    [actualIsOpen, maxWidth, minWidth]
  );

  return (
    <div className={cn(sidebar(), className)} style={sidebarStyle}>
      <div className={sidebarContent()}>{renderContent}</div>
      <div className={sidebarResizer()}>
        {locked ? null : <HandleVertical onClick={toggleSidebar} />}
      </div>
    </div>
  );
};

export const Sidebar = React.memo(SidebarComponent);
