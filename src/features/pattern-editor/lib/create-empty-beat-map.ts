import { PatternEditorConfig } from "@/shared/config/pattern-editor";
import { BeatMap } from "../types/beat-map";

export const createEmptyBeatMap = (): BeatMap => {
  return PatternEditorConfig.rows.reduce((acc, row) => {
    acc[row.drumType] = [];
    return acc;
  }, {} as BeatMap);
};
