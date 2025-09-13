import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="h-4 w-4" />,
    href: '#', // TODO: Add actual GitHub profile URL
    description: 'View my code repositories'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    href: '#', // TODO: Add actual LinkedIn profile URL
    description: 'Connect professionally'
  },
  {
    name: 'Email',
    icon: <Mail className="h-4 w-4" />,
    href: 'mailto:rr1150650@gmail.com',
    description: 'Send me an email'
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Love Kumar
                </h3>
                <p className="text-muted-foreground mb-4">
                  Backend First MEAN Stack Developer
                </p>
                <Badge variant="secondary" className="mb-4">
                  Available for Projects
                </Badge>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate about building scalable backend solutions and creating 
                innovative integrations. Always excited to work on challenging projects 
                that make a difference.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover-elevate"
                    data-testid={`social-${link.name.toLowerCase()}`}
                  >
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      title={link.description}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid={`footer-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a 
                    href="mailto:rr1150650@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="footer-email"
                  >
                    rr1150650@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+916396376753"
                    className="text-foreground hover:text-primary transition-colors"
                    data-testid="footer-phone"
                  >
                    +91 6396376753
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground">Mohali, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Love Kumar. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover-elevate"
              data-testid="scroll-to-top"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>

          {/* Technologies Used */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-3">
                Built with modern technologies
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui'].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="text-xs"
                    data-testid={`footer-tech-${tech.toLowerCase().replace(/\//g, '-')}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}