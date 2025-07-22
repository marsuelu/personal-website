import { type FC, useEffect, useState } from 'react';
import { DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import { type CSSProperties } from 'react';

interface LanguageRadioGroupProps {
  styles?: CSSProperties;
  className?: string;
}

const LanguageRadioGroup: FC<LanguageRadioGroupProps> = () => {
  const { i18n } = useTranslation();
  const [curr, setCurr] = useState(i18n.language);
  const changeLanguage = (lang: string) => {
    setCurr(lang);
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    console.log('i18n.language', i18n.language);
  }, []);
  return (
    <DropdownMenuRadioGroup value={curr} onValueChange={changeLanguage}>
      {Object.entries(i18n.services.resourceStore.data).map(([langKey, langObj]) => (
        <DropdownMenuRadioItem
          key={langKey}
          value={langKey}
          onClick={(e) => e.stopPropagation()}
          onSelect={(e) => e.preventDefault()}
        >
          {(langObj as { translation?: { name?: string } })?.translation?.name || langKey}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
};
export default LanguageRadioGroup;
