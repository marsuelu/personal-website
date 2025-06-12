import { Welcome } from './pages/welcome/index.tsx';
import LanguageSelector from './components/Language';
import ThemeToggler from './components/Theme';
import { ThemeProvider } from './context/ThemeContext.tsx';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <LanguageSelector />
      <Welcome />
    </ThemeProvider>
  );
}

export default App;
