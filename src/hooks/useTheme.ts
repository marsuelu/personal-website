import { useEffect, useState } from 'react';

const getTimeTheme = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7 ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || '');

  const setGlobalTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const mediaTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setGlobalTheme(savedTheme || mediaTheme);

    // Check time every 15 minutes and update theme
    const interval = setInterval(
      () => {
        if (!localStorage.getItem('theme')) {
          setGlobalTheme(getTimeTheme());
        }
      },
      15 * 60 * 1000
    );
    return () => clearInterval(interval);
  }, []);

  return { theme, setGlobalTheme };
};
