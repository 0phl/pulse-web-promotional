import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary:
    'bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25',
    secondary:
    'bg-white text-gray-900 hover:bg-gray-50 shadow-sm border border-gray-200',
    outline: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50',
    ghost: 'text-gray-600 hover:text-teal-600 hover:bg-teal-50/50'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className || ''}
      `}
      {...props}>

      {children}
    </motion.button>);

}