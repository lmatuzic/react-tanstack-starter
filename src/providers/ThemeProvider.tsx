import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type Theme = 'dark' | 'light';
type ContainerMode = 'container' | 'full';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  containerStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  containerMode: ContainerMode;
  setContainerMode: (mode: ContainerMode) => void;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  containerMode: 'container',
  setContainerMode: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'ui-theme',
  containerStorageKey = 'ui-container-mode',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  const [containerMode, setContainerMode] = useState<ContainerMode>(
    () =>
      (localStorage.getItem(containerStorageKey) as ContainerMode) ||
      'container',
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(containerStorageKey, containerMode);
  }, [containerMode, containerStorageKey]);

  const value = useMemo(() => {
    return {
      theme,
      setTheme: (newTheme: Theme) => {
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
      },
      containerMode,
      setContainerMode: (newMode: ContainerMode) => {
        setContainerMode(newMode);
      },
    };
  }, [theme, containerMode, storageKey]);

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
