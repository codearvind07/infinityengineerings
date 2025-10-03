import './globals.css';
import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { initPerformanceOptimizations } from '@/lib/performance';

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter-tight'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infinity-engineerings.com'),
  title: 'INFINITY ENGINEERINGS - Professional Fire & Smoke Protection Solutions',
  description: 'Leading provider of fire curtains, smoke curtains, and protection systems for commercial buildings. Certified safety solutions for atriums, corridors, and escape routes.',
  keywords: 'fire curtains, smoke curtains, fire protection, building safety, compartmentation, fire safety systems',
  openGraph: {
    title: 'INFINITY ENGINEERINGS Systems - Professional Fire & Smoke Protection',
    description: 'Industry-leading fire and smoke protection systems for commercial buildings.',
    url: 'https://www.infinity-engineerings.com',
    siteName: 'INFINITY ENGINEERINGS',
    images: [
      {
        url: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INFINITY ENGINEERINGS - Fire & Smoke Protection',
    description: 'Professional fire protection solutions for commercial buildings.',
    images: ['https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize performance optimizations on client side
  if (typeof window !== 'undefined') {
    initPerformanceOptimizations();
  }
  
  return (
    <html lang="en" className={`scroll-smooth ${interTight.variable}`}>
      <body className={`${interTight.className} bg-background text-foreground two-color-gradient`}>
        {children}
      </body>
    </html>
  );
}