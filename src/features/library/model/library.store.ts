import { getLibraryPatterns } from "@/entities/library/api";
import { showErrorMessage } from "@/shared/lib";
import { getApiErrorMessage } from "@/shared/lib/error.utils";
import { create } from "zustand";
import { LibraryStore } from "../types";

export const useLibraryStore = create<LibraryStore>((set) => ({
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

  addPattern: async (pattern) =>
    set((state) => ({
      patterns: [...state.patterns, pattern],
    })),
}));
