import { useEffect, useState, useRef } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || '');

  const setGlobalTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    // Initialize theme based on localStorage or media query
    const savedTheme = localStorage.getItem('theme');
    const mediaTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setGlobalTheme(savedTheme || mediaTheme);
    // Listen for changes in the system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setGlobalTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { theme, setGlobalTheme };
};
