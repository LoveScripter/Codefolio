# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like those of Kent C. Dodds, Josh Comeau, and Brittany Chiang, focusing on clean aesthetics that showcase technical expertise while maintaining professional credibility.

## Core Design Elements

### Color Palette
**Light Theme:**
- Primary: 220 13% 18% (Dark blue-gray)
- Background: 0 0% 98% (Off-white)
- Surface: 0 0% 100% (Pure white)
- Text: 220 13% 18%
- Accent: 217 91% 60% (Modern blue)

**Dark Theme:**
- Primary: 217 91% 60% (Modern blue)
- Background: 222 84% 5% (Rich dark)
- Surface: 220 13% 18% (Dark blue-gray)
- Text: 210 40% 98% (Off-white)
- Accent: 142 71% 45% (Success green)

**Professional Blue Theme:**
- Primary: 214 100% 97% (Light blue)
- Background: 214 32% 91% (Soft blue-gray)
- Surface: 0 0% 100% (White)
- Text: 220 13% 18%
- Accent: 217 91% 60% (Blue)

### Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif
- **Code Font**: JetBrains Mono (Google Fonts) - For code snippets
- **Headings**: 2xl-6xl weights 600-700
- **Body**: Base-lg weights 400-500
- **Code**: Sm-base weight 400

### Layout System
**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 24 for consistent rhythm
- Sections: py-24
- Components: p-8, gap-8
- Content blocks: mb-12, mt-6
- Cards: p-6

### Component Library

**Navigation:**
- Fixed header with blur backdrop
- Logo/name on left, navigation links center, theme toggle right
- Mobile: Hamburger menu with slide-out drawer

**Hero Section:**
- Full viewport height with centered content
- Animated typing effect for title
- Subtle particle animation background
- CTA buttons with hover lift effects

**Experience Cards:**
- Timeline layout with connecting lines
- Company logos (if available)
- Expandable details on hover/click
- Tech stack badges

**Skills Section:**
- Categorized skill groups (Frontend, Backend, Tools)
- Progress indicators or proficiency levels
- Interactive hover states with descriptions

**Projects Grid:**
- 3-column desktop, 2-column tablet, 1-column mobile
- Project cards with hover overlay effects
- Technology badges
- Live demo and GitHub links

**Contact Form:**
- Clean, minimal design
- Input focus states with accent colors
- Success/error message states
- Integration with email service

### Animations
**Page Transitions:**
- Subtle fade-in on route changes
- Staggered content reveals using Framer Motion

**Scroll Animations:**
- Elements fade up on scroll using intersection observer
- Parallax effects on hero background (subtle)

**Micro-interactions:**
- Button hover states with scale transform
- Card lift on hover (translateY + shadow)
- Loading spinners for form submissions

## Images
**Profile Photo**: Professional headshot (200x200px) in About section, rounded with subtle border
**Project Screenshots**: High-quality mockups for each project (600x400px) with hover overlays
**Company Logos**: Small icons (40x40px) in experience timeline
**Background**: Optional subtle geometric pattern or gradient overlay in hero section

**No large hero image required** - focus on clean typography and subtle animations for visual impact.

## Responsive Behavior
- **Desktop (1920px+)**: Full multi-column layouts, hover interactions
- **Tablet (768px-1024px)**: Reduced columns, touch-friendly sizing
- **Mobile (320px-767px)**: Single column, collapsible navigation, touch gestures

## Accessibility Features
- High contrast ratios in all themes
- Focus indicators for keyboard navigation
- Screen reader friendly labels
- Reduced motion preferences respected