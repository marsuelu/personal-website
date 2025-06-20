import { useEffect, useState, useRef } from 'react';

const getMediaTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || '');
  const lastMediaTheme = useRef<string>(getMediaTheme());

  const setGlobalTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const mediaTheme = getMediaTheme();
    setGlobalTheme(savedTheme || mediaTheme);
    // Check time every 15 minutes and update theme;
    // automatically switch to media theme once  it changes;
    const interval = setInterval(
      () => {
        if (lastMediaTheme.current !== mediaTheme) {
          lastMediaTheme.current = mediaTheme;
          if (theme !== mediaTheme) {
            setGlobalTheme(mediaTheme);
          }
        }
      },
      15 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, []);

  return { theme, setGlobalTheme };
};
