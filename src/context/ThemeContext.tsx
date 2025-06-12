import { createContext } from 'react';
import { useTheme } from '@/hooks/useTheme';

const ThemeContext = createContext<{
  theme: string;
  setGlobalTheme: (newTheme: string) => void;
}>({ theme: 'light', setGlobalTheme: () => {} });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setGlobalTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setGlobalTheme }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
