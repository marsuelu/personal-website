import { type FC } from 'react';
import Banner from './components/banner/Index';
import Intro from './components/intro/Index';

interface ResumeProps {}

const Resume: FC<ResumeProps> = () => {
  return (
    <div className="min-h-screen bg-fuchsia-400">
      <Banner />
      <Intro />
    </div>
  );
};

export default Resume;
