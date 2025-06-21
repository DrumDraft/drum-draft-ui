import { DrumType } from '@/entities/pattern/types';
import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import { useResizeObserver } from '@/shared/hooks';
import { useCallback, useEffect, useMemo } from 'react';
import React from 'react';
import { quantizeToGrid } from '../../lib/quantize-to-grid';
import { usePatternEditorStore } from '../../model';
import { PatternEditorSnapGridOverlay } from '../grid/PatternEditorSnapGridOverlay';
import { PatternEditorRow } from './PatternEditorRow';

export const PatternEditorCanvas: React.FC = React.memo(() => {
  const beatMap = usePatternEditorStore((state) => state.beatMap);
  const grid = usePatternEditorStore((state) => state.gridResolution);
  const signature = usePatternEditorStore((state) => state.signature);
  const position = usePatternEditorStore((state) => state.position);
  const currentDrumType = usePatternEditorStore(
    (state) => state.currentDrumType
  );
  const toggleBeat = usePatternEditorStore((state) => state.toggleBeat);
  const setPosition = usePatternEditorStore((state) => state.setPosition);
  const setCurrentDrumType = usePatternEditorStore(
    (state) => state.setCurrentDrumType
  );

  const {
    elementRef: resizeObserverRef,
    dimensions,
    updateDimensions,
  } = useResizeObserver();

  useEffect(() => {
    console.log("beatMap", beatMap);
  }, [beatMap]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!currentDrumType || !dimensions.width) return;

      const x = e.clientX - dimensions.left;
      const normalizedX = x / dimensions.width;

      let newPosition: number | null = null;

      if (normalizedX < 0) {
        if (x + PatternEditorConfig.startGap >= 0) {
          newPosition = 0;
        }
      } else if (normalizedX > 1) {
        newPosition = 1;
      } else {
        newPosition = quantizeToGrid(normalizedX, grid, signature);
      }

      if (newPosition !== position) {
        setPosition(newPosition);
      }
    },
    [
      dimensions.left,
      dimensions.width,
      grid,
      signature,
      position,
      currentDrumType,
      setPosition,
    ]
  );

  // Из-за анимации окна, изначальные размеры неверны
  useEffect(() => {
    const timeoutId = setTimeout(updateDimensions, 500);
    return () => clearTimeout(timeoutId);
  }, [updateDimensions]);

  const handleMouseLeave = useCallback(() => {
    setPosition(null);
    setCurrentDrumType(null);
  }, [setPosition, setCurrentDrumType]);

  const onClick = useCallback(
    (drumType: DrumType) => {
      if (position !== null && currentDrumType === drumType) {
        toggleBeat(drumType, position);
      }
    },
    [position, currentDrumType, toggleBeat]
  );

  const onMouseEnter = useCallback(
    (drumType: DrumType) => {
      setCurrentDrumType(drumType);
    },
    [setCurrentDrumType]
  );

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

  const patternRows = useMemo(() => {
    return PatternEditorConfig.rows.map(({ drumType }) => (
      <PatternEditorRow
        key={drumType}
        ghostPosition={drumType === currentDrumType ? position : null}
        beats={beatMap[drumType]}
        onClick={rowHandlers[drumType].onClick}
        onMouseEnter={rowHandlers[drumType].onMouseEnter}
      />
    ));
  }, [beatMap, currentDrumType, position, rowHandlers]);

  const overlayStyle = useMemo(
    () => ({
      left: `${PatternEditorConfig.startGap}px`,
    }),
    []
  );

  return (
    <div
      className="w-full bg-content2 flex relative"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <PatternEditorSnapGridOverlay grid={grid} signature={signature}>
        {patternRows}
      </PatternEditorSnapGridOverlay>
      <div
        className="absolute inset-0 pointer-events-none"
        ref={resizeObserverRef}
        style={overlayStyle}
      />
    </div>
  );
});
