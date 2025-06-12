import { type FC, useEffect, use } from 'react';
import { useTranslation } from 'react-i18next';
import { confettiSchoolPride, confettiOnClick } from '@/lib/confetti';
import { ThemeContext } from '@/context/ThemeContext';

const cssLngConfig: Record<string, string> = {
  en: 'font-[balonku] text-shadow-lg dark:text-shadow-(--text-shadow-neon-raspberry) dark:animate-(--animate-neon-raspberry-flicker) dark:text-[#edb3dd] ',
  zh: 'font-[ZCOOL_KuaiLe] text-shadow-(--title-shadow) animate-(--animate-squish-three-times) dark:text-shadow-(--title-shadow-dark)',
};

export const Welcome: FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = use(ThemeContext);

  useEffect(() => {
    const welcomePageEl = document.getElementById('welcome-page');
    if (theme === 'light') {
      confettiSchoolPride('popular', 3, 0.5);
    }
    return () => {
      welcomePageEl?.removeEventListener('click', confettiOnClick);
    };
  }, []);

  useEffect(() => {
    const welcomePageEl = document.getElementById('welcome-page');
    if (theme === 'light') {
      welcomePageEl?.addEventListener('click', confettiOnClick);
    } else {
      welcomePageEl?.removeEventListener('click', confettiOnClick);
    }
  }, [theme]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-peach  select-none dark:bg-gray-900 transition-colors duration-500"
      id="welcome-page"
    >
      <h1
        className={`text-9xl text-raspberry transition-all duration-500 ${cssLngConfig[i18n.language] || cssLngConfig.en} `}
      >
        {t('greeting')}
      </h1>
    </div>
  );
};
