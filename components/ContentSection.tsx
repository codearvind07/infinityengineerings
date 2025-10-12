import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ContentSection({
  children,
  className = '',
  id
}: ContentSectionProps) {
  return (
    <section id={id} className={`standard-section-spacing ${className}`}>
      <div className="standard-container">
        {children}
      </div>
    </section>
  );
}