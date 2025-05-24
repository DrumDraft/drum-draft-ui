"use client";

import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import React from 'react';
import { PatternEditorBeatTrack } from './PatternEditorBeatTrack';
import { PatternEditorGhostBeatTrack } from './PatternEditorGhostBeatTrack';

export interface PatternEditorRowProps {
  position: number | null;
  beats: number[];
}

export const PatternEditorRow: React.FC<PatternEditorRowProps> = React.memo(
  ({ beats, position }) => {
    return (
      <div
        className="w-full h-full"
        style={{ height: `${PatternEditorConfig.rowHeight}px` }}
      >
        <PatternEditorGhostBeatTrack position={position}>
          <PatternEditorBeatTrack beats={beats} />
        </PatternEditorGhostBeatTrack>
      </div>
    );
  }
);
