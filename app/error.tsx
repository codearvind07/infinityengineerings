'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-sphere-blue-primary mb-6">500</h1>
        <h2 className="text-3xl font-bold text-sphere-white mb-4">Something went wrong!</h2>
        <p className="text-lg text-sphere-white/80 mb-8">
          We're sorry, but something went wrong on our end. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => reset()}
            size="lg" 
            className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-sphere-navy-dark px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-sphere-navy-dark/50">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}