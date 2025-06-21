import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types/api';
import { LibraryPattern } from '../types';

export const getLibraryPattern = async (id: string) => {
  const response = await axiosClient.get<ApiResponse<LibraryPattern>>(
    `/library/patterns/${id}`
  );

  return response.data;
};
