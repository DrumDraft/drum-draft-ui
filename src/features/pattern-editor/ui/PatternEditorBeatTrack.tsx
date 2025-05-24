import React from 'react';
import { PatternEditorBeat } from './PatternEditorBeat';

export interface PatternEditorBeatTrackProps {
  beats: number[];
}

export const PatternEditorBeatTrack: React.FC<PatternEditorBeatTrackProps> =
  React.memo(({ beats }) => {
    return (
      <div className="relative w-full h-full">
        {beats.map((beat, idx) => {
          return (
            <div
              key={idx}
              className="absolute top-1/2"
              style={{
                left: `${beat * 100}%`,
              }}
            >
              <PatternEditorBeat />
            </div>
          );
        })}
      </div>
    );
  });
