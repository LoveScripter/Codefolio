import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Code, Database, Cloud, Users, Brain, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_55957d36.png';

const highlights = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'TypeScript Expert',
    description: 'Leading TypeScript-first backend development with strong typing and reduced runtime bugs'
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Backend Specialist',
    description: 'Built scalable RESTful APIs and optimized legacy systems for enhanced performance'
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'AWS Integration',
    description: 'Developed custom sync libraries using AWS SQS for seamless real-time data synchronization'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Problem Solver',
    description: 'Resolved complex race conditions and implemented role-based access with dynamic schemas'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building robust backend solutions and creating seamless integrations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileImage} alt="Love Kumar" />
                  <AvatarFallback className="text-2xl font-bold">LK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Love Kumar</h3>
                  <p className="text-lg text-muted-foreground">Backend First MEAN Stack Developer</p>
                  <Badge variant="secondary" className="mt-2">
                    Solutions Tree
                  </Badge>
                </div>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm a passionate backend developer with a strong focus on the MEAN stack, 
                  currently working at Solutions Tree since August 2024. My expertise lies in 
                  building scalable backend solutions, with particular strength in TypeScript, 
                  Node.js, and AWS integrations.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  I specialize in creating robust APIs, implementing complex data synchronization 
                  systems, and optimizing legacy codebases. My recent work includes building a 
                  custom sync library using AWS SQS and developing TypeScript npm packages for 
                  seamless multi-frontend integration.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  When I'm not coding, I'm constantly learning new technologies and contributing 
                  to innovative solutions that bridge the gap between complex backend systems 
                  and user-friendly frontend experiences.
                </p>
              </div>
            </div>

            {/* Enhanced Highlights Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                
                <Card className="relative overflow-hidden border-2 border-gradient bg-card/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
                  
                  <CardContent className="relative p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6"
                      >
                        <Brain className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-2xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        Technical Expertise
                      </motion.h3>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid gap-6">
                      {highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="group relative"
                        >
                          <Card className="relative h-full hover-elevate transition-all duration-300 border-2 hover:border-primary/30">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <motion.div 
                                  className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {highlight.icon}
                                </motion.div>
                                <div className="space-y-2">
                                  <h4 className="text-lg font-semibold text-foreground">
                                    {highlight.title}
                                  </h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    {highlight.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills Stats */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border"
                    >
                      {[
                        { label: 'Experience', value: '1+ Year', icon: <Lightbulb className="h-5 w-5" /> },
                        { label: 'Projects', value: '15+', icon: <Code className="h-5 w-5" /> },
                        { label: 'Technologies', value: '20+', icon: <Zap className="h-5 w-5" /> },
                        { label: 'Success Rate', value: '98%', icon: <TrendingUp className="h-5 w-5" /> }
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                          className="text-center group"
                        >
                          <div className="flex items-center justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                            {stat.icon}
                          </div>
                          <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}