import { HeroUiColor } from '@/shared/types/heroui';
import { Spinner } from '@heroui/react';
import React, { ReactNode } from 'react';

export type LoadingOverlaySize = "sm" | "md" | "lg" | "xl";
export type LoadingOverlayBackdrop =
  | "transparent"
  | "semi-transparent"
  | "opaque";

interface LoadingOverlayProps {
  children: ReactNode;
  isLoading: boolean;
  size?: LoadingOverlaySize;
  backdrop?: LoadingOverlayBackdrop;
  color?: HeroUiColor;
  className?: string;
  spinnerClassName?: string;
}

const backdropClasses: Record<LoadingOverlayBackdrop, string> = {
  transparent: "bg-transparent",
  "semi-transparent": "bg-white/50 dark:bg-black/50",
  opaque: "bg-white/80 dark:bg-black/80",
};

const spinnerSizes: Record<LoadingOverlaySize, "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "lg",
};

export function LoadingOverlay({
  children,
  isLoading,
  size = "md",
  backdrop = "semi-transparent",
  color = "primary",
  className = "",
  spinnerClassName = "",
}: LoadingOverlayProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 ${backdropClasses[backdrop]}`}
        >
          <Spinner
            size={spinnerSizes[size]}
            color={color}
            className={spinnerClassName}
            aria-label="Загрузка"
          />
        </div>
      )}
    </div>
  );
}
