import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <img
      src="/solgate-logo-removebg-preview.png"
      width={size}
      height={size}
      alt="SolGate Logo"
      className={`object-contain transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ filter: 'drop-shadow(0px 4px 12px rgba(153, 69, 255, 0.15))' }}
    />
  );
};
