// app/hooks/useGrid.ts
'use client'

import { useState, useEffect } from 'react';
import gridConfig from '@/lib/config/grid';

export function useGrid() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [config, setConfig] = useState({
    ...gridConfig.mobile,
    getContainerClass: () => `w-full px-[${gridConfig.mobile.margin}px]`,
    getGridClass: () => `grid grid-cols-${gridConfig.mobile.columns} gap-[${gridConfig.mobile.gutter}px]`
  });

  useEffect(() => {
    // Fonction qui détermine le breakpoint actuel
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setBreakpoint('desktop');
        setConfig({
          ...gridConfig.desktop,
          getContainerClass: () => `w-full px-[${gridConfig.desktop.margin}px]`,
          getGridClass: () => `grid grid-cols-${gridConfig.desktop.columns} gap-[${gridConfig.desktop.gutter}px]`
        });
      } else if (width >= 768) {
        setBreakpoint('tablet');
        setConfig({
          ...gridConfig.tablet,
          getContainerClass: () => `w-full px-[${gridConfig.tablet.margin}px]`,
          getGridClass: () => `grid grid-cols-${gridConfig.tablet.columns} gap-[${gridConfig.tablet.gutter}px]`
        });
      } else {
        setBreakpoint('mobile');
        setConfig({
          ...gridConfig.mobile,
          getContainerClass: () => `w-full px-[${gridConfig.mobile.margin}px]`,
          getGridClass: () => `grid grid-cols-${gridConfig.mobile.columns} gap-[${gridConfig.mobile.gutter}px]`
        });
      }
    };

    // Initialiser au montage du composant
    updateBreakpoint();
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', updateBreakpoint);
    
    // Nettoyer l'écouteur d'événements
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return {
    config,
    breakpoint,
    allConfig: gridConfig
  };
}