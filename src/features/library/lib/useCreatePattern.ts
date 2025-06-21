import { createLibraryPattern } from '@/entities/library/api';
import { CreateLibraryPatternDto } from '@/entities/library/types';
import { useAsync } from '@/shared/hooks';
import { usePatternLibraryStore } from '../model';

export const useCreatePattern = () => {
  const addPatternToStore = usePatternLibraryStore((state) => state.addPattern);

  const {
    execute: createPattern,
    isLoading: isCreating,
    error,
  } = useAsync(async (dto: CreateLibraryPatternDto) => {
    const response = await createLibraryPattern(dto);
    addPatternToStore(response.data);
    return response.data;
  });

  return {
    createPattern,
    isCreating,
    error,
  };
};
