import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Settings, Smartphone, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Programming Languages',
    color: 'text-blue-600',
    skills: [
      { name: 'TypeScript', level: 95, years: '2+' },
      { name: 'JavaScript', level: 90, years: '3+' },
      { name: 'HTML5', level: 85, years: '3+' },
      { name: 'CSS3', level: 80, years: '3+' },
      { name: 'PHP', level: 70, years: '1+' }
    ]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Frameworks & Databases',
    color: 'text-green-600',
    skills: [
      { name: 'Node.js', level: 95, years: '2+' },
      { name: 'Angular', level: 85, years: '2+' },
      { name: 'NestJS', level: 80, years: '1+' },
      { name: 'MongoDB', level: 90, years: '2+' },
      { name: 'SQL', level: 85, years: '2+' },
      { name: 'OpenCart', level: 75, years: '1+' }
    ]
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Cloud & APIs',
    color: 'text-purple-600',
    skills: [
      { name: 'AWS SQS', level: 90, years: '1+' },
      { name: 'AWS S3', level: 85, years: '1+' },
      { name: 'RESTful APIs', level: 95, years: '2+' },
      { name: 'Stripe Payment', level: 80, years: '1+' },
      { name: 'Razorpay Payment', level: 80, years: '1+' }
    ]
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Development Tools',
    color: 'text-orange-600',
    skills: [
      { name: 'Git & GitHub', level: 90, years: '3+' },
      { name: 'Postman', level: 85, years: '2+' },
      { name: 'Jira', level: 80, years: '1+' },
      { name: 'Confluence', level: 75, years: '1+' }
    ]
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Integration Services',
    color: 'text-red-600',
    skills: [
      { name: 'SMS Integration', level: 85, years: '1+' },
      { name: 'WhatsApp API', level: 80, years: '1+' },
      { name: 'OTP Systems', level: 90, years: '1+' },
      { name: 'Payment Gateways', level: 85, years: '1+' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                      {category.icon}
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            {skill.years}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                        data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="inline-block hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                  {[
                    'Backend Architecture', 'API Design', 'Database Optimization', 
                    'Real-time Data Sync', 'Legacy System Migration', 'Clean Code Practices',
                    'Microservices', 'Queue Management', 'Authentication Systems'
                  ].map((competency) => (
                    <Badge 
                      key={competency} 
                      variant="outline" 
                      className="px-3 py-2 text-sm font-medium"
                      data-testid={`competency-${competency.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}