import { Beat } from '@/entities/pattern/model';
import { DrumType, Pattern } from '@/entities/pattern/types';
import { BeatMap } from '../types/beat-map';

export const beatMapToPattern = (
  beatMap: BeatMap,
  signatureBits: number,
  signatureMeasure: number,
  tags: string[] = []
): Pattern => {
  // Собираем все уникальные позиции из всех треков
  const allPositions = new Set<number>();
  (Object.values(beatMap) as number[][]).forEach((positions: number[]) => {
    positions.forEach((position: number) => allPositions.add(position));
  });

  // Сортируем позиции
  const sortedPositions = Array.from(allPositions).sort();

  // Создаем beats для каждой позиции
  const beats: Beat[] = sortedPositions.map((position) => {
    const instruments: Record<DrumType, boolean> = {} as Record<
      DrumType,
      boolean
    >;

    // Инициализируем все инструменты как false
    Object.keys(beatMap).forEach((drumType) => {
      instruments[drumType as DrumType] = false;
    });

    // Устанавливаем true для инструментов, которые активны на этой позиции
    Object.entries(beatMap).forEach(([drumType, positions]) => {
      if ((positions as number[]).includes(position)) {
        instruments[drumType as DrumType] = true;
      }
    });

    return {
      position,
      instruments,
    };
  });

  return {
    id: null, // ID будет установлен сервером
    signatureBits,
    signatureMeasure,
    beats,
    tags,
    createdAt: null,
    updatedAt: null,
  };
};
