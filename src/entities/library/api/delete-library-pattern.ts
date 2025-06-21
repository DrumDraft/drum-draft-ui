import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types/api';

export const deleteLibraryPattern = async (patternId: string) => {
  const response = await axiosClient.delete<ApiResponse<void>>(
    `/library/patterns/${patternId}`
  );

  return response.data;
};
