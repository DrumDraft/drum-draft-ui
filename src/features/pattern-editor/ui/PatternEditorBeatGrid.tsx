import { DrumType } from '@/entities/pattern/types';
import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import { useCallback, useMemo, useState } from 'react';
import React from 'react';
import { quantizeToGrid } from '../lib/quantize-to-grid';
import { usePatternEditorStore, useResizeObserver } from '../model';
import { PatternEditorRowContainer } from './PatternEditorRowContainer';

export const PatternEditorBeatGrid: React.FC = () => {
  const { signature, beatMap, grid, toggleBeat } = usePatternEditorStore();
  const [position, setPosition] = useState<number | null>(null);
  const [currentDrumType, setCurrentDrumType] = useState<DrumType | null>(null);
  const { elementRef, dimensions } = useResizeObserver();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!currentDrumType || !dimensions.width) return;

      const x = e.clientX - dimensions.left;
      const normalizedX = x / dimensions.width;

      if (normalizedX < 0 || normalizedX > 1) {
        setPosition(null);
        return;
      }

      const quantizedPosition = quantizeToGrid(normalizedX, grid, signature);

      if (quantizedPosition !== position) {
        setPosition(quantizedPosition);
      }
    },
    [
      dimensions.left,
      dimensions.width,
      grid,
      signature,
      position,
      currentDrumType,
    ]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition(null);
    setCurrentDrumType(null);
  }, []);

  const onClick = useCallback(
    (drumType: DrumType) => {
      if (position !== null && currentDrumType === drumType) {
        toggleBeat(drumType, position);
      }
    },
    [position, currentDrumType, toggleBeat]
  );

  const onMouseEnter = useCallback((drumType: DrumType) => {
    setCurrentDrumType(drumType);
  }, []);

  const rowHandlers = useMemo(() => {
    return PatternEditorConfig.rows.reduce(
      (acc, { drumType }) => {
        acc[drumType] = {
          onClick: () => onClick(drumType),
          onMouseEnter: () => onMouseEnter(drumType),
        };
        return acc;
      },
      {} as Record<DrumType, { onClick: () => void; onMouseEnter: () => void }>
    );
  }, [onClick, onMouseEnter]);

  return (
    <div className="w-full bg-content2 flex">
      <div
        className="flex-shrink-0 "
        style={{ width: PatternEditorConfig.startGap }}
      />
      <div
        ref={elementRef}
        className="flex-grow"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {PatternEditorConfig.rows.map(({ drumType }) => (
          <PatternEditorRowContainer
            key={drumType}
            drumType={drumType}
            position={drumType === currentDrumType ? position : null}
            beats={beatMap[drumType]}
            isActive={drumType === currentDrumType}
            onClick={rowHandlers[drumType].onClick}
            onMouseEnter={rowHandlers[drumType].onMouseEnter}
          />
        ))}
      </div>
    </div>
  );
};
