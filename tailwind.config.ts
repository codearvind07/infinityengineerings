import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: [], // Remove dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter Tight', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // ThreeDSphere theme colors (light version)
        'sphere-navy-dark': 'hsl(var(--sphere-navy-dark))',
        'sphere-navy-medium': 'hsl(var(--sphere-navy-medium))',
        'sphere-navy-light': 'hsl(var(--sphere-navy-light))',
        'sphere-blue-primary': 'hsl(var(--sphere-blue-primary))',
        'sphere-blue-light': 'hsl(var(--sphere-blue-light))',
        'sphere-blue-pale': 'hsl(var(--sphere-blue-pale))',
        'sphere-slate-light': 'hsl(var(--sphere-slate-light))',
        'sphere-slate-medium': 'hsl(var(--sphere-slate-medium))',
        'sphere-white': 'hsl(var(--sphere-white))',
        // Golden luxury color palette (light version)
        'gold-dark': 'hsl(var(--gold-dark))',
        'gold-deep': 'hsl(var(--gold-deep))',
        'gold-primary': 'hsl(var(--gold-primary))',
        'gold-light': 'hsl(var(--gold-light))',
        'gold-bright': 'hsl(var(--gold-bright))',
        'gold-accent': 'hsl(var(--gold-accent))',
        'gold-copper': 'hsl(var(--gold-copper))',
        'gold-platinum': 'hsl(var(--gold-platinum))',
        'gold-champagne': 'hsl(var(--gold-champagne))',
        'gold-glow': 'hsl(var(--gold-glow))',
        // Legacy colors for compatibility
        'fire-red': 'hsl(var(--fire-red))',
        'smoke-gray': 'hsl(var(--smoke-gray))',
        'safety-blue': 'hsl(var(--safety-blue))',
        'energy-orange': 'hsl(var(--energy-orange))',
        'tech-teal': 'hsl(var(--tech-teal))',
        'premium-gold': 'hsl(var(--premium-gold))',
        'success-green': 'hsl(var(--success-green))',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'light-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(var(--sphere-blue-primary) / 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px hsl(var(--sphere-blue-primary) / 0.3), 0 0 40px hsl(var(--sphere-blue-light) / 0.2)',
          },
        },
        'light-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.02)',
          },
        },
        'gold-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(var(--gold-primary) / 0.3), 0 0 40px hsl(var(--gold-primary) / 0.2), 0 0 60px hsl(var(--gold-primary) / 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px hsl(var(--gold-bright) / 0.4), 0 0 60px hsl(var(--gold-bright) / 0.3), 0 0 90px hsl(var(--gold-bright) / 0.2)',
          },
        },
        'gold-pulse': {
          '0%, 100%': {
            opacity: '0.9',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.03)',
          },
        },
        'gold-float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },
        'gold-rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'gold-shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'gold-drift': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100vw)',
          },
        },
        'gold-sparkle': {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'light-glow': 'light-glow 3s ease-in-out infinite',
        'light-pulse': 'light-pulse 2s ease-in-out infinite',
        'gold-glow': 'gold-glow 3s ease-in-out infinite',
        'gold-pulse': 'gold-pulse 2s ease-in-out infinite',
        'gold-float': 'gold-float 6s ease-in-out infinite',
        'gold-rotate': 'gold-rotate 20s linear infinite',
        'gold-shimmer': 'gold-shimmer 2s linear infinite',
        'gold-drift': 'gold-drift 30s linear infinite',
        'gold-sparkle': 'gold-sparkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;