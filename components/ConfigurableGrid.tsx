// components/ConfigurableGrid.tsx
'use client'

import { useState, useEffect } from 'react';

// Configuration par défaut
const defaultConfig = {
  mobile: {
    columns: 6,
    gutter: 10,
    margin: 10,
    mockupWidth: 375,
    fontScalingMaxWidth: 475,
    screen: 'sm',
  },
  tablet: {
    columns: 8,
    gutter: 16,
    margin: 12,
    mockupWidth: 768,
    fontScalingMaxWidth: 1024,
    screen: 'md',
  },
  desktop: {
    columns: 18,
    gutter: 8,
    margin: 8,
    mockupWidth: 1440,
    fontScalingMaxWidth: 1680,
    
  }
};

export default function ConfigurableGrid() {
  const [showGrid, setShowGrid] = useState(false);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [config, setConfig] = useState(defaultConfig.desktop);
  
  // Détection du breakpoint
  useEffect(() => {
    const updateBreakpoint = () => {
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
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  // Raccourci clavier Alt+G
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'g') {
        setShowGrid(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <>
      {/* Bouton toujours visible */}
      <button 
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'grey',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          zIndex: 9999,
          cursor: 'pointer',
        }}
        onClick={() => setShowGrid(!showGrid)}
      >
        {showGrid ? 'Masquer' : 'Afficher'} la grille
      </button>
      
      {/* Informations sur la grille */}
      {/* {showGrid && (
        <div style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          backgroundColor: 'rgb(27, 43, 76)',
          color: 'white',
          padding: '12px',
          borderRadius: '4px',
          zIndex: 9999,
          fontSize: '12px',
        }}>
          <div>Breakpoint: <strong>{breakpoint}</strong></div>
          <div>Colonnes: <strong>{config.columns}</strong></div>
          <div>Gouttière: <strong>{config.gutter}px</strong></div>
          <div>Marge: <strong>{config.margin}px</strong></div>
        </div>
      )} */}
      
      {/* Grille plein écran */}
      {showGrid && (
       <div style={{
        position: 'fixed',
        top: 0,
        left: `${config.margin}px`,  // Marge à gauche
        width: `calc(100vw - ${2 * config.margin}px)`,  // Largeur totale moins les marges
        height: '100vh',
        zIndex: 999,
        pointerEvents: 'none',
        display: 'grid',
        gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
        gap: `${config.gutter}px`,
      }}>
          {Array.from({ length: config.columns }).map((_, index) => (
            <div 
              key={index} 
              style={{
                height: '100%',
                backgroundColor: 'rgba(25, 61, 118, 0.1)',
                border: '1px dashed rgba(59, 131, 246, 0.07)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{
                fontSize: '12px',
                color: 'rgb(225, 229, 235)',
                marginTop: '16px',
                fontWeight: 'bold',
              }}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}