import { type FC } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import LanguageRadioGroup from '@/components/LangRadioGroup';
import Theme from './Theme';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuProps {
  className?: string;
}

const Menu: FC<MenuProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MenuIcon className="cursor-pointer text-gray-800" />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
            <DropdownMenuLabel className="DropdownMenuLabel">{t('chooseTab')}</DropdownMenuLabel>
            {/* Radio group for routing to different pages using navigate */}
            <DropdownMenuRadioGroup
              value={location.pathname.replace('/home/', '') || 'resume'}
              onValueChange={(value) => {
                navigate(`/home/${value}`);
              }}
            >
              <DropdownMenuRadioItem value="resume">{t('resume')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="travel">{t('travel')}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="manicure">{t('manicure')}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator className="DropdownMenuSeparator" />
            <Theme />
            <DropdownMenuSeparator className="DropdownMenuSeparator" />
            <DropdownMenuLabel className="DropdownMenuLabel">{t('setLanguage')}</DropdownMenuLabel>
            <LanguageRadioGroup />
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
};
export default Menu;
