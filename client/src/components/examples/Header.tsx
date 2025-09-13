import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '../Header';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}