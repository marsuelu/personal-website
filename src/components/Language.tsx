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

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const [curr, setCurr] = useState(i18n.language);
  const changeLanguage = (lang: string) => {
    setCurr(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LanguageIcon className="w-8 h-8 cursor-pointer fixed top-10 right-10 text-gray-50/30" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30">
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
