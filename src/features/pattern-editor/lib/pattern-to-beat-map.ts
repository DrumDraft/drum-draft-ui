import { DrumType, Pattern } from '@/entities/pattern/types';
import { createEmptyBeatMap } from './create-empty-beat-map';

export const patternToBeatMap = (pattern: Pattern | null) => {
  if (!pattern) {
    return createEmptyBeatMap();
  }

  const beatMap = createEmptyBeatMap();

  pattern.beats.forEach(({ position, instruments }) => {
    Object.entries(instruments).forEach(([instrument, isActive]) => {
      if (isActive) {
        beatMap[instrument as DrumType].push(position);
      }
    });
  });

  return beatMap;
};
