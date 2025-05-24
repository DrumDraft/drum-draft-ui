import React from 'react';
import { tv } from 'tailwind-variants';

interface PatternEditorBeatProps {
  size?: number;
  isGhost?: boolean;
}

const beatStyles = tv({
  base: "rounded-lg border-2 rotate-45 -translate-x-1/2 -translate-y-1/2 ",
  variants: {
    type: {
      regular: "bg-content1 border-content4",
      ghost:
        "bg-default-500/20 border-content1 shadow-[0_0_16px_rgba(0,0,0,0.1)]",
    },
  },
  defaultVariants: {
    type: "regular",
  },
});

export const PatternEditorBeat: React.FC<PatternEditorBeatProps> = React.memo(
  ({ size = 40, isGhost = false }) => {
    const actualSize = size * Math.SQRT1_2;

    return (
      <div
        className={beatStyles({ type: isGhost ? "ghost" : "regular" })}
        style={{
          width: actualSize,
          height: actualSize,
        }}
      />
    );
  }
);
