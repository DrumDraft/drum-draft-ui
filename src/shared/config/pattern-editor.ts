import { DrumType } from '@/entities/pattern/types';

export const PatternEditorConfig: PatternEditorConfig = {
  rows: [
    { title: "Райд", drumType: "Ride", icon: "ride" },
    { title: "Крэш", drumType: "Crash", icon: "crash" },
    { title: "Хай-Хет", drumType: "HiHat", icon: "hi-hat" },
    { title: "Том 1", drumType: "Tom1", icon: "tom_1" },
    { title: "Том 2", drumType: "Tom2", icon: "tom_2" },
    { title: "Том 3", drumType: "Tom3", icon: "tom_3" },
    { title: "Малый", drumType: "Snare", icon: "snare" },
    { title: "Бочка", drumType: "Kick", icon: "kick" },
  ],
  startGap: 24,
  rowHeight: 48,
};

export interface PatternEditorConfigRow {
  title: string;
  drumType: DrumType;
  icon: string;
}

export interface PatternEditorConfig {
  rows: PatternEditorConfigRow[];
  startGap: number;
  rowHeight: number;
}
