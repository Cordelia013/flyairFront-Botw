// components/layout/Container.tsx
'use client'

import { ReactNode } from 'react';
import { useGrid } from '@/hooks/useGrid';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  as?: keyof React.ElementType;
};

export default function Container({ 
  children,
  className = '', 
  fullWidth = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  as: __Component = 'div' as never
}: ContainerProps) {
  const { config } = useGrid();
  return (
    <div 
      className={`mx-auto relative z-10 ${className}`}
      style={{
        maxWidth: fullWidth ? '100%' : `${config.mockupWidth}px`,
        paddingLeft: `${config.margin}px`,
        paddingRight: `${config.margin}px`,
      }}
    >
      {children}
    </div>
  );
}