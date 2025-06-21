"use client";

import { ChildrenProp, ClassNameProp } from '@/shared/types';
import clsx from 'clsx';

interface BottomPanelProps extends ChildrenProp, ClassNameProp {
  maxHeight?: number;
}

export const BottomPanel: React.FC<BottomPanelProps> = ({
  children,
  className,
  maxHeight = null,
}) => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 right-0",
        maxHeight ? `max-h-[${maxHeight}px]` : "max-h-full",
        className
      )}
    >
      {children}
    </div>
  );
};
