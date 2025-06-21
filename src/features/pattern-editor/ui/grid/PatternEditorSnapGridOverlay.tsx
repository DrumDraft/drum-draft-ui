import { TimeSignature } from '@/entities/pattern/types';
import { GridResolution } from '@/features/pattern-editor/types/grid-resolution';
import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import { ChildrenProp, ClassNameProp } from '@/shared/types';
import clsx from 'clsx';
import React from 'react';
import { tv } from 'tailwind-variants';
import { getGridStructure } from '../../lib';

interface PatternEditorSnapGridOverlayProps
  extends ChildrenProp,
    ClassNameProp {
  grid: GridResolution;
  signature: TimeSignature;
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

export const PatternEditorSnapGridOverlay: React.FC<PatternEditorSnapGridOverlayProps> =
  React.memo(({ grid, signature, className = "", children }) => {
    const gridStructure = getGridStructure(grid, signature);

    return (
      <div className={clsx("relative w-full h-full", className)}>
        {children}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            left: `${PatternEditorConfig.startGap}px`,
          }}
        >
          {gridStructure.map((line, index) => (
            <div
              key={`grid-line-${index}`}
              className={clsx(
                gridLineStyles({ type: line.type }),
                "-translate-x-1/2"
              )}
              style={{
                left: `${(index / gridStructure.length) * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    );
  });
