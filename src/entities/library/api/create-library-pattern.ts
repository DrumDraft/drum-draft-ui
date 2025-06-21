import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types/api';
import { LibraryPattern } from '../types';
import { CreateLibraryPatternDto } from '../types/create-library-pattern-dto';

export const createLibraryPattern = async (dto: CreateLibraryPatternDto) => {
  const response = await axiosClient.post<ApiResponse<LibraryPattern>>(
    "/library/patterns",
    dto
  );

  return response.data;
};
