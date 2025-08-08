import { type FC, useRef } from 'react';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!circleRef.current || !bannerRef.current) return;
      gsap.fromTo(
        circleRef.current,
        {
          scale: 5,
        },
        {
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          },
        }
      );
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: bannerRef }
  );

  return (
    <>
      <div id="resume_banner" ref={bannerRef} className="h-svh w-svw relative overflow-hidden">
        <div
          id="banner_circle"
          ref={circleRef}
          className={clsx(
            'banner-circle',
            'bg-[#eea3c8]',
            'opacity-60',
            'bg-[radial-gradient(circle_at_center_center,#f636c7,#eea3c8),repeating-radial-gradient(circle_at_center_center,#f636c7,#f636c7,32px,transparent_64px,transparent_32px)]',
            'bg-blend-multiply',
            'h-svh',
            'w-svw'
          )}
        ></div>
      </div>
      <h1 className="text-6xl">wft</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
      <h1 className="text-6xl">eee</h1>
    </>
  );
};

export default Banner;
