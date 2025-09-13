import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, MapPin, Phone, Sparkles, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  'Backend First MEAN Stack Developer',
  'TypeScript Specialist',
  'AWS Solutions Architect',
  'Node.js Expert'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRoleIndex]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2" data-testid="location-badge">
              <MapPin className="h-4 w-4 mr-2" />
              Mohali, Punjab
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Hi, I'm <span className="text-primary">Love Kumar</span>
            </h1>
            
            <div className="h-16 sm:h-20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                <span className="text-primary">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate backend developer with expertise in building scalable MEAN stack applications, 
            AWS integrations, and TypeScript-first development. Currently working at Solutions Tree, 
            creating innovative sync libraries and optimizing legacy systems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span data-testid="phone-number">+91 6396376753</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span data-testid="email-address">rr1150650@gmail.com</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            {/* Primary CTA - Get In Touch */}
            <motion.button
              onClick={scrollToContact}
              data-testid="button-contact"
              className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white font-semibold text-lg shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
                <Sparkles className="h-4 w-4 opacity-80" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </motion.button>

            {/* Secondary CTA - View Work */}
            <motion.button
              onClick={scrollToProjects}
              data-testid="button-projects"
              className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-600 border-2 border-slate-700 dark:border-slate-500 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-slate-500/25 hover:scale-105 hover:border-slate-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Eye className="h-5 w-5" />
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.button>

            {/* Tertiary CTA - Download Resume */}
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/Love_Kumar_Resume.pdf';
                link.download = 'Love_Kumar_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              data-testid="button-download-resume"
              className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:shadow-emerald-500/25 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-4 w-4"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </motion.button>
          </motion.div>

          {/* Key Skills Preview */}
          <div className="pt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Node.js', 'Angular', 'AWS SQS', 'MongoDB', 'RESTful APIs'].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="px-3 py-1 text-sm font-medium"
                  data-testid={`skill-badge-${skill.toLowerCase().replace(/\./g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}