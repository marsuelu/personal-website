import { type FC, use, type CSSProperties } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';

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
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
export default ThemeToggler;
