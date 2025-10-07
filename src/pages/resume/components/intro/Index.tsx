import { type FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { twMerge } from 'tailwind-merge';
import {
  MousePointerClick as MousePointerClickIcon,
  CircleCheck as CircleCheckIcon,
  ChevronsLeftRightEllipsis as ChevronsLeftRightEllipsisIcon,
  Webcam as WebcamIcon,
} from 'lucide-react';
import { clsx } from 'clsx';

gsap.registerPlugin([ScrollTrigger, SplitText]);

const Intro: FC = () => {
  const cssLngConfig: Record<string, string> = {
    en: 'font-sour-gummy',
    zh: 'font-ZCOOL',
  };

  const { t, i18n } = useTranslation();
  const introRef = useRef<HTMLDivElement>(null);

  // Font size configuration for different languages
  const getFontSizeClasses = (language: string) => {
    const fontSizes: Record<string, { mobile: string; desktop: string }> = {
      en: { mobile: 'text-base', desktop: 'md:text-2xl' }, // English - smaller
      zh: { mobile: 'text-xl', desktop: 'md:text-4xl' }, // Chinese - original size
    };

    // Default fallback for unknown languages
    const defaultSize = { mobile: 'text-xl', desktop: 'md:text-4xl' };

    return fontSizes[language] || defaultSize;
  };

  const currentFontSize = getFontSizeClasses(i18n.language);

  useGSAP(
    () => {
      if (!introRef.current) return;
      // Hero section typing effect
      document.fonts.ready.then(() => {
        SplitText.create('.text-split', {
          type: 'chars',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.chars, {
              duration: 0.05,
              opacity: 0,
              stagger: 0.02,
              scrollTrigger: {
                trigger: '.text-split',
                start: 'top 50%',
              },
            });
          },
        });
      });
      // other sections rise to show effect
      const showRises = introRef.current.querySelectorAll('.show-rise');
      showRises.forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: introRef }
  );

  return (
    <div
      id="resume_intro"
      ref={introRef}
      className={clsx('bg-beige', 'min-h-screen', cssLngConfig[i18n.language] || cssLngConfig.en)}
    >
      {/* Hero Section */}
      <section className="text-split container mx-auto px-4 py-20 md:py-32">
        <div className="relative mb-16 text-center">
          <h1 className="text-barbie relative mb-6 text-5xl font-extrabold md:text-7xl">
            {t('intro_0')}
          </h1>
          <p className="text-gentle mx-auto max-w-3xl text-lg font-semibold md:text-2xl">
            {t('intro_1')}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="show-rise container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-8 flex items-center space-x-3">
              <div className="bg-gentle flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                <MousePointerClickIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-barbie text-2xl font-extrabold md:text-3xl">
                Technical Expertise
              </h2>
            </div>
            <p
              className={twMerge(
                'text-gentle leading-relaxed font-semibold',
                currentFontSize.mobile,
                currentFontSize.desktop
              )}
            >
              {t('intro_2')}
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                <span
                  key={skill}
                  className="text-barbie bg-gentle transform rounded-full px-4 py-2 text-base font-bold shadow-md transition-shadow hover:scale-105 hover:shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-barbie rounded-3xl p-8 text-white shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold">Backend Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="show-rise container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div
              className="rounded-3xl bg-white p-8 shadow-lg"
              style={{ border: '4px solid #eea3c8' }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gentle flex h-16 w-16 items-center justify-center rounded-full shadow-md">
                    <CircleCheckIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-barbie text-lg font-bold">Senior Developer</h3>
                    <p className="text-gentle text-sm">Tech Company • 2022-Present</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-barbie flex h-16 w-16 items-center justify-center rounded-full shadow-md">
                    <ChevronsLeftRightEllipsisIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-barbie text-lg font-bold">Full Stack Developer</h3>
                    <p className="text-gentle text-sm">Startup • 2020-2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="mb-8 flex items-center space-x-3">
              <div className="bg-barbie flex h-16 w-16 items-center justify-center rounded-full shadow-md">
                <WebcamIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-barbie text-2xl font-extrabold md:text-3xl">
                Professional Journey
              </h2>
            </div>
            <p
              className={twMerge(
                'text-gentle leading-relaxed font-semibold',
                currentFontSize.mobile,
                currentFontSize.desktop
              )}
            >
              {t('intro_3')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="show-rise container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-barbie mb-4 text-3xl font-extrabold md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-gentle mx-auto max-w-2xl text-lg font-semibold">{t('intro_4')}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: 'E-Commerce Platform', tech: 'React, Node.js, MongoDB' },
            { title: 'AI Chat Application', tech: 'Python, TensorFlow, FastAPI' },
            { title: 'Mobile App', tech: 'React Native, Firebase' },
          ].map((project, index) => (
            <div
              key={index}
              className="transform rounded-3xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ border: '4px solid #eea3c8' }}
            >
              <div
                className="mb-4 h-16 w-16 rounded-full shadow-lg"
                style={{ backgroundColor: index % 2 === 0 ? '#eea3c8' : '#f636c7' }}
              ></div>
              <h3 className="text-barbie mb-2 text-lg font-bold">{project.title}</h3>
              <p className="text-gentle text-sm">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="show-rise container mx-auto px-4 py-16 md:py-24">
        <div className="bg-barbie rounded-3xl p-8 text-center text-white shadow-lg md:p-12">
          <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p
            className={twMerge('mb-8 opacity-90', currentFontSize.mobile, currentFontSize.desktop)}
          >
            {t('intro_5')}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="text-barbie rounded-full bg-white px-8 py-3 font-bold shadow-md transition-colors hover:bg-gray-50">
              Get In Touch
            </button>
            <button className="text-barbie rounded-full border-2 border-white px-8 py-3 font-bold shadow-md transition-colors hover:bg-white hover:text-pink-600">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
