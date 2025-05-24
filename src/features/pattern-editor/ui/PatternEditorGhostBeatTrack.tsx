import { ChildrenProp } from '@/shared/types';
import React from 'react';
import { PatternEditorBeat } from './PatternEditorBeat';

interface PatternEditorGhostBeatTrackProps extends ChildrenProp {
  position: number | null;
}

export const PatternEditorGhostBeatTrack: React.FC<PatternEditorGhostBeatTrackProps> =
  React.memo(({ children, position = null }) => {
    return (
      <div className="relative w-full h-full border-b border-content4">
        {children}
        {position !== null && (
          <div
            className="absolute top-1/2"
            style={{
              left: `${position * 100}%`,
            }}
          >
            <PatternEditorBeat isGhost />
          </div>
        )}
      </div>
    );
  });
