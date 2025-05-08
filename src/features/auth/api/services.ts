import axiosClient from '@/shared/api/axios/axios.client';
import { createServerClient } from '@/shared/api/axios/axios.server';
import { ApiResponse, MessageResponseDto } from '@/shared/types';

export const login = (email: string, password: string) =>
  axiosClient.post<ApiResponse<MessageResponseDto>>("/auth/login", {
    email,
    password,
  });

export const logout = () => axiosClient.post("/auth/logout");

export async function refresh(cookieHeader?: string) {
  const client = cookieHeader ? createServerClient(cookieHeader) : axiosClient;
  await client.post<ApiResponse<MessageResponseDto>>("/auth/refresh"); // новый accessToken придёт в Set‑Cookie
}
