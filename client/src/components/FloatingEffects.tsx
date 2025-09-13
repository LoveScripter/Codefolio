import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Brain, Lightbulb, Database, Cloud, Server, Cpu, Sparkles } from 'lucide-react';
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiAngular, 
  SiMongodb, 
  SiAmazon, 
  SiDocker,
  SiGit,
  SiJavascript 
} from 'react-icons/si';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  icon: React.ReactNode;
}

export default function FloatingEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create floating particles with tech logos
    const icons = [
      <SiTypescript className="h-4 w-4" />,
      <SiNodedotjs className="h-4 w-4" />,
      <SiAngular className="h-3 w-3" />,
      <SiMongodb className="h-3 w-3" />,
      <SiAmazon className="h-4 w-4" />,
      <SiDocker className="h-3 w-3" />,
      <SiGit className="h-4 w-4" />,
      <SiJavascript className="h-3 w-3" />
    ];

    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.x, 
              y: window.innerHeight + 50,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-blue-500/30 dark:text-blue-400/30"
            style={{
              transform: `scale(${particle.size})`,
              left: particle.x
            }}
          >
            {particle.icon}
          </motion.div>
        ))}
      </div>

      {/* Interactive Cursor Glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300
        }}
      >
        <div className="w-5 h-5 bg-blue-500/50 rounded-full blur-sm"></div>
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-10 dark:opacity-5"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 360,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className={`
                ${i % 3 === 0 ? 'w-8 h-8 bg-blue-500/20 rounded-full' : ''}
                ${i % 3 === 1 ? 'w-6 h-6 bg-purple-500/20 rotate-45 rounded-sm' : ''}
                ${i % 3 === 2 ? 'w-10 h-4 bg-pink-500/20 rounded-full' : ''}
                morphing-blob
              `}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Tech Logos */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          const techLogos = [
            <SiTypescript className="h-3 w-3 text-blue-500/40" />,
            <SiNodedotjs className="h-3 w-3 text-green-500/40" />,
            <SiAngular className="h-3 w-3 text-red-500/40" />,
            <SiMongodb className="h-3 w-3 text-green-600/40" />,
            <SiAmazon className="h-3 w-3 text-orange-500/40" />,
            <SiDocker className="h-3 w-3 text-blue-600/40" />,
            <SiGit className="h-3 w-3 text-orange-600/40" />,
            <SiJavascript className="h-3 w-3 text-yellow-500/40" />
          ];
          const randomLogo = techLogos[Math.floor(Math.random() * techLogos.length)];
          
          return (
            <motion.div
              key={`tech-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            >
              {randomLogo}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}