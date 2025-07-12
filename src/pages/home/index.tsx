import { type FC, use, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
              <span className="text-sm text-gray-600">Theme: {theme}</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
      <div id="smooth-wrapper">
        {/* Content with padding to account for fixed header */}
        <div id="smooth-content" className="pt-24 bg-fuchsia-600">
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
          <h1 className="text-9xl">{theme}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
