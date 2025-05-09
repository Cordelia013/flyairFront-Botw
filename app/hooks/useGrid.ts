// hooks/useGrid.ts
'use client'

import { useState, useEffect } from 'react';
import gridConfig from '@/lib/config/grid';

export function useGrid() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [config, setConfig] = useState(gridConfig.mobile);

  useEffect(() => {
    // Fonction pour mettre à jour le breakpoint en fonction de la taille de la fenêtre
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

    // Initialiser au chargement
    updateBreakpoint();
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return { config, breakpoint };
}