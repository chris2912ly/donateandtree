import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'glass-button text-white font-medium',
    secondary: 'glass border-white/30 text-white/90 font-medium',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-xl
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GlassButton;
