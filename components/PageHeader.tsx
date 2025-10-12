import { ReactNode } from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  children,
  className = ''
}: PageHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className="standard-badge">
          <span className="text-sm font-bold text-white">{badge}</span>
        </div>
      )}
      
      <h1 className="standard-heading-1 standard-gradient-text">
        {title}
      </h1>
      
      {subtitle && (
        <p className="standard-subheading">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}