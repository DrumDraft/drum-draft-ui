import axiosClient from '@/shared/api/axios/axios.client';
import { ApiResponse } from '@/shared/types/api';
import { LibraryPattern } from '../types';

export const getLibraryPatterns = async () => {
  const response =
    await axiosClient.get<ApiResponse<LibraryPattern[]>>("/library/patterns");

  return response.data;
};
