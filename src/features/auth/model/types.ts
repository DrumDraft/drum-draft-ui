import { Viewer } from '@/entities/user/types';
import { login, logout } from '../api/services';

export interface AuthState {
  user: Viewer | null;
  isLoading: boolean;
}

export interface AuthContextValue extends AuthState {
  isAuthenticated: boolean;
  login: typeof login;
  logout: typeof logout;
  checkAuth: () => Promise<void>;
}
