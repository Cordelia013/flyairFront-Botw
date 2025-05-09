// components/layout/Grid.tsx
'use client'

import { ReactNode } from 'react';
import { useGrid } from '@/app/hooks/useGrid';

type GridProps = {
  children: ReactNode;
  className?: string;
};

export default function Grid({ children, className = '' }: GridProps) {
  const { config } = useGrid();
  
  return (
    <div 
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
        gap: `${config.gutter}px`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}