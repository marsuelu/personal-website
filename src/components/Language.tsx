import { type FC, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LanguageIcon from '@/assets/icons/language_icon.svg?react';
import { useTranslation } from 'react-i18next';
import { type CSSProperties } from 'react';

interface LanguageSelectorProps {
  styles?: CSSProperties;
  className?: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ styles, className }) => {
  const { i18n } = useTranslation();
  const [curr, setCurr] = useState(i18n.language);
  const changeLanguage = (lang: string) => {
    setCurr(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LanguageIcon
          className={`w-6 h-6 cursor-pointer relative ${className}`}
          aria-label="Change Language"
          style={styles}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-8rem mt-4" sideOffset={0}>
        <DropdownMenuRadioGroup value={curr} onValueChange={changeLanguage}>
          {Object.entries(i18n.services.resourceStore.data).map(([langKey, langObj]) => (
            <DropdownMenuRadioItem key={langKey} value={langKey}>
              {(langObj as { translation?: { name?: string } })?.translation?.name || langKey}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LanguageSelector;
