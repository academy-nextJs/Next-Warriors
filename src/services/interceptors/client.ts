'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';

export function useApiClient() {
  const { data: session } = useSession();

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  instance.interceptors.request.use((config) => {
    const token = session?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401 && typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return instance;
}
