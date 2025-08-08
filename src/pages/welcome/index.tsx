import { type FC, useEffect, use, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { confettiSchoolPride, confettiOnClick } from '@/lib/confetti';
import { ThemeContext } from '@/context/ThemeContext';
import { Fireworks } from 'fireworks-js';
import { clsx } from 'clsx';
import StarButton from '@/components/StarButton';
import ThemeToggler from '@/components/Theme';
import LanguageSelector from '@/components/Language';
import { useNavigate } from 'react-router';

const cssLngConfig: Record<string, string> = {
  en: `font-[balonku] text-shadow-lg dark:text-shadow-(--text-shadow-neon-raspberry) 
  dark:animate-(--animate-neon-raspberry-flicker) dark:text-[#edb3dd]`,
  zh: `font-[ZCOOL_KuaiLe] text-shadow-(--title-shadow) animate-(--animate-squish-three-times) 
  dark:text-shadow-(--title-shadow-dark)`,
};

export const Welcome: FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = use(ThemeContext);
  const fireworks = useRef<any | null>(null);
  const fireworkTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const cancelFirework = () => {
    if (fireworks.current) {
      if (fireworks.current?.clear) fireworks.current.clear();
      if (fireworks.current?.canvas) {
        const parentEl = document.getElementById('welcome-page');
        if (parentEl?.contains(fireworks.current.canvas))
          parentEl.removeChild(fireworks.current.canvas);
      }
      fireworks.current = null;
    }
    if (fireworkTimeoutId.current) clearTimeout(fireworkTimeoutId.current);
  };

  useEffect(() => {
    const welcomePageEl = document.getElementById('welcome-page');
    if (theme === 'light') {
      confettiSchoolPride('popular', 3, 0.5);
    } else {
      if (!fireworks.current) {
        fireworks.current = new Fireworks(welcomePageEl as Element, {
          autoresize: true,
          opacity: 0.5,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 50,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 30,
          flickering: 50,
          lineStyle: 'round',
          hue: {
            min: 0,
            max: 360,
          },
          delay: {
            min: 50,
            max: 100,
          },
          rocketsPoint: {
            min: 50,
            max: 50,
          },
          lineWidth: {
            explosion: {
              min: 1,
              max: 3,
            },
            trace: {
              min: 1,
              max: 2,
            },
          },
          brightness: {
            min: 50,
            max: 80,
          },
          decay: {
            min: 0.015,
            max: 0.03,
          },
          mouse: {
            click: false,
            move: false,
            max: 1,
          },
        });
        fireworks.current.start();
      }
      fireworkTimeoutId.current = setTimeout(() => {
        cancelFirework();
      }, 6000);
    }
    return () => {
      welcomePageEl?.removeEventListener('click', confettiOnClick);
      cancelFirework();
    };
  }, []);

  useEffect(() => {
    const welcomePageEl = document.getElementById('welcome-page');
    if (theme === 'light') {
      welcomePageEl?.addEventListener('click', confettiOnClick);
      cancelFirework();
    } else {
      welcomePageEl?.removeEventListener('click', confettiOnClick);
    }
  }, [theme]);

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'relative',
        'h-screen',
        'min-w-fit',
        'bg-peach',
        'select-none',
        'dark:bg-gray-900',
        'transition-colors',
        'duration-500'
      )}
      id="welcome-page"
    >
      <div
        className={clsx(
          'container',
          'flex',
          'items-center',
          'justify-end',
          'gap-4',
          'absolute',
          'top-0',
          'm-auto',
          'pt-6',
          'z-100'
        )}
      >
        <ThemeToggler className="text-slate-600" />
        <LanguageSelector className="text-slate-600" />
      </div>
      <h1
        className={clsx(
          'relative',
          'z-10',
          'text-6xl',
          'sm:text-9xl',
          'text-raspberry',
          'transition-all',
          'duration-500',
          'animate-(--animate-fade-in)',
          'pb-10',
          cssLngConfig[i18n.language] || cssLngConfig.en
        )}
      >
        {t('greeting')}
      </h1>
      <StarButton
        onClick={() => {
          navigate('/home');
        }}
        color={theme === 'light' ? '#fcc419' : '#cf5376'}
        shadow={theme === 'light' ? '#f08c00' : '#cf5376'}
        glare="hsl(0 0% 100% / 0.75)"
        transition="0.2s"
        text={t('enter')}
      />
    </div>
  );
};

export default Welcome;
