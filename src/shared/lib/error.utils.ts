import { AxiosError } from 'axios';
import { ApiError } from '../types';
import { showErrorMessage } from './notification.utils';

export const handleError = (
  error: Error,
  params: { title?: string; message?: string } = {}
) => {
  const errorMessage = params.message || error.message || "Произошла ошибка";

  console.error(errorMessage);

  showErrorMessage(params.title || "Ошибка", errorMessage);
};

export const getApiErrorMessage = (
  err: unknown,
  defaultMessage?: string
): string => {
  const message = (err as AxiosError<ApiError>).response?.data?.message;
  if (message) {
    return message;
  }

  return defaultMessage ?? "Произошла неизвестная ошибка";
};
