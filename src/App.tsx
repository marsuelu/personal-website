import { ThemeProvider } from './context/ThemeContext.tsx';
import { RouterProvider } from 'react-router';
import { Suspense } from 'react';
import router from './routes/router';

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<h1>What the hell...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
