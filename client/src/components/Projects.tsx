import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Zap, Database, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Secure OTP/Password Less Login',
    description: 'Developed metadata-embedded links that include user data, authentication and contextual information, directing users to specific content or services post-auth. Integrated in FoodBridge\'s e-commerce web-app, improving user experience by simplifying the login process while maintaining robust security.',
    icon: <Shield className="h-8 w-8" />,
    technologies: ['Node.js', 'MongoDB', 'RESTful APIs', 'JWT', 'OTP System'],
    features: [
      'Metadata-embedded authentication links',
      'Passwordless login system',
      'Enhanced security protocols',
      'Seamless user experience',
      'E-commerce integration'
    ],
    status: 'Production',
    company: 'FoodBridge'
  },
  {
    title: 'Custom AWS SQS Sync Library',
    description: 'Built a comprehensive sync library from scratch using AWS SQS to enable seamless, real-time data synchronization between Storefront (Node.js) and Marketplace (OpenCart PHP). Resolved complex race conditions and data flow inconsistencies.',
    icon: <Zap className="h-8 w-8" />,
    technologies: ['AWS SQS', 'Node.js', 'TypeScript', 'OpenCart PHP', 'Queue Management'],
    features: [
      'Real-time data synchronization',
      'Race condition resolution',
      'Idempotent message handlers',
      'Structured message contracts',
      'Cross-platform integration'
    ],
    status: 'Production',
    company: 'Solutions Tree'
  },
  {
    title: 'Storefront Client Library',
    description: 'Developed a TypeScript NPM package (storefront-client-lib) to map and transform backend data for frontend needs, enabling seamless multi-frontend and multi-backend integration. Focused on type safety and developer experience.',
    icon: <Database className="h-8 w-8" />,
    technologies: ['TypeScript', 'NPM', 'Node.js', 'API Integration', 'Data Transformation'],
    features: [
      'TypeScript-first development',
      'Multi-frontend compatibility',
      'Data mapping and transformation',
      'Type safety enforcement',
      'Developer-friendly API'
    ],
    status: 'Production',
    company: 'Solutions Tree'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Innovative solutions built with modern technologies and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.company}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            project.status === 'Production' 
                              ? 'text-green-600 border-green-600' 
                              : 'text-blue-600 border-blue-600'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1"
                          data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => console.log(`View ${project.title} details`)}
                      data-testid={`button-view-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => console.log(`View ${project.title} code`)}
                      data-testid={`button-code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="inline-block hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  More Projects Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  I'm constantly working on new projects and exploring innovative technologies. 
                  Follow my journey and see what I'm building next.
                </p>
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  data-testid="button-discuss-project"
                  className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white font-semibold text-lg shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <span>Discuss a Project</span>
                    <Sparkles className="h-4 w-4 opacity-80" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </motion.button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}