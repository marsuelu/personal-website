import { createContext, useMemo } from 'react';
import { useTheme } from '@/hooks/useTheme';

const ThemeContext = createContext<{
  theme: string;
  setGlobalTheme: (newTheme: string) => void;
}>({ theme: 'light', setGlobalTheme: () => {} });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setGlobalTheme } = useTheme();
  const value = useMemo(() => ({ theme, setGlobalTheme }), [theme, setGlobalTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
