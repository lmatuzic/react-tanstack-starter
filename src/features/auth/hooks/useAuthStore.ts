import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { initialAuthState } from '../constants';
import type { AuthState } from '../types';

const USERNAME = 'user';
const PASSWORD = 'password';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialAuthState,

      login: (username: string, password: string) => {
        set({ isLoading: true, error: null });

        if (username === USERNAME && password === PASSWORD) {
          set({
            isAuthenticated: true,
            username,
            error: null,
            isLoading: false,
          });
        } else {
          set({
            isLoading: false,
            error: 'Invalid username or password',
          });
        }
      },

      logout: () => {
        set({
          isAuthenticated: false,
          username: null,
          error: null,
          isLoading: false,
        });
      },
    }),
    {
      name: 'xolvi-auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        username: state.username,
      }),
    },
  ),
);
