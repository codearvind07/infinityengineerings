import { ReactNode } from 'react';

interface StandardCardProps {
  children: ReactNode;
  className?: string;
}

export default function StandardCard({
  children,
  className = ''
}: StandardCardProps) {
  return (
    <div className={`bg-white/90 backdrop-blur-lg border border-indigo-200/50 rounded-2xl p-8 shadow-lg ${className}`}>
      {children}
    </div>
  );
}