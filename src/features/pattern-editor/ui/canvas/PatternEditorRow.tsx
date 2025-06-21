"use client";

import { PatternEditorConfig } from '@/shared/config/pattern-editor';
import React from 'react';
import { PatternEditorBeatTrack } from '../beats/PatternEditorBeatTrack';

export interface PatternEditorRowProps {
  beats: number[];
  ghostPosition: number | null;
  onClick: () => void;
  onMouseEnter: () => void;
}

export const PatternEditorRow: React.FC<PatternEditorRowProps> = React.memo(
  ({ beats, ghostPosition, onClick, onMouseEnter }) => {
    return (
      <div
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className="border-b border-content4 box-border relative z-50"
        style={{
          paddingLeft: `${PatternEditorConfig.startGap}px`,
          height: `${PatternEditorConfig.rowHeight}px`,
        }}
      >
        <PatternEditorBeatTrack beats={beats} ghostPosition={ghostPosition} />
      </div>
    );
  }
);
