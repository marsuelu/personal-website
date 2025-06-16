import LightModeIcon from '@/assets/icons/light_mode_icon.svg?react';
import DarkModeIcon from '@/assets/icons/dark_mode_icon.svg?react';
import { type FC, use } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggler: FC = () => {
  const { theme, setGlobalTheme } = use(ThemeContext);

  return (
    <button
      className="w-8 h-8 cursor-pointer fixed top-10 right-30 text-gray-50/30 z-1000"
      onClick={() => setGlobalTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
export default ThemeToggler;
