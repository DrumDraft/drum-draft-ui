import axios, { AxiosInstance } from 'axios';

export function createServerClient(cookieHeader = ""): AxiosInstance {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: { Cookie: cookieHeader },
    timeout: 10_000,
  });
}
