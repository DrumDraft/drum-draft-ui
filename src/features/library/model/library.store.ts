import {
  deleteLibraryPattern,
  getLibraryPatterns,
  updateLibraryPattern,
} from '@/entities/library/api';
import { LibraryPattern } from '@/entities/library/types';
import { showErrorMessage } from '@/shared/lib';
import { getApiErrorMessage } from '@/shared/lib/error.utils';
import { create } from 'zustand';
import { PatternLibraryStore } from '../types';

export const usePatternLibraryStore = create<PatternLibraryStore>((set) => ({
  patterns: [],
  isLoading: false,
  error: null,
  filters: null,

  fetchPatterns: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await getLibraryPatterns();

      set({ patterns: response.data, isLoading: false });
    } catch (error) {
      const message = getApiErrorMessage(error);

      showErrorMessage("Ошибка при получении ритмов", message);

      set({
        error: message || "ошибка при получении ритмов",
        isLoading: false,
      });
    }
  },

  addPattern: (pattern: LibraryPattern) =>
    set((state) => ({
      patterns: [...state.patterns, pattern],
    })),

  deletePattern: async (patternId: string) => {
    try {
      await deleteLibraryPattern(patternId);

      set((state) => ({
        patterns: state.patterns.filter(
          (pattern) => pattern.id.toString() !== patternId
        ),
      }));
    } catch (error) {
      const message = getApiErrorMessage(error);

      showErrorMessage("Ошибка при удалении ритма", message);

      throw error;
    }
  },

  updatePattern: async (patternId: number, updatedPattern: LibraryPattern) => {
    try {
      await updateLibraryPattern(patternId, {
        title: updatedPattern.title,
        signatureBits: updatedPattern.pattern.signatureBits,
        signatureMeasure: updatedPattern.pattern.signatureMeasure,
        beats: updatedPattern.pattern.beats,
        tags: updatedPattern.pattern.tags,
        isPublic: updatedPattern.isPublic,
      });

      set((state) => ({
        patterns: state.patterns.map((pattern) =>
          pattern.id === patternId ? updatedPattern : pattern
        ),
      }));
    } catch (error) {
      const message = getApiErrorMessage(error);

      showErrorMessage("Ошибка при обновлении ритма", message);

      throw error;
    }
  },
}));
