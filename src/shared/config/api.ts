export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  endpoints: {
    patterns: {
      list: "/patterns",
    },
    auth: {
      login: "/auth/login",
      register: "/auth/register",
      logout: "/auth/logout",
    },
  },
} as const;

export type ApiConfig = typeof API_CONFIG;
