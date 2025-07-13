import LightModeIcon from '@/assets/icons/light_mode_icon.svg?react';
import DarkModeIcon from '@/assets/icons/dark_mode_icon.svg?react';
import { type FC, use, type CSSProperties } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

interface ThemeTogglerProps {
  styles?: CSSProperties;
  className?: string;
}

const ThemeToggler: FC<ThemeTogglerProps> = ({ styles, className }) => {
  const { theme, setGlobalTheme } = use(ThemeContext);

  return (
    <button
      className={`w-8 h-8 cursor-pointer  ${className}`}
      onClick={() => setGlobalTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Theme"
      style={styles}
    >
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
export default ThemeToggler;
