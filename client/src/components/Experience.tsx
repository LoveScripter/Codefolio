import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experience = {
  company: 'Solutions Tree',
  position: 'Backend First MEAN Stack Developer',
  location: 'Mohali, Punjab',
  duration: 'August 2024 - Present',
  type: 'Full-time',
  achievements: [
    {
      title: 'Custom Sync Library Development',
      description: 'Built a custom sync library using AWS SQS from scratch to enable seamless, real-time data sync between Storefront (Node.js) and Marketplace (OpenCart PHP)'
    },
    {
      title: 'TypeScript NPM Package',
      description: 'Built storefront-client-lib (TypeScript npm package) to map and transform backend data for frontend needs, enabling seamless multi-frontend - multi-backend integration'
    },
    {
      title: 'Race Condition Resolution',
      description: 'Faced issues with inconsistent data flow and race conditions; resolved through queue management, idempotent handlers, and structured message contracts'
    },
    {
      title: 'RESTful API Development',
      description: 'Built and scaled RESTful APIs for Storefront (MEAN stack) enabling product, order, and payment flows, resulting in faster checkout process'
    },
    {
      title: 'Authentication Innovation',
      description: 'Integrated OTP-based passwordless login using metadata links, reducing user drop-offs and improving authentication experience'
    },
    {
      title: 'Legacy System Optimization',
      description: 'Tackled legacy system limitations in Marketplace (OpenCart PHP) by modularizing code and optimizing DB queries, enhancing performance and maintainability'
    },
    {
      title: 'Dynamic Backend Architecture',
      description: 'Solved role-based access and store-level configuration challenges using dynamic backend schemas'
    },
    {
      title: 'Clean Code Practices',
      description: 'Learned and applied NestJS principles, followed clean code, version control, and API design best practices to ensure scalable development'
    },
    {
      title: 'TypeScript Leadership',
      description: 'Led TypeScript-first backend development for the Storefront platform, ensuring type safety, reducing runtime bugs, and improving developer efficiency'
    }
  ],
  technologies: [
    'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Angular', 'MongoDB', 
    'AWS SQS', 'AWS S3', 'RESTful APIs', 'OpenCart PHP', 'Git', 'Postman'
  ]
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Building scalable backend solutions and innovative integrations
            </p>
          </div>

          {/* Experience Card */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    {experience.company}
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-muted-foreground">
                    {experience.position}
                  </h3>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {experience.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-6">Key Achievements</h4>
                <div className="grid gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex gap-4 p-4 rounded-lg bg-muted/30 hover-elevate transition-all duration-200"
                      data-testid={`achievement-${index}`}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-foreground">
                          {achievement.title}
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="px-3 py-1"
                      data-testid={`tech-${tech.toLowerCase().replace(/\./g, '-').replace(/\s/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}