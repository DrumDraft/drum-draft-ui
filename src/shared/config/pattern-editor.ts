import { DrumType } from "@/entities/pattern/types";

export const PatternEditorConfig: PatternEditorConfig = {
  rows: [
    { label: "Райд", drumType: "Ride", icon: "ride" },
    { label: "Крэш", drumType: "Crash", icon: "crash" },
    { label: "Хай-Хет", drumType: "HiHat", icon: "hi-hat" },
    { label: "Том 1", drumType: "Tom1", icon: "tom_1" },
    { label: "Том 2", drumType: "Tom2", icon: "tom_2" },
    { label: "Том 3", drumType: "Tom3", icon: "tom_3" },
    { label: "Малый", drumType: "Snare", icon: "snare" },
    { label: "Бочка", drumType: "Kick", icon: "kick" },
  ],
  startGap: 24,
  rowHeight: 48,
};

export interface PatternEditorConfigRow {
  label: string;
  drumType: DrumType;
  icon: string;
}

export interface PatternEditorConfig {
  rows: PatternEditorConfigRow[];
  startGap: number;
  rowHeight: number;
}
