// components/ConfigurableGrid.tsx
'use client'

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { CSSProperties } from 'react';

// Configuration par défaut
const defaultConfig = {
  mobile: {
    columns: 6,
    gutter: 4,
    margin: 8,
    mockupWidth: 375,
    fontScalingMaxWidth: 475,
    screen: 'sm',
  },
  tablet: {
    columns: 8,
    gutter: 8,
    margin: 16,
    mockupWidth: 768,
    fontScalingMaxWidth: 1024,
    screen: 'md',
  },
  desktop: {
    columns: 12,
    gutter: 8,
    margin: 16,
    mockupWidth: 1440,
    fontScalingMaxWidth: 1680,
  }
};

export default function ConfigurableGrid() {
  const [mounted, setMounted] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [config, setConfig] = useState(defaultConfig.desktop);
  
  // Gestion de l'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Détection du breakpoint optimisée
  const updateBreakpoint = useCallback(() => {
    if (!mounted) return;
    
    const width = window.innerWidth;
    
    if (width >= 1024) {
      setBreakpoint('desktop');
      setConfig(defaultConfig.desktop);
    } else if (width >= 768) {
      setBreakpoint('tablet');
      setConfig(defaultConfig.tablet);
    } else {
      setBreakpoint('mobile');
      setConfig(defaultConfig.mobile);
    }
  }, [mounted]);
  
  useEffect(() => {
    if (!mounted) return;
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, [updateBreakpoint, mounted]);
  
  // Raccourci clavier optimisé
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.altKey && e.key.toLowerCase() === 'g') {
      setShowGrid(prev => !prev);
    }
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, mounted]);

  // Styles mémorisés
  const buttonStyle = useMemo<CSSProperties>(() => ({
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    backgroundColor: 'grey',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    zIndex: 9999,
    cursor: 'pointer',
  }), []);

  const infoStyle = useMemo<CSSProperties>(() => ({
    position: 'fixed',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgb(27, 43, 76)',
    color: 'white',
    padding: '12px',
    borderRadius: '4px',
    zIndex: 9999,
    fontSize: '12px',
  }), []);

  const gridStyle = useMemo<CSSProperties>(() => ({
    position: 'fixed',
    top: 0,
    left: `${config.margin}px`,
    width: `calc(100vw - ${2 * config.margin}px)`,
    height: '100vh',
    zIndex: 999,
    pointerEvents: 'none',
    display: 'grid',
    gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
    gap: `${config.gutter}px`,
  }), [config.margin, config.columns, config.gutter]);

  const columnStyle = useMemo<CSSProperties>(() => ({
    height: '100%',
    backgroundColor: 'rgba(25, 61, 118, 0.1)',
    border: '1px dashed rgba(59, 131, 246, 0.07)',
    display: 'flex',
    justifyContent: 'center',
  }), []);

  const numberStyle = useMemo<CSSProperties>(() => ({
    fontSize: '12px',
    color: 'rgb(49, 50, 52)',
    marginTop: '16px',
    fontWeight: 'bold',
  }), []);

  // Ne rien rendre côté serveur
  if (!mounted) {
    return null;
  }
  
  return (
    <>
      <button 
        style={buttonStyle}
        onClick={() => setShowGrid(!showGrid)}
      >
        {showGrid ? 'Masquer' : 'Afficher'} la grille
      </button>
      
      {showGrid && (
        <div style={infoStyle}>
          <div>Breakpoint: <strong>{breakpoint}</strong></div>
          <div>Colonnes: <strong>{config.columns}</strong></div>
          <div>Gouttière: <strong>{config.gutter}px</strong></div>
          <div>Marge: <strong>{config.margin}px</strong></div>
        </div>
      )}
      
      {showGrid && (
        <div style={gridStyle}>
          {Array.from({ length: config.columns }).map((_, index) => (
            <div key={index} style={columnStyle}>
              <div style={numberStyle}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}