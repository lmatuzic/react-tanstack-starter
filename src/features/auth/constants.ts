import type { AuthState } from './types';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  username: null,
  error: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
};
