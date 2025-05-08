export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export interface ApiSuccess<T> {
  ok?: true;
  data: T;
}

export interface ApiError {
  ok: false;
  message: string;
  errors?: Record<string, string[]>;
}

export interface TokenPayload {
  readonly accessToken: string;
}

export type TokenResponse = ApiSuccess<TokenPayload>;

export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export type ApiResponse<T = null> = ApiSuccess<T> | ApiError;
