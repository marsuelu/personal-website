import { type FC, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import LanguageSelector from '@/components/Language';
import ThemeToggler from '@/components/Theme';
import Menu from './header/Menu.tsx';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dot as DotIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const tabConfig = ['resume', 'travel', 'manicure'];

const Home: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState(location.pathname.replace('/home/', '') || 'resume');

  useGSAP(() => {
    // page scroll
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
    // header show/hide
    const header = headerRef.current;
    if (!header) return;
    const headerH = header.clientHeight;
    const headerAnimation = gsap
      .from(header, {
        yPercent: -100,
        duration: 0.3,
        ease: 'power2.inOut',
      })
      .progress(1);
    ScrollTrigger.create({
      trigger: '#smooth-content',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (self.direction === -1 || self.scroll() < headerH) {
          headerAnimation.play();
        } else {
          headerAnimation.reverse();
        }
      },
    });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
      >
        <div className="container px-4 py-4 m-auto">
          <div className="flex items-center justify-end sm:justify-between">
            <div className="hidden items-center space-x-4 sm:flex">
              <h1 className="text-2xl font-bold text-gray-800">（*´▽｀*）</h1>
            </div>
            <Menu className="sm:hidden" />
            <div className="hidden sm:flex items-center space-x-4">
              <nav className="flex justify-start  gap-4 mr-10">
                {tabConfig.map((v, i) => (
                  <div
                    className={twMerge(
                      `
                        group relative cursor-pointer max-w-xs text-ellipsis overflow-hidden text-xl/relaxed text-gray-800
                        duration-300 px-4 [&.active>span]:text-fuchsia-600 
                      `,
                      i === tabConfig.findIndex((a) => a === currentTab) ? 'active' : ''
                    )}
                    onClick={(e) => {
                      navigate(`/home/${v}`);
                      setCurrentTab(v);
                    }}
                  >
                    <DotIcon
                      size={20}
                      strokeWidth={8}
                      className="absolute -left-1 top-2 text-fuchsia-600 hidden group-hover:inline-block"
                    />
                    <span>{t(v)}</span>
                  </div>
                ))}
              </nav>
              <ThemeToggler className="text-gray-800" />
              <LanguageSelector className="text-gray-800" />
            </div>
          </div>
        </div>
      </header>
      <div id="smooth-wrapper">
        {/* Content with padding to account for fixed header */}
        <div id="smooth-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
