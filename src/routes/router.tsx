import { createHashRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Welcome = lazy(() => import('../pages/welcome/Index.tsx'));
const Home = lazy(() => import('../pages/home/Index.tsx'));
const Travel = lazy(() => import('../pages/travel/Index.tsx'));
const Resume = lazy(() => import('../pages/resume/Index.tsx'));
const Manicure = lazy(() => import('../pages/manicure/Index.tsx'));

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
