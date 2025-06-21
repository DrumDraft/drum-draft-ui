import { GridResolution } from '../types';

export const GridResolutionDivisions: Record<GridResolution, number> = {
  "1/4": 4,
  "1/8": 8,
  "1/16": 16,
  "1/32": 32,
  "1/8t": 12, // 8 * 1.5 for triplet
  "1/16t": 24, // 16 * 1.5 for triplet
  "1/32t": 48, // 32 * 1.5 for triplet
};
