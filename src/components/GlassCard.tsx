import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -4, borderColor: 'rgba(153, 69, 255, 0.25)', boxShadow: '0 10px 30px -10px rgba(153, 69, 255, 0.15)' } : undefined}
      className={`glass-panel rounded-[14px] p-8 transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      {/* Decorative inner glow hover effect */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-tr from-accentPurple/5 via-transparent to-accentGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
