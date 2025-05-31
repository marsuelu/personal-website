import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const cssLngConfig: Record<string, string> = {
  en: 'font-[balonku] text-shadow-lg',
  zh: 'font-[ZCOOL_KuaiLe] text-shadow-(--title-shadow)',
};

export const Welcome: FC = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log('welcome', t);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach ">
      <h1 className={`text-9xl text-raspberry  ${cssLngConfig[i18n.language] || cssLngConfig.en} `}>
        {t('greeting')}
      </h1>
    </div>
  );
};
