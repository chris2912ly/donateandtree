import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 ${
        hover ? 'hover:scale-105 transition-transform duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
