import React, { useMemo } from 'react';
import { PatternEditorBeat } from './PatternEditorBeat';

export interface PatternEditorBeatTrackProps {
  beats: number[];
  ghostPosition: number | null;
}

export const PatternEditorBeatTrack: React.FC<PatternEditorBeatTrackProps> =
  React.memo(({ beats, ghostPosition }) => {
    const patternBeats = useMemo(() => {
      return beats.map((beat) => (
        <div
          className="absolute top-1/2"
          key={beat}
          style={{ left: `${beat * 100}%` }}
        >
          <PatternEditorBeat />
        </div>
      ));
    }, [beats]);

    return (
      <div className="relative w-full h-full">
        {patternBeats}
        {ghostPosition !== null && (
          <div
            className="absolute top-1/2"
            style={{ left: `${ghostPosition * 100}%` }}
          >
            <PatternEditorBeat isGhost />
          </div>
        )}
      </div>
    );
  });
