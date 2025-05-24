import { DrumType } from '@/entities/pattern/types';
import React from 'react';
import { PatternEditorRow } from './PatternEditorRow';

interface PatternEditorRowContainerProps {
  drumType: DrumType;
  beats: number[];
  position: number | null;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

export const PatternEditorRowContainer: React.FC<PatternEditorRowContainerProps> =
  React.memo(
    ({ drumType, beats, position, isActive, onClick, onMouseEnter }) => {
      return (
        <div onClick={onClick} onMouseEnter={onMouseEnter}>
          <PatternEditorRow
            position={isActive ? position : null}
            beats={beats}
          />
        </div>
      );
    }
  );
