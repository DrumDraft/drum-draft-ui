import { LibraryPattern } from '@/entities/library/types';

export interface PatternLibraryState {
  patterns: LibraryPattern[];
  isLoading: boolean;
  error: string | null;
  filters: null;
}

export interface PatternLibraryActions {
  fetchPatterns: () => Promise<void>;
  addPattern: (pattern: LibraryPattern) => void;
  deletePattern: (patternId: string) => Promise<void>;
  updatePattern: (patternId: number, pattern: LibraryPattern) => Promise<void>;
}

export interface PatternLibraryStore
  extends PatternLibraryState,
    PatternLibraryActions {}
