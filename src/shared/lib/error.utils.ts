import { AxiosError } from "axios";
import { ApiErrorResponse } from "../types";
import { showErrorMessage } from "./notification.utils";

export const handleError = (
  error: Error,
  params: { title?: string; message?: string } = {}
) => {
  const errorMessage = params.message || error.message || "Произошла ошибка";

  console.error(errorMessage);

  showErrorMessage(params.title || "Ошибка", errorMessage);
};

export const getApiErrorMessage = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message;
  }

  const message = (err as AxiosError<ApiErrorResponse>).response?.data?.message;
  return message || "Произошла ошибка";
};

export const handleApiError = (
  error: unknown,
  fallbackMessage = "Произошла ошибка"
): string => {
  const errorMessage = getApiErrorMessage(error);
  return errorMessage || fallbackMessage;
};
