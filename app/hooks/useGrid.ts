// app/hooks/useGrid.ts
'use client'

import { useState, useEffect } from 'react';
import gridConfig, { Breakpoint, GridConfig } from '@/lib/config/grid';

export function useGrid() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');
  const [config, setConfig] = useState<GridConfig>(gridConfig.mobile);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= gridConfig.desktop.mockupWidth) {
        setBreakpoint('desktop');
        setConfig(gridConfig.desktop);
      } else if (width >= gridConfig.tablet.mockupWidth) {
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

  return { config, breakpoint };
}