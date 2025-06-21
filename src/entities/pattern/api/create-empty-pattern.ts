import { LibraryPattern } from '@/entities/library/types';
import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types';

export const createEmptyPattern = async (): Promise<
  ApiResponse<LibraryPattern>
> => {
  const response = await axiosClient.post<ApiResponse<LibraryPattern>>(
    "/library/patterns/new",
    {}
  );

  return response.data;
};
