import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '../Header';

export default function ThemeContextExample() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}