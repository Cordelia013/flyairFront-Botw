// hooks/useGrid.ts
'use client'

import { useState, useEffect } from 'react';
import gridConfig from '@/lib/config/grid';

export function useGrid() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [config, setConfig] = useState(gridConfig.mobile);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setBreakpoint('desktop');
        setConfig(gridConfig.desktop);
      } else if (width >= 768) {
        setBreakpoint('tablet');
        setConfig(gridConfig.tablet);
      } else {
        setBreakpoint('mobile');
        setConfig(gridConfig.mobile);
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  // Fonctions utilitaires pratiques
  const getContainerStyle = (fullWidth = false) => {
    return {
      maxWidth: fullWidth ? '100%' : `${config.mockupWidth}px`,
      marginLeft: `${config.margin}px`,
      marginRight: `${config.margin}px`,
    };
  };

  const getGridStyle = () => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
      gap: `${config.gutter}px`,
    };
  };

  return { 
    config, 
    breakpoint, 
    getContainerStyle, 
    getGridStyle 
  };
}