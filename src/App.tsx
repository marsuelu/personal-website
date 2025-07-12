import { ThemeProvider } from './context/ThemeContext.tsx';
import { RouterProvider } from 'react-router';
import router from './routes/router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
