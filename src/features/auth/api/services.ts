import { Viewer } from '@/entities/user/types';
import axiosClient from '@/shared/api/axios/axios.client';
import { createServerClient } from '@/shared/api/axios/axios.server';
import { ApiResponse, MessageDto, RegisterDto } from '@/shared/types';
import { LoginDto } from '../model/login.dto';

export const register = (params: RegisterDto) =>
  axiosClient.post<ApiResponse<MessageDto>>("/auth/register", params);

export const login = (params: LoginDto) =>
  axiosClient.post<ApiResponse<MessageDto>>("/auth/login", params);

export const logout = () => axiosClient.post("/auth/logout");

export async function refresh(cookieHeader?: string) {
  const client = cookieHeader ? createServerClient(cookieHeader) : axiosClient;
  await client.post<ApiResponse<MessageDto>>("/auth/refresh"); // новый accessToken придёт в Set‑Cookie
}

export const getCurrentUser = async () => {
  const { data } = await axiosClient.get<ApiResponse<Viewer>>("/auth/me");
  if (data.ok) {
    return data.data;
  }

  return null;
};
