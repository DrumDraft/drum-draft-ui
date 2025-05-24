import { TimeSignature } from '@/entities/pattern/types';
import React from 'react';
import { tv } from 'tailwind-variants';

interface PatternEditorSnapGridOverlayProps {
  grid: number;
  signature: TimeSignature;
  className?: string;
}

const gridLineStyles = tv({
  base: "absolute h-full",
  variants: {
    type: {
      accent: "bg-default-600/50 w-0.5",
      regular: "bg-default-400/30 w-[1px]",
    },
  },
  defaultVariants: {
    type: "regular",
  },
});

export const PatternEditorSnapGridOverlay: React.FC<
  PatternEditorSnapGridOverlayProps
> = ({ grid, signature, className = "" }) => {
  const { numerator: beats, denominator: division } = signature;
  const is68TimeSignature = beats === 6 && division === 8;

  // Calculate total number of divisions
  const totalDivisions = beats * grid;

  const lines = Array.from({ length: totalDivisions + 1 }).map((_, index) => {
    const position = index / totalDivisions;
    const positionPercentage = `${position * 100}%`;

    let isAccent = false;

    if (is68TimeSignature) {
      // For 6/8 time signature, accent on positions 0 and 0.5
      isAccent = position === 0 || position === 0.5 || position === 1;
    } else {
      // For other time signatures, accent on beats (quarter notes)
      isAccent = index % grid === 0;
    }

    return (
      <div
        key={`grid-line-${index}`}
        className={gridLineStyles({ type: isAccent ? "accent" : "regular" })}
        style={{ left: positionPercentage }}
      />
    );
  });

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      {lines}
    </div>
  );
};
