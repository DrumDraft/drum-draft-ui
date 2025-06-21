import { useAsync } from '@/shared/hooks';
import { usePatternLibraryStore } from '../model';

export const useDeletePattern = () => {
  const deletePatternFromStore = usePatternLibraryStore(
    (state) => state.deletePattern
  );

  const {
    execute: deletePattern,
    isLoading: isDeleting,
    error,
  } = useAsync(deletePatternFromStore);

  return {
    deletePattern,
    isDeleting,
    error,
  };
};
