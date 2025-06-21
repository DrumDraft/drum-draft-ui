import { DrumType, SignatureMeasure } from '@/entities/pattern/types';
import { Pattern } from '@/entities/pattern/types';
import { TimeSignature } from '@/entities/pattern/types/signature';
import { create } from 'zustand';
import { createEmptyBeatMap, patternToBeatMap, togglePosition } from '../lib';
import { GridResolution } from '../types';
import { BeatMap } from '../types/beat-map';

interface PatternEditorState {
  gridResolution: GridResolution;
  signature: TimeSignature;
  beatMap: BeatMap;
  position: number | null;
  currentDrumType: DrumType | null;
  pattern: Pattern | null;
}

interface PatternEditorActions {
  setSignature(signature: TimeSignature): void;
  setBeatMap(beatMap: BeatMap): void;
  setGridResolution(grid: GridResolution): void;
  setPattern(pattern: Pattern): void;
  toggleBeat(instrument: DrumType, position: number): void;
  setPosition(position: number | null): void;
  setCurrentDrumType(drumType: DrumType | null): void;
  clear(): void;
}

interface PatternEditorStore extends PatternEditorState, PatternEditorActions {}

export const usePatternEditorStore = create<PatternEditorStore>((set, get) => ({
  signature: {
    numerator: 4,
    denominator: 4,
  },
  gridResolution: "1/16",
  beatMap: createEmptyBeatMap(),
  position: null,
  currentDrumType: null,
  pattern: null,

  setSignature: (signature: TimeSignature) => set({ signature }),

  setBeatMap: (beatMap: BeatMap) => set({ beatMap }),

  setGridResolution: (grid: GridResolution) => set({ gridResolution: grid }),

  setPattern: (pattern: Pattern) => {
    const beatMap = patternToBeatMap(pattern);
    console.log("setPattern", pattern);
    set({
      pattern,
      beatMap,
      signature: {
        numerator: pattern.signatureBits,
        denominator: pattern.signatureMeasure as SignatureMeasure,
      },
    });
    console.log("setPattern", get());
  },

  setPosition: (position: number | null) => set({ position }),

  setCurrentDrumType: (currentDrumType: DrumType | null) =>
    set({ currentDrumType }),

  toggleBeat: (instrument: DrumType, position: number) => {
    const { beatMap } = get();
    const beatTrack = beatMap[instrument];

    set((state) => {
      const newBeatMap = { ...state.beatMap };
      newBeatMap[instrument] = togglePosition(beatTrack, position);
      return { beatMap: newBeatMap };
    });
  },

  clear: () => {
    set({
      signature: {
        numerator: 4,
        denominator: 4,
      },
      gridResolution: "1/16",
      beatMap: createEmptyBeatMap(),
      position: null,
      currentDrumType: null,
      pattern: null,
    });
  },
}));
