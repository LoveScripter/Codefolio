import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Home, User, Briefcase, Code, Mail, GraduationCap, MessageCircle, Sun, Moon, Monitor, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: <Home className="h-4 w-4" />, label: 'Home', target: '#hero' },
  { id: 'about', icon: <User className="h-4 w-4" />, label: 'About', target: '#about' },
  { id: 'experience', icon: <Briefcase className="h-4 w-4" />, label: 'Experience', target: '#experience' },
  { id: 'skills', icon: <Code className="h-4 w-4" />, label: 'Skills', target: '#skills' },
  { id: 'projects', icon: <MessageCircle className="h-4 w-4" />, label: 'Projects', target: '#projects' },
  { id: 'education', icon: <GraduationCap className="h-4 w-4" />, label: 'Education', target: '#education' },
  { id: 'contact', icon: <Mail className="h-4 w-4" />, label: 'Contact', target: '#contact' },
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      case 'professional-blue': return <Monitor className="h-4 w-4" />;
      default: return <Sun className="h-4 w-4" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      // Show floating nav after scrolling 200px
      setIsVisible(scrollTop > 200);

      // Determine active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.target)
      })).filter(section => section.element);

      let currentActiveSection = 'home'; // default fallback
      
      // Find the section that is most visible in the viewport
      let bestMatch = { id: 'home', distance: Infinity };
      
      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const sectionHeight = rect.bottom - rect.top;
        const visibilityRatio = visibleTop / Math.min(sectionHeight, viewportHeight);
        
        // If section is significantly visible (more than 20%) and near the top of viewport
        if (visibilityRatio > 0.2 && rect.top <= viewportHeight * 0.5) {
          const distanceFromTop = Math.abs(rect.top);
          if (distanceFromTop < bestMatch.distance) {
            bestMatch = { id: section.id, distance: distanceFromTop };
            currentActiveSection = section.id;
          }
        }
        
        // Special case: if we're at the very top, set to home
        if (scrollTop < 100) {
          currentActiveSection = 'home';
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Theme Switcher */}
          <div className="mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="w-12 h-12 rounded-full shadow-lg bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                  data-testid="theme-toggle"
                >
                  {getThemeIcon()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mb-2">
                <DropdownMenuItem onClick={() => setTheme('light')} data-testid="theme-light">
                  <Sun className="h-4 w-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')} data-testid="theme-dark">
                  <Moon className="h-4 w-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('professional-blue')} data-testid="theme-professional">
                  <Palette className="h-4 w-4 mr-2" />
                  Professional
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Scroll Progress Ring */}
          <div className="relative mb-4">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-muted/20"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                className="text-primary transition-all duration-300"
                strokeLinecap="round"
              />
            </svg>
            <Button
              size="icon"
              onClick={scrollToTop}
              className="absolute inset-2 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 pulse-glow"
              data-testid="button-scroll-top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>

          {/* Floating Navigation Menu */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            {/* Expand Toggle Button */}
            <Button
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 rounded-full shadow-lg bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              data-testid="button-expand-nav"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
            </Button>

            {/* Expanded Navigation Items */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute bottom-16 right-0 flex flex-col gap-3"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        size="sm"
                        variant={activeSection === item.id ? "default" : "outline"}
                        onClick={() => scrollToSection(item.target)}
                        className="w-auto px-3 py-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        data-testid={`nav-${item.id}`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Section Indicator - Repositioned to avoid overlap */}
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -left-20 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              >
                {navItems.find(item => item.id === activeSection)?.label}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}