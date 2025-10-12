import { ButtonHTMLAttributes, ReactNode } from 'react';

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function StandardButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: StandardButtonProps) {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg";
  
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}