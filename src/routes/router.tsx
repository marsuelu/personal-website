import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/index'));
const Home = lazy(() => import('../pages/home/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
