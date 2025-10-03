import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-card to-background px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-sphere-blue-primary to-sphere-blue-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-sphere-blue-primary text-foreground hover:bg-sphere-blue-primary/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-card/50">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}