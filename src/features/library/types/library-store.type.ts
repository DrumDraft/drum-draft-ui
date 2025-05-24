import { LibraryPattern } from "@/entities/library/types";

export interface LibraryState {
  patterns: LibraryPattern[];
  isLoading: boolean;
  error: string | null;
  filters: null;
}

export interface LibraryActions {
  fetchPatterns: () => Promise<void>;
  addPattern: (pattern: LibraryPattern) => void;
}

export interface LibraryStore extends LibraryState, LibraryActions {}
