import { refresh } from '@/features/auth/api/services';
import axiosClient from './axios.client';

import type { AxiosError, InternalAxiosRequestConfig } from "axios";

interface CustomConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let queue: Array<{ resolve(v?: unknown): void; reject(e?: any): void }> = [];

function resolveQueue(err: any, value?: unknown) {
  queue.forEach((p) => (err ? p.reject(err) : p.resolve(value)));
  queue = [];
}

/* ---- request: Ничего не добавляем, cookie уже в withCredentials ---- */
axiosClient.interceptors.request.use((cfg) => cfg);

/* ---- response: 401 → refresh → повтор запроса ---- */
axiosClient.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const original = err.config as CustomConfig;
    if (!original || err.response?.status !== 401 || original._retry) {
      throw err;
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) =>
        queue.push({ resolve, reject })
      ).then(() => axiosClient(original));
    }

    original._retry = true;
    isRefreshing = true;

    try {
      await refresh(); // куки уйдут сами
      resolveQueue(null);
      return axiosClient(original);
    } catch (e) {
      resolveQueue(e, null);
      window.location.href = "/login";
      throw e;
    } finally {
      isRefreshing = false;
    }
  }
);
