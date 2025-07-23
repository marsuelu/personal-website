import { type FC } from 'react';
import Banner from './banner/Index';

interface ResumeProps {}

const Resume: FC<ResumeProps> = () => {
  return (
    <div className="min-h-screen bg-fuchsia-400">
      <Banner />
    </div>
  );
};

export default Resume;
