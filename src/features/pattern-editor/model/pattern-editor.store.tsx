import { DrumType } from '@/entities/pattern/types';
import { TimeSignature } from '@/entities/pattern/types/signature';
import { create } from 'zustand';
import { createEmptyBeatMap, togglePosition } from '../lib';
import { GridResolution } from '../types';
import { BeatMap } from '../types/beat-map';

interface PatternEditorState {
  grid: GridResolution;
  signature: TimeSignature;
  beatMap: BeatMap;
}

interface PatternEditorActions {
  setSignature(signature: TimeSignature): void;
  setBeatMap(beatMap: BeatMap): void;
  setGrid(grid: GridResolution): void;
  toggleBeat(instrument: DrumType, position: number): void;
}

interface PatternEditorStore extends PatternEditorState, PatternEditorActions {}

export const usePatternEditorStore = create<PatternEditorStore>((set, get) => ({
  signature: {
    numerator: 4,
    denominator: 4,
  },
  grid: "1/8",
  beatMap: createEmptyBeatMap(),

  setSignature: (signature: TimeSignature) => set({ signature }),

  setBeatMap: (beatMap: BeatMap) => set({ beatMap }),

  setGrid: (grid: GridResolution) => set({ grid }),

  toggleBeat: (instrument: DrumType, position: number) => {
    const { beatMap } = get();
    const beatTrack = beatMap[instrument];

    set((state) => {
      const newBeatMap = { ...state.beatMap };
      newBeatMap[instrument] = togglePosition(beatTrack, position);
      return { beatMap: newBeatMap };
    });
  },
}));
