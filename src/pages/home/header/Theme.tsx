import { type FC, use } from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Switch from '@/components/ui/switch';
import { ThemeContext } from '@/context/ThemeContext';
import { Moon as MoonIcon } from 'lucide-react';

const Theme: FC = () => {
  const { theme, setGlobalTheme } = use(ThemeContext);
  return (
    <DropdownMenuItem className="flex justify-between" onSelect={(e) => e.stopPropagation()}>
      <MoonIcon />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(val) => {
          setGlobalTheme(val ? 'dark' : 'light');
        }}
      />
    </DropdownMenuItem>
  );
};
export default Theme;
