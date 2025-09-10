'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

// Color Palette
const colors = [
  { name: 'Primary', value: 'rgb(247, 87, 73)', class: 'bg-primary' },
  { name: 'Gold Primary', value: 'hsl(var(--gold-primary))', class: 'bg-gold-primary' },
  { name: 'Gold Light', value: 'hsl(var(--gold-light))', class: 'bg-gold-light' },
  { name: 'Gold Bright', value: 'hsl(var(--gold-bright))', class: 'bg-gold-bright' },
  { name: 'Gold Accent', value: 'hsl(var(--gold-accent))', class: 'bg-gold-accent' },
  { name: 'Gold Copper', value: 'hsl(var(--gold-copper))', class: 'bg-gold-copper' },
  { name: 'Gold Platinum', value: 'hsl(var(--gold-platinum))', class: 'bg-gold-platinum' },
  { name: 'Gold Glow', value: 'hsl(var(--gold-glow))', class: 'bg-gold-glow' },
  { name: 'Fire Red', value: 'hsl(var(--fire-red))', class: 'bg-fire-red' },
  { name: 'Safety Blue', value: 'hsl(var(--safety-blue))', class: 'bg-safety-blue' },
  { name: 'Energy Orange', value: 'hsl(var(--energy-orange))', class: 'bg-energy-orange' },
  { name: 'Tech Teal', value: 'hsl(var(--tech-teal))', class: 'bg-tech-teal' },
  { name: 'Premium Gold', value: 'hsl(var(--premium-gold))', class: 'bg-premium-gold' },
  { name: 'Success Green', value: 'hsl(var(--success-green))', class: 'bg-success-green' },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gold-glow-text mb-6">
            Infinity Engineerings <span className="text-fire-red">Design System</span>
          </h1>
          <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
            A comprehensive guide to the design tokens, components, and patterns used throughout the Infinity Engineerings website.
          </p>
        </motion.div>

        {/* Color Palette */}
        <section className="mb-20">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gold-glow-text mb-4">Color Palette</h2>
            <p className="text-gold-platinum/80 max-w-2xl">
              The Infinity Engineerings design system uses a vibrant red-orange primary color with a gold-themed dark background.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="gold-interactive">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex justify-between items-center">
                      <span>{color.name}</span>
                      <Badge variant="outline" className="text-xs gold-border-glow">
                        {color.value}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`h-24 rounded-lg ${color.class} gold-glow mb-4`}></div>
                    <p className="text-sm text-gold-platinum/60">{color.class}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gold-glow-text mb-4">Typography</h2>
            <p className="text-gold-platinum/80 max-w-2xl">
              The design system uses a clean, modern typographic scale with Inter Tight as the primary font.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Headings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Headings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h1 className="text-5xl font-bold gold-glow-text">Heading 1</h1>
                  <h2 className="text-4xl font-bold gold-glow-text">Heading 2</h2>
                  <h3 className="text-3xl font-bold gold-glow-text">Heading 3</h3>
                  <h4 className="text-2xl font-bold gold-glow-text">Heading 4</h4>
                  <h5 className="text-xl font-bold gold-glow-text">Heading 5</h5>
                  <h6 className="text-lg font-bold gold-glow-text">Heading 6</h6>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Body Text</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg gold-glow-text">Gold Glow Text: {`<p className="gold-glow-text">Text</p>`}</p>
                  <p className="text-lg text-foreground">Foreground Text: {`<p className="text-foreground">Text</p>`}</p>
                  <p className="text-lg text-muted-foreground">Muted Foreground: {`<p className="text-muted-foreground">Text</p>`}</p>
                  <p className="text-lg text-gold-platinum">Gold Platinum: {`<p className="text-gold-platinum">Text</p>`}</p>
                  <p className="text-lg text-gold-light">Gold Light: {`<p className="text-gold-light">Text</p>`}</p>
                  <p className="text-lg text-gold-bright">Gold Bright: {`<p className="text-gold-bright">Text</p>`}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* UI Components */}
        <section className="mb-20">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gold-glow-text mb-4">UI Components</h2>
            <p className="text-gold-platinum/80 max-w-2xl">
              Consistent UI components with interactive effects and animations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Buttons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button className="gold-button">Primary Button</Button>
                    <Button variant="outline" className="gold-border-glow">Secondary Button</Button>
                  </div>
                  <p className="text-sm text-gold-platinum/60">
                    {`<Button className="gold-button">Primary</Button>`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="gold-card gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gold-platinum/80 mb-4">Cards use glassmorphism with subtle animations.</p>
                  <div className="h-24 bg-gold-deep/50 border border-gold-primary/30 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gold-platinum">Card Content</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Form Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Form Elements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Input Field" />
                  <Textarea placeholder="Textarea" rows={2} />
                  <p className="text-sm text-gold-platinum/60">
                    {`<Input placeholder="Input Field" />`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-20">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gold-glow-text mb-4">Animations</h2>
            <p className="text-gold-platinum/80 max-w-2xl">
              Interactive and scroll animations enhance the user experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* CSS Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">CSS Animations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-16 flex items-center">
                    <div className="inline-block px-6 py-3 bg-gold-deep/50 border border-gold-primary/30 rounded-full animate-marquee">
                      This is a marquee animation - Scroll horizontally for continuous text
                    </div>
                  </div>
                  <div className="h-16 flex items-center">
                    <div className="inline-block px-6 py-3 bg-gold-deep/50 border border-gold-primary/30 rounded-full animate-gold-pulse">
                      This element has a pulsing glow animation
                    </div>
                  </div>
                  <p className="text-sm text-gold-platinum/60">
                    {`<div className="animate-marquee">Marquee</div>`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Framer Motion Components */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Framer Motion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="h-16 flex items-center justify-center bg-gold-deep/50 border border-gold-primary/30 rounded-lg"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gold-platinum">Hover to animate</span>
                  </motion.div>
                  <motion.div
                    className="h-16 flex items-center justify-center bg-gold-deep/50 border border-gold-primary/30 rounded-lg"
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gold-platinum">Tap to animate</span>
                  </motion.div>
                  <p className="text-sm text-gold-platinum/60">
                    {`<motion.div whileHover={{ scale: 1.05 }}>`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-20">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gold-glow-text mb-4">Design Principles</h2>
            <p className="text-gold-platinum/80 max-w-2xl">
              The guiding principles that shape our design decisions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Color</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gold-platinum/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-fire-red mt-0.5" />
                      <span>Primary color: rgb(247, 87, 73) for key elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-primary mt-0.5" />
                      <span>Gold theme for backgrounds and accents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-light mt-0.5" />
                      <span>Dark theme with navy blues for contrast</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Spacing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gold-platinum/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-fire-red mt-0.5" />
                      <span>Consistent spacing using Tailwind's spacing system (4px-96px)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-primary mt-0.5" />
                      <span>Responsive padding and margin values for different screen sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-light mt-0.5" />
                      <span>Consistent grid and flex spacing for layout</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Typography</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gold-platinum/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-fire-red mt-0.5" />
                      <span>Primary font: 'Inter Tight' with system-ui fallback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-primary mt-0.5" />
                      <span>Font sizes range from text-sm to text-5xl</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-light mt-0.5" />
                      <span>Text colors use gold-themed text classes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="gold-interactive">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gold-glow-text">Interactivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gold-platinum/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-fire-red mt-0.5" />
                      <span>Hover effects on interactive elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-primary mt-0.5" />
                      <span>Scale animations for hover states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-light mt-0.5" />
                      <span>Glow effects for important elements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Back to Home */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button size="lg" className="gold-button text-lg px-8 py-4 rounded-full font-semibold gold-interactive">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}