import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { ThemeProvider, useTheme } from '@shopify/restyle';
import { darkTheme, lightTheme, type Theme } from '../theme';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  mode: ThemeMode;

  isDark: boolean;

  toggleTheme: () => void;

  setTheme: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: ReactNode;
  storageTheme?: string;
};

export function AppThemeProvider({ children, storageTheme }: Props) {
  const colorScheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

  const checkTheme = (): 'light' | 'dark' => {
    if (storageTheme && storageTheme !== 'system') {
      return storageTheme as 'light' | 'dark';
    } else {
      return colorScheme;
    }
  };

  const [mode, setMode] = useState<ThemeMode>(checkTheme());

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (nextMode: ThemeMode) => {
    setMode(nextMode);
  };

  const value = useMemo(
    () => ({
      mode,

      isDark: mode === 'dark',

      toggleTheme,

      setTheme,
    }),
    [mode]
  );

  const theme: Theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeMode must be used inside AppThemeProvider');
  }

  const theme = useTheme<Theme>();

  return {
    theme,

    mode: context.mode,

    isDark: context.isDark,

    toggleTheme: context.toggleTheme,

    setTheme: context.setTheme,
  };
}
