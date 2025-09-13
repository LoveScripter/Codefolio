import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen, Brain, Zap, Code2, Lightbulb, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const education = {
  degree: 'Diploma in Computer Science',
  institution: 'Seth Jai Parkash Polytechnic',
  duration: '2021 - 2024',
  cgpa: '8.6/10',
  location: 'Punjab, India',
  subjects: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Web Development',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Programming Languages',
    'Software Testing'
  ],
  achievements: [
    'Maintained consistent academic excellence with 8.6 CGPA',
    'Active participation in coding competitions',
    'Led multiple group projects and presentations',
    'Specialized in backend development during final year'
  ]
};

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic foundation in computer science and software development
            </p>
          </div>

          {/* Education Card */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <GraduationCap className="h-7 w-7 text-primary" />
                    {education.degree}
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-muted-foreground">
                    {education.institution}
                  </h3>
                  <p className="text-muted-foreground">{education.location}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
                    <Calendar className="h-4 w-4" />
                    {education.duration}
                  </Badge>
                  <Badge variant="default" className="flex items-center gap-2 px-4 py-2">
                    <Award className="h-4 w-4" />
                    CGPA: {education.cgpa}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Academic Performance */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Core Subjects */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Core Subjects
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {education.subjects.map((subject, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover-elevate transition-all duration-200"
                        data-testid={`subject-${subject.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {education.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="flex gap-3 p-4 rounded-lg bg-muted/30 hover-elevate transition-all duration-200"
                        data-testid={`achievement-${index}`}
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Academic Highlight */}
              <div className="text-center py-8 border-t border-border">
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Academic Excellence
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my diploma program, I maintained a strong academic record with a CGPA of 8.6/10. 
                    My coursework provided a solid foundation in computer science fundamentals, which I've successfully 
                    applied in my professional career. The program's emphasis on practical application and project-based 
                    learning prepared me well for the challenges of modern software development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}