import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { confettiSchoolPride, confettiOnClick } from '@/lib/confetti';

const cssLngConfig: Record<string, string> = {
  en: 'font-[balonku] text-shadow-lg',
  zh: 'font-[ZCOOL_KuaiLe] text-shadow-(--title-shadow)',
};

export const Welcome: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const welcomePageEl = document.getElementById('welcome-page');
    confettiSchoolPride('popular', 3, 0.5);
    welcomePageEl?.addEventListener('click', confettiOnClick);
    return () => {
      welcomePageEl?.removeEventListener('click', confettiOnClick);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-peach  select-none"
      id="welcome-page"
    >
      <h1 className={`text-9xl text-raspberry  ${cssLngConfig[i18n.language] || cssLngConfig.en} `}>
        {t('greeting')}
      </h1>
    </div>
  );
};
