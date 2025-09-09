# Infinity Engineerings - Design System Style Guide

## Color Scheme

### Primary Colors
- **Primary Accent**: `rgb(247, 87, 73)` - Used for headings, primary text, and key UI elements
- **Gold Theme**: Various gold shades from CSS variables (gold-primary, gold-light, etc.)
- **Fire Red**: `hsl(var(--fire-red))` - Used for banners and attention-grabbing elements

### Backgrounds
- **Dark Background**: `hsl(var(--background))` - Deep navy for main backgrounds
- **Card Backgrounds**: `hsl(var(--card))` - Darker navy for card components

### Text
- **Foreground**: `hsl(var(--foreground))` - Pure white for text
- **Muted Text**: `hsl(var(--muted-foreground))` - Subtle gray-blue for secondary text

## Typography

### Font Family
- **Primary Font**: `'Inter Tight'` with fallback to system-ui and sans-serif

### Headings
- Hero titles: 5xl-7xl with gold-glow-text class
- Section titles: 4xl-5xl with accent color

### Body Text
- Primary content: text-xl-md with text-foreground
- Secondary content: text-muted-foreground

## UI Components

### Buttons
- **Primary Button**: gold-button with gold-interactive effects
- **Secondary Button**: gold-border-glow with glass effect
- **Hover Effects**: Scale (1.05), Glow, Shine animation

### Cards
- **Base Style**: glass-effect or glass-effect-dark with border and shadow
- **Interactive Cards**: gold-interactive with hover lift and glow

### Banners & Announcements
- **Event Banner**: Fire red gradient with marquee animation
- **Popup Content**: Glassmorphism with gold accents

## Animations

### Framer Motion
- Scroll animations with `whileInView`
- Hover effects with `whileHover`
- Component transitions

### CSS Animations
- **Marquee**: Scrolling text animation
- **Glow**: Pulsing glow effects
- **Pulse**: Subtle scale animations
- **CountUp**: Animated number counting for stats

## Design Principles

1. **Consistency**: Maintain consistent use of colors, spacing, and typography
2. **Hierarchy**: Use size, color, and spacing to establish visual hierarchy
3. **Interactivity**: Add subtle hover effects to interactive elements
4. **Accessibility**: Ensure sufficient contrast ratios
5. **Performance**: Optimize animations for smooth 60fps rendering

## Implementation Guidelines

1. **Color Usage**: Always use defined CSS variables or Tailwind classes
2. **Spacing**: Use Tailwind's spacing system (4px-96px)
3. **Responsive Design**: Implement mobile-first approach with Tailwind's responsive utilities
4. **Component Reusability**: Build modular components for consistent reuse
5. **Animation Best Practices**: 
   - Use Framer Motion for component animations
   - Keep CSS animations simple and performant
   - Add hover states to interactive elements
   - Use scroll animations for on-screen reveal effects

This style guide will help maintain the modern design theme that your client appreciates while ensuring consistency across all components and pages.