import { type FC, use } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Home: FC = () => {
  const { theme } = use(ThemeContext);

  return (
    <div className="home-page min-h-lvh min-w-lvw transition-all-500">
      <h1>{theme}</h1>
    </div>
  );
};
export default Home;
