import { createHashRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/index'));
const Home = lazy(() => import('../pages/home/Index'));
const Travel = lazy(() => import('../pages/travel/Index'));
const Resume = lazy(() => import('../pages/resume/Index'));
const Manicure = lazy(() => import('../pages/manicure/Index'));

const router = createHashRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="resume" replace /> },
      { path: 'travel', element: <Travel /> },
      { path: 'resume', element: <Resume /> },
      { path: 'manicure', element: <Manicure /> },
    ],
  },
]);

export default router;
