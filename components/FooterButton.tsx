import React from 'react';

interface FooterButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'danger' | 'default';
  icon?: React.ReactNode;
  className?: string;
  align?: 'left' | 'right';
}

export const FooterButton: React.FC<FooterButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary', 
  icon, 
  className = '',
  align = 'left' 
}) => {
  const baseStyles = "px-8 py-3 rounded text-white font-semibold text-lg shadow-md active:transform active:translate-y-0.5 transition-all flex items-center gap-2 uppercase tracking-wide";
  
  const variants = {
    primary: "bg-[#3B82B6] hover:bg-[#3271a1]", // Matches the specific blue in screenshot
    danger: "bg-[#E04F4F] hover:bg-[#c94141]",   // Matches the specific red in screenshot
    default: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className} ${align === 'right' ? 'ml-auto' : ''}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};