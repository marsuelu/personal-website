import { type FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import LanguageIcon from '@/assets/icons/language_icon.svg?react';
import { Earth as EarthIcon } from 'lucide-react';

import { type CSSProperties } from 'react';
import LanguageRadioGroup from './LangRadioGroup';

interface LanguageSelectorProps {
  styles?: CSSProperties;
  className?: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ styles, className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EarthIcon
          className={`w-6 h-6 cursor-pointer relative ${className}`}
          aria-label="Change Language"
          style={styles}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-8rem mt-4" sideOffset={0}>
        <LanguageRadioGroup />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LanguageSelector;
