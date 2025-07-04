export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  error: string | null;
  isLoading: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}
