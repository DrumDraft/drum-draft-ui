import { TimeSignature } from '@/entities/pattern/types';
import { GridResolution } from '../types/grid-resolution';

/**
 * Квантует позицию в пределах одного такта [0,1) на ближайшую сетку
 * с учётом размера такта и выбранного разрешения.
 * Результат всегда лежит в [0, 1).
 *
 * @param position — дробь в [0,1), где 1 = длина всего такта
 * @param resolution — разрешение сетки (1/4, 1/8, 1/16, 1/32, 1/8t, 1/16t)
 * @param timeSignature — размер такта { numerator, denominator }
 * @returns нормированная позиция, выровненная по сетке
 */
export function quantizeToGrid(
  position: number,
  resolution: GridResolution,
  timeSignature: TimeSignature
): number {
  const normalized = ((position % 1) + 1) % 1;

  const baseDivisions: Record<GridResolution, number> = {
    "1/4": 4,
    "1/8": 8,
    "1/16": 16,
    "1/32": 32,
    "1/8t": 12,
    "1/16t": 24,
  };

  const { numerator, denominator } = timeSignature;
  const base = baseDivisions[resolution];

  const subdivisions = (base * numerator) / denominator;

  const rawIndex = Math.round(normalized * subdivisions);

  const index = rawIndex >= subdivisions ? subdivisions - 1 : rawIndex;

  return index / subdivisions;
}
