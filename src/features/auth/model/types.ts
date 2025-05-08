import { Viewer } from '@/entities/user/types';
import { login, logout } from '../api/services';

export interface AuthState {
  user: Viewer | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextValue extends AuthState {
  login: typeof login;
  logout: typeof logout;
  checkAuth: () => Promise<void>;
}
