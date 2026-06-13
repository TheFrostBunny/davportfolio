import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`
        bg-card border border-border rounded-lg p-6
        transition-all duration-200
        ${hover ? 'cursor-pointer hover:border-gray-500' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
