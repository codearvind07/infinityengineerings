import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  children,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <div className="standard-badge">
          <span className="text-sm font-bold text-white">{badge}</span>
        </div>
      )}
      
      <h2 className="standard-heading-2 standard-gradient-text">
        {title}
      </h2>
      
      {subtitle && (
        <p className="standard-subheading">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}