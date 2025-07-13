import { type FC, use, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import LanguageSelector from '@/components/Language';
import ThemeToggler from '@/components/Theme';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home: FC = () => {
  const { theme } = use(ThemeContext);
  const headerRef = useRef<HTMLDivElement>(null);

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
            <div className="flex items-center space-x-4">
              <ThemeToggler className="text-gray-800" />
              <LanguageSelector className="text-gray-800" />
            </div>
          </div>
        </div>
      </header>
      <div id="smooth-wrapper">
        {/* Content with padding to account for fixed header */}
        <div id="smooth-content" className="pt-24 bg-fuchsia-600">
          <h1 className="text-9xl">{theme}1</h1>
          <h1 className="text-9xl">{theme}2</h1>
          <h1 className="text-9xl">{theme}3</h1>
          <h1 className="text-9xl">{theme}4</h1>
          <h1 className="text-9xl">{theme}5</h1>
          <h1 className="text-9xl">{theme}6</h1>
          <h1 className="text-9xl">{theme}7</h1>
          <h1 className="text-9xl">{theme}8</h1>
          <h1 className="text-9xl">{theme}9</h1>
          <h1 className="text-9xl">{theme}10</h1>
          <h1 className="text-9xl">{theme}11</h1>
          <h1 className="text-9xl">{theme}12</h1>
          <h1 className="text-9xl">{theme}13</h1>
          <h1 className="text-9xl">{theme}14</h1>
          <h1 className="text-9xl">{theme}15</h1>
          <h1 className="text-9xl">{theme}16</h1>
          <h1 className="text-9xl">{theme}17</h1>
          <h1 className="text-9xl">{theme}18</h1>
          <h1 className="text-9xl">{theme}19</h1>
          <h1 className="text-9xl">{theme}20</h1>
          <h1 className="text-9xl">{theme}21</h1>
          <h1 className="text-9xl">{theme}22</h1>
          <h1 className="text-9xl">{theme}23</h1>
          <h1 className="text-9xl">{theme}24</h1>
          <h1 className="text-9xl">{theme}25</h1>
          <h1 className="text-9xl">{theme}26</h1>
          <h1 className="text-9xl">{theme}27</h1>
          <h1 className="text-9xl">{theme}28</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
