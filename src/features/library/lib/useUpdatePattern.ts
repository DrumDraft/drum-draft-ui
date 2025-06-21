import { useAsync } from '@/shared/hooks';
import { usePatternLibraryStore } from '../model';

export const useUpdatePattern = () => {
  const updatePatternFromStore = usePatternLibraryStore(
    (state) => state.updatePattern
  );

  const {
    execute: updatePattern,
    isLoading: isUpdating,
    error,
  } = useAsync(updatePatternFromStore);

  return {
    updatePattern,
    isUpdating,
    error,
  };
};
