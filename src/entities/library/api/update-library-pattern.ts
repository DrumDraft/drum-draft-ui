import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types/api';
import { LibraryPattern } from '../types';
import { UpdateLibraryPatternDto } from '../types/update-library-pattern-dto';

export const updateLibraryPattern = async (
  patternId: number,
  dto: UpdateLibraryPatternDto
) => {
  const response = await axiosClient.patch<ApiResponse<LibraryPattern>>(
    `/library/patterns/${patternId}`,
    dto
  );

  return response.data;
};
