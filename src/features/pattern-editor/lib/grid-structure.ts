import { TimeSignature } from '@/entities/pattern/types';
import { GridResolutionDivisions } from '../constants/grid';
import { GridStructure } from '../types/grid-line';
import { GridResolution } from '../types/grid-resolution';

export const getGridStructure = (
  resolution: GridResolution,
  signature: TimeSignature
): GridStructure => {
  const gridStructure: GridStructure = [];

  const gridResolutionDivisions = GridResolutionDivisions[resolution];

  const lineCount = Math.ceil(
    (gridResolutionDivisions / signature.denominator) * signature.numerator
  );

  for (let i = 0; i < lineCount; i++) {
    let isAccent = false;

    if (signature.numerator === 6 && signature.denominator === 8) {
      isAccent = i % ((gridResolutionDivisions / 4) * 1.5) === 0;
    } else {
      isAccent = i % (gridResolutionDivisions / 4) === 0;
    }

    gridStructure.push({ type: isAccent ? "accent" : "regular" });
  }

  return gridStructure;
};
