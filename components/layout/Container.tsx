// components/layout/Container.tsx
'use client'

import { ReactNode } from 'react';
import { useGrid } from '@/hooks/useGrid';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function Container({ 
  children, 
  className = '', 
  fullWidth = false 
}: ContainerProps) {
  const { config } = useGrid();
  
  return (
    <div 
      className={`mx-auto ${className}`}
      style={{
        maxWidth: fullWidth ? '100%' : `${config.maxWidth}px`,
        paddingLeft: `${config.margin}px`,
        paddingRight: `${config.margin}px`,
      }}
    >
      {children}
    </div>
  );
}